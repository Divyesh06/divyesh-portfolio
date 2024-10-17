const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'divyeshlakhotia@gmail.com',  
    pass: 'tnjk hbkb kbua ozkf'  
  }
});

function process_contact_info(data) {
    subject = data.subject
    message = `Received a New Message from Portfolio\nName: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}` 
    send_mail({from: 'divyeshlakhotia@gmail.com', to: 'divyeshlakhotia@gmail.com', subject: subject, text: message})
    
    //Auto Reply

    send_mail({from: 'divyeshlakhotia@gmail.com', to: data.email, subject: `Re: ${subject}`, text: 'Thank you for getting in touch. I have received your message and will get back to you shortly.\n\nRegards,\n\nDivyesh Lakhotia'})
}

function send_mail(mailOptions) {
        transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log('Error sending email:', error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });      
}


module.exports = process_contact_info