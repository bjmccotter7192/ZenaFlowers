'use strict';
const nodemailer = require('nodemailer');
const credentials = require('../config');

exports.sendMail = (req, res) => {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    nodemailer.createTestAccount((err, account) => {
        // create reusable transporter object using the default SMTP transport
        const transporter = nodemailer.createTransport({
            host: `${credentials.SMTP_HOST}`,
            port: `${credentials.SMTP_PORT}`,
            auth: {
                user: `${credentials.SMTP_USERNAME}`,
                pass: `${credentials.SMTP_PASSWORD}`
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        // setup email data with unicode symbols
        let mailOptions = {
            from: `${req.email}`, // sender address
            to: 'bjemail@email.com, tiffanyemail@email.com', // list of receivers
            subject: `${req.subject}`, // Subject line
            text: `${req.message}`, // plain text body
            html: `<div>${req.message}</div>` // html body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }

            //Remove this when i really sign up with smtp
            console.log('Message sent: %s', info.messageId);
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        });
    });
}
