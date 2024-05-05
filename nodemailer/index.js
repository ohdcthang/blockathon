import templateHtml from "./mail-template.js";
import { handleSendMail } from "./mailer.js"
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import http from "http";
import logging from "./logging.js";

const NAMESPACE = "Server";
const app = express();

app.use(bodyParser.text());
app.use(bodyParser.raw());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(cookieParser());

app.use((req, res, next) => {
    const allowedOrigins = ['http://localhost:3000'];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.header('Content-type', 'application/x-msdownload');
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.header('Access-Control-Allow-Credentials', "true");
    if (req.method == "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});

app.get('/v1', (req, res, next) => {
    return res.status(200).json({
        message: "Welcome to server A2U",
    });
});

app.post('/v1/order', async (req, res, next) => {
    const { gmail } = req.body
    if(!gmail) return res.status(400).json({
        status: 'Failed',
        code: 400,
        message: `Sending mail failed`,
    });
    const message = "Congratulations, you have completed your ticket booking payment"
    const options = {
        from: "Art To You", // sender address
        to: gmail, // receiver email
        subject: "Congratulations, you have completed your ticket booking payment", // Subject line
        text: message,
        html: templateHtml(message),
    }
    const info = await handleSendMail(options);
    return res.status(200).json({
        status: 'Success',
        code: 200,
        message: `Sending mail successfully: ${info}`,
    });
});

/** Error handling */
app.use((req, res, next) => {
    const error = new Error("Not found");
    return res.status(404).json({
        message: error.message,
    });
});

/** Log the request */
app.use((req, res, next) => {
    res.on("finish", () => {
        /** Log the res */
        logging.info(
            NAMESPACE,
            `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`
        );
    });
    next();
});
const httpServer = http.createServer(app);

httpServer.listen(1997, () => {
    logging.info(NAMESPACE, `Server is running A2U:1997`)
});