import nodemailer from "nodemailer";

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "kismyname.fr@gmail.com",
        pass: "dmmipdiwjxikrluo",
    },
});

/** create reusable sendmail function 
@params {object} options - mail options (to, subject, text, html)
@params {function} callback - callback function to handle response
*/
export const handleSendMail = async (mailDetails) => {
    try {
        const info = await transporter.sendMail(mailDetails)
        return info
    } catch (error) {
        console.log(error);
    }
};