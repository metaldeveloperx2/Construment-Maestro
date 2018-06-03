const express = require('express');


const app = express();
const port = 8081;//antes: process.env.PORT || 8081
//var nodemailer = require('nodemailer');


var path = require('path'),
    nodemailer = require('nodemailer'),
    bodyParser = require('body-parser');
    
    
    var transporter = nodemailer.createTransport({
          service: 'Gmail',
          auth: {
              user: 'keesema@gmail.com',
              pass: '14-11-94'
          }
      });
      
      var mailOptions = {
          from: 'keesema@gmail.com', // sender address
          to: 'luis-estiven@hotmail.com', // list of receivers
          subject: 'test', // Subject line
          text: 'esto es una prueba'
      };


app.get('/contact/send', (req, res) => {
    try{
    const { name, email, message } = req.query;
        console.log('valores serv='+name.toString()+email.toString()+message.toString());
    //enviar mensaje
    /*
     var transporter = nodemailer.createTransport({
          service: 'Gmail',
          auth: {
              user: 'keesema@gmail.com',
              clientId: '696537653215-76v6p9gjhktbe4gkqvn6n9lj1l5tq398.apps.googleusercontent.com',
              clientSecret: 'mJT7lAGbbWr_rk63rVeI6XIs',
              refreshToken: '1/IxHAxT9LMBxoEPQc-JUR00Vvt2e--XO_ciRO993be58'
          }
      });
    
    var nodeoutlook = require('./nodejs-nodemailer-outlook')
nodeoutlook.sendEmail({
    auth: {
        user: "construment@hotmail.com",
        pass: "ProyectoTacares2018"
    }, from: 'construment@hotmail.com',
    to: 'construment@hotmail.com',
    subject: 'Hey you, awesome!',
    html: '<b>This is bold text</b>',
    text: 'This is text version!'
});
    
    var transporter = nodemailer.createTransport("SMTP", {
    service: "hotmail",
    auth: {
        user: "construment@hotmail.com",
        pass: "ProyectoTacares2018"
    }
    });
    
    
    var mailOptions = {
    from: 'construment@hotmail.com',
    to: 'construment@hotmail.com',
    subject: 'Comentario',
    text: 'El usuario ha realizado un comentario. nombre: ' + name + ', email: '+email+', message: '+message,
    html: '<h1>Construment</h1>'
    };
    
    transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }

    console.log('Message sent: ' + info.response);
    });
    
    //segundo
    mailOptions = {
    from: 'construment@hotmail.com',
    to: email.toString(),
    subject: 'Comentario',
    text: 'Gracias por sus comentarios y opiniones. nombre: ' + name + ', email: '+email+', message: '+message,
    html: '<h1>Construment</h1>'
    };
    
    transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }

    console.log('Message sent: ' + info.response);
    });
    */
    
    
    
      
      
      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message %s sent: %s', info.messageId, info.response);
              res.render('index');
          });

    
    //fin mensaje
    res.send({ express:'Muchas gracias por sus opiniones y sugerencias!'+ name });
    } catch(error) {
        res.send({ express:'No se logró completar el proceso' });
    }
    });



app.listen(port, () => console.log(`Listening on port ${port}`));
