
require('dotenv').config()
const nodemailer = require('nodemailer');

 const transporter = nodemailer.createTransport({
     service: 'gmail',
     auth: {
         user: 'kseniorusa@gmail.com',
         pass: process.env.PASS
     }
 });

const main = () => {
  
    const options = {
        from: 'kseniorusa@gmail.com',
        to: 'bomsan69@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    }

    transporter.sendMail(options, (err, info) => {
        if (err) {
            console.log(err);
        } else {
            console.log(info);
        }
    });

}


main()