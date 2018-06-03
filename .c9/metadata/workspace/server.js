{"filter":false,"title":"server.js","tooltip":"/server.js","undoManager":{"mark":81,"position":81,"stack":[[{"start":{"row":46,"column":59},"end":{"row":46,"column":60},"action":"insert","lines":[" "],"id":271}],[{"start":{"row":29,"column":48},"end":{"row":29,"column":49},"action":"remove","lines":[":"],"id":272}],[{"start":{"row":29,"column":48},"end":{"row":29,"column":49},"action":"insert","lines":["."],"id":273}],[{"start":{"row":29,"column":56},"end":{"row":29,"column":57},"action":"insert","lines":[":"],"id":274}],[{"start":{"row":29,"column":57},"end":{"row":29,"column":58},"action":"insert","lines":[" "],"id":278}],[{"start":{"row":14,"column":4},"end":{"row":24,"column":3},"action":"insert","lines":["var nodeoutlook = require('.././outlook')","nodeoutlook.sendEmail({","    auth: {","        user: \"johnexample@organization.com\",","        pass: \"johnpassword\"","    }, from: 'info@myorganization.com',","    to: 'jackexample@organization.com',","    subject: 'Hey you, awesome!',","    html: '<b>This is bold text</b>',","    text: 'This is text version!'","});"],"id":279}],[{"start":{"row":17,"column":15},"end":{"row":17,"column":43},"action":"remove","lines":["johnexample@organization.com"],"id":280},{"start":{"row":17,"column":15},"end":{"row":17,"column":38},"action":"insert","lines":["construment@hotmail.com"]}],[{"start":{"row":20,"column":9},"end":{"row":20,"column":37},"action":"remove","lines":["jackexample@organization.com"],"id":281},{"start":{"row":20,"column":9},"end":{"row":20,"column":32},"action":"insert","lines":["construment@hotmail.com"]}],[{"start":{"row":19,"column":14},"end":{"row":19,"column":37},"action":"remove","lines":["info@myorganization.com"],"id":282},{"start":{"row":19,"column":14},"end":{"row":19,"column":37},"action":"insert","lines":["construment@hotmail.com"]}],[{"start":{"row":18,"column":15},"end":{"row":18,"column":27},"action":"remove","lines":["johnpassword"],"id":283},{"start":{"row":18,"column":15},"end":{"row":18,"column":34},"action":"insert","lines":["ProyectoTacares2018"]}],[{"start":{"row":14,"column":31},"end":{"row":14,"column":44},"action":"remove","lines":[".././outlook'"],"id":284},{"start":{"row":14,"column":31},"end":{"row":14,"column":32},"action":"insert","lines":["."]},{"start":{"row":14,"column":32},"end":{"row":14,"column":33},"action":"insert","lines":["/"]}],[{"start":{"row":14,"column":33},"end":{"row":14,"column":58},"action":"insert","lines":["nodejs-nodemailer-outlook"],"id":285}],[{"start":{"row":14,"column":58},"end":{"row":14,"column":59},"action":"insert","lines":["."],"id":286},{"start":{"row":14,"column":59},"end":{"row":14,"column":60},"action":"insert","lines":["j"]},{"start":{"row":14,"column":60},"end":{"row":14,"column":61},"action":"insert","lines":["s"]}],[{"start":{"row":14,"column":61},"end":{"row":14,"column":62},"action":"insert","lines":["'"],"id":287}],[{"start":{"row":14,"column":60},"end":{"row":14,"column":61},"action":"remove","lines":["s"],"id":288},{"start":{"row":14,"column":59},"end":{"row":14,"column":60},"action":"remove","lines":["j"]},{"start":{"row":14,"column":58},"end":{"row":14,"column":59},"action":"remove","lines":["."]}],[{"start":{"row":13,"column":4},"end":{"row":13,"column":5},"action":"insert","lines":["/"],"id":310},{"start":{"row":13,"column":5},"end":{"row":13,"column":6},"action":"insert","lines":["*"]}],[{"start":{"row":67,"column":4},"end":{"row":67,"column":5},"action":"insert","lines":["*"],"id":311},{"start":{"row":67,"column":5},"end":{"row":67,"column":6},"action":"insert","lines":["/"]}],[{"start":{"row":67,"column":6},"end":{"row":68,"column":0},"action":"insert","lines":["",""],"id":312},{"start":{"row":68,"column":0},"end":{"row":68,"column":4},"action":"insert","lines":["    "]},{"start":{"row":68,"column":4},"end":{"row":69,"column":0},"action":"insert","lines":["",""]},{"start":{"row":69,"column":0},"end":{"row":69,"column":4},"action":"insert","lines":["    "]},{"start":{"row":69,"column":4},"end":{"row":70,"column":0},"action":"insert","lines":["",""]},{"start":{"row":70,"column":0},"end":{"row":70,"column":4},"action":"insert","lines":["    "]},{"start":{"row":70,"column":4},"end":{"row":71,"column":0},"action":"insert","lines":["",""]},{"start":{"row":71,"column":0},"end":{"row":71,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":70,"column":4},"end":{"row":73,"column":40},"action":"insert","lines":["var express = require('express'),","    path = require('path'),","    nodeMailer = require('nodemailer'),","    bodyParser = require('body-parser');"],"id":313}],[{"start":{"row":73,"column":40},"end":{"row":74,"column":0},"action":"insert","lines":["",""],"id":314},{"start":{"row":74,"column":0},"end":{"row":74,"column":4},"action":"insert","lines":["    "]},{"start":{"row":74,"column":4},"end":{"row":75,"column":0},"action":"insert","lines":["",""]},{"start":{"row":75,"column":0},"end":{"row":75,"column":4},"action":"insert","lines":["    "]},{"start":{"row":75,"column":4},"end":{"row":76,"column":0},"action":"insert","lines":["",""]},{"start":{"row":76,"column":0},"end":{"row":76,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":76,"column":4},"end":{"row":84,"column":9},"action":"insert","lines":["let transporter = nodeMailer.createTransport({","          host: 'smtp.gmail.com',","          port: 465,","          secure: true,","          auth: {","              user: 'xxx@xx.com',","              pass: 'xxxx'","          }","      });"],"id":315}],[{"start":{"row":84,"column":9},"end":{"row":85,"column":0},"action":"insert","lines":["",""],"id":316},{"start":{"row":85,"column":0},"end":{"row":85,"column":6},"action":"insert","lines":["      "]},{"start":{"row":85,"column":6},"end":{"row":86,"column":0},"action":"insert","lines":["",""]},{"start":{"row":86,"column":0},"end":{"row":86,"column":6},"action":"insert","lines":["      "]}],[{"start":{"row":86,"column":6},"end":{"row":92,"column":8},"action":"insert","lines":["let mailOptions = {","          from: '\"Krunal Lathiya\" <xx@gmail.com>', // sender address","          to: req.body.to, // list of receivers","          subject: req.body.subject, // Subject line","          text: req.body.body, // plain text body","          html: '<b>NodeJS Email Tutorial</b>' // html body","      };"],"id":317}],[{"start":{"row":92,"column":8},"end":{"row":93,"column":0},"action":"insert","lines":["",""],"id":318},{"start":{"row":93,"column":0},"end":{"row":93,"column":6},"action":"insert","lines":["      "]},{"start":{"row":93,"column":6},"end":{"row":94,"column":0},"action":"insert","lines":["",""]},{"start":{"row":94,"column":0},"end":{"row":94,"column":6},"action":"insert","lines":["      "]},{"start":{"row":94,"column":6},"end":{"row":95,"column":0},"action":"insert","lines":["",""]},{"start":{"row":95,"column":0},"end":{"row":95,"column":6},"action":"insert","lines":["      "]}],[{"start":{"row":95,"column":6},"end":{"row":101,"column":13},"action":"insert","lines":["transporter.sendMail(mailOptions, (error, info) => {","          if (error) {","              return console.log(error);","          }","          console.log('Message %s sent: %s', info.messageId, info.response);","              res.render('index');","          });"],"id":319}],[{"start":{"row":102,"column":0},"end":{"row":103,"column":0},"action":"insert","lines":["",""],"id":320}],[{"start":{"row":5,"column":0},"end":{"row":5,"column":1},"action":"insert","lines":["/"],"id":321},{"start":{"row":5,"column":1},"end":{"row":5,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":81,"column":21},"end":{"row":81,"column":31},"action":"remove","lines":["xxx@xx.com"],"id":322},{"start":{"row":81,"column":21},"end":{"row":81,"column":22},"action":"insert","lines":["k"]},{"start":{"row":81,"column":22},"end":{"row":81,"column":23},"action":"insert","lines":["e"]},{"start":{"row":81,"column":23},"end":{"row":81,"column":24},"action":"insert","lines":["e"]},{"start":{"row":81,"column":24},"end":{"row":81,"column":25},"action":"insert","lines":["s"]},{"start":{"row":81,"column":25},"end":{"row":81,"column":26},"action":"insert","lines":["e"]},{"start":{"row":81,"column":26},"end":{"row":81,"column":27},"action":"insert","lines":["m"]},{"start":{"row":81,"column":27},"end":{"row":81,"column":28},"action":"insert","lines":["a"]}],[{"start":{"row":81,"column":28},"end":{"row":81,"column":29},"action":"insert","lines":["@"],"id":323},{"start":{"row":81,"column":29},"end":{"row":81,"column":30},"action":"insert","lines":["g"]},{"start":{"row":81,"column":30},"end":{"row":81,"column":31},"action":"insert","lines":["m"]},{"start":{"row":81,"column":31},"end":{"row":81,"column":32},"action":"insert","lines":["a"]},{"start":{"row":81,"column":32},"end":{"row":81,"column":33},"action":"insert","lines":["i"]},{"start":{"row":81,"column":33},"end":{"row":81,"column":34},"action":"insert","lines":["l"]},{"start":{"row":81,"column":34},"end":{"row":81,"column":35},"action":"insert","lines":["."]},{"start":{"row":81,"column":35},"end":{"row":81,"column":36},"action":"insert","lines":["v"]},{"start":{"row":81,"column":36},"end":{"row":81,"column":37},"action":"insert","lines":["o"]}],[{"start":{"row":81,"column":37},"end":{"row":81,"column":38},"action":"insert","lines":["m"],"id":324}],[{"start":{"row":81,"column":37},"end":{"row":81,"column":38},"action":"remove","lines":["m"],"id":325},{"start":{"row":81,"column":36},"end":{"row":81,"column":37},"action":"remove","lines":["o"]},{"start":{"row":81,"column":35},"end":{"row":81,"column":36},"action":"remove","lines":["v"]}],[{"start":{"row":81,"column":35},"end":{"row":81,"column":36},"action":"insert","lines":["c"],"id":326},{"start":{"row":81,"column":36},"end":{"row":81,"column":37},"action":"insert","lines":["o"]},{"start":{"row":81,"column":37},"end":{"row":81,"column":38},"action":"insert","lines":["m"]}],[{"start":{"row":82,"column":24},"end":{"row":82,"column":25},"action":"remove","lines":["x"],"id":327},{"start":{"row":82,"column":23},"end":{"row":82,"column":24},"action":"remove","lines":["x"]},{"start":{"row":82,"column":22},"end":{"row":82,"column":23},"action":"remove","lines":["x"]},{"start":{"row":82,"column":21},"end":{"row":82,"column":22},"action":"remove","lines":["x"]}],[{"start":{"row":82,"column":21},"end":{"row":82,"column":22},"action":"insert","lines":["1"],"id":328},{"start":{"row":82,"column":22},"end":{"row":82,"column":23},"action":"insert","lines":["4"]},{"start":{"row":82,"column":23},"end":{"row":82,"column":24},"action":"insert","lines":["-"]},{"start":{"row":82,"column":24},"end":{"row":82,"column":25},"action":"insert","lines":["1"]},{"start":{"row":82,"column":25},"end":{"row":82,"column":26},"action":"insert","lines":["1"]},{"start":{"row":82,"column":26},"end":{"row":82,"column":27},"action":"insert","lines":["-"]}],[{"start":{"row":82,"column":27},"end":{"row":82,"column":28},"action":"insert","lines":["9"],"id":329},{"start":{"row":82,"column":28},"end":{"row":82,"column":29},"action":"insert","lines":["4"]}],[{"start":{"row":87,"column":35},"end":{"row":87,"column":48},"action":"remove","lines":["xx@gmail.com>"],"id":330},{"start":{"row":87,"column":35},"end":{"row":87,"column":52},"action":"insert","lines":["keesema@gmail.com"]}],[{"start":{"row":87,"column":18},"end":{"row":87,"column":32},"action":"remove","lines":["Krunal Lathiya"],"id":331},{"start":{"row":87,"column":18},"end":{"row":87,"column":19},"action":"insert","lines":["C"]},{"start":{"row":87,"column":19},"end":{"row":87,"column":20},"action":"insert","lines":["i"]}],[{"start":{"row":87,"column":19},"end":{"row":87,"column":20},"action":"remove","lines":["i"],"id":332}],[{"start":{"row":87,"column":19},"end":{"row":87,"column":20},"action":"insert","lines":["o"],"id":333},{"start":{"row":87,"column":20},"end":{"row":87,"column":21},"action":"insert","lines":["n"]},{"start":{"row":87,"column":21},"end":{"row":87,"column":22},"action":"insert","lines":["s"]},{"start":{"row":87,"column":22},"end":{"row":87,"column":23},"action":"insert","lines":["t"]},{"start":{"row":87,"column":23},"end":{"row":87,"column":24},"action":"insert","lines":["r"]},{"start":{"row":87,"column":24},"end":{"row":87,"column":25},"action":"insert","lines":["u"]},{"start":{"row":87,"column":25},"end":{"row":87,"column":26},"action":"insert","lines":["m"]}],[{"start":{"row":87,"column":26},"end":{"row":87,"column":27},"action":"insert","lines":["e"],"id":334},{"start":{"row":87,"column":27},"end":{"row":87,"column":28},"action":"insert","lines":["n"]},{"start":{"row":87,"column":28},"end":{"row":87,"column":29},"action":"insert","lines":["t"]}],[{"start":{"row":88,"column":14},"end":{"row":88,"column":25},"action":"remove","lines":["req.body.to"],"id":335},{"start":{"row":88,"column":14},"end":{"row":88,"column":15},"action":"insert","lines":["l"]},{"start":{"row":88,"column":15},"end":{"row":88,"column":16},"action":"insert","lines":["u"]},{"start":{"row":88,"column":16},"end":{"row":88,"column":17},"action":"insert","lines":["i"]},{"start":{"row":88,"column":17},"end":{"row":88,"column":18},"action":"insert","lines":["s"]},{"start":{"row":88,"column":18},"end":{"row":88,"column":19},"action":"insert","lines":["-"]},{"start":{"row":88,"column":19},"end":{"row":88,"column":20},"action":"insert","lines":["e"]}],[{"start":{"row":88,"column":20},"end":{"row":88,"column":21},"action":"insert","lines":["s"],"id":336},{"start":{"row":88,"column":21},"end":{"row":88,"column":22},"action":"insert","lines":["t"]},{"start":{"row":88,"column":22},"end":{"row":88,"column":23},"action":"insert","lines":["i"]},{"start":{"row":88,"column":23},"end":{"row":88,"column":24},"action":"insert","lines":["v"]},{"start":{"row":88,"column":24},"end":{"row":88,"column":25},"action":"insert","lines":["e"]},{"start":{"row":88,"column":25},"end":{"row":88,"column":26},"action":"insert","lines":["n"]},{"start":{"row":88,"column":26},"end":{"row":88,"column":27},"action":"insert","lines":["@"]}],[{"start":{"row":88,"column":27},"end":{"row":88,"column":28},"action":"insert","lines":["h"],"id":337},{"start":{"row":88,"column":28},"end":{"row":88,"column":29},"action":"insert","lines":["o"]},{"start":{"row":88,"column":29},"end":{"row":88,"column":30},"action":"insert","lines":["t"]},{"start":{"row":88,"column":30},"end":{"row":88,"column":31},"action":"insert","lines":["m"]},{"start":{"row":88,"column":31},"end":{"row":88,"column":32},"action":"insert","lines":["a"]},{"start":{"row":88,"column":32},"end":{"row":88,"column":33},"action":"insert","lines":["i"]},{"start":{"row":88,"column":33},"end":{"row":88,"column":34},"action":"insert","lines":["l"]},{"start":{"row":88,"column":34},"end":{"row":88,"column":35},"action":"insert","lines":["."]},{"start":{"row":88,"column":35},"end":{"row":88,"column":36},"action":"insert","lines":["c"]}],[{"start":{"row":88,"column":36},"end":{"row":88,"column":37},"action":"insert","lines":["o"],"id":338},{"start":{"row":88,"column":37},"end":{"row":88,"column":38},"action":"insert","lines":["m"]}],[{"start":{"row":88,"column":14},"end":{"row":88,"column":15},"action":"insert","lines":["'"],"id":339}],[{"start":{"row":88,"column":39},"end":{"row":88,"column":40},"action":"insert","lines":["'"],"id":340}],[{"start":{"row":89,"column":19},"end":{"row":89,"column":35},"action":"remove","lines":["req.body.subject"],"id":341},{"start":{"row":89,"column":19},"end":{"row":89,"column":20},"action":"insert","lines":["'"]},{"start":{"row":89,"column":20},"end":{"row":89,"column":21},"action":"insert","lines":["'"]}],[{"start":{"row":89,"column":20},"end":{"row":89,"column":21},"action":"insert","lines":["t"],"id":342},{"start":{"row":89,"column":21},"end":{"row":89,"column":22},"action":"insert","lines":["e"]},{"start":{"row":89,"column":22},"end":{"row":89,"column":23},"action":"insert","lines":["s"]},{"start":{"row":89,"column":23},"end":{"row":89,"column":24},"action":"insert","lines":["t"]}],[{"start":{"row":90,"column":16},"end":{"row":90,"column":29},"action":"remove","lines":["req.body.body"],"id":343},{"start":{"row":90,"column":16},"end":{"row":90,"column":17},"action":"insert","lines":["\""]},{"start":{"row":90,"column":17},"end":{"row":90,"column":18},"action":"insert","lines":["\""]}],[{"start":{"row":90,"column":17},"end":{"row":90,"column":18},"action":"remove","lines":["\""],"id":344}],[{"start":{"row":90,"column":16},"end":{"row":90,"column":17},"action":"remove","lines":["\""],"id":345}],[{"start":{"row":90,"column":16},"end":{"row":90,"column":18},"action":"insert","lines":["''"],"id":346}],[{"start":{"row":90,"column":17},"end":{"row":90,"column":18},"action":"insert","lines":["e"],"id":347},{"start":{"row":90,"column":18},"end":{"row":90,"column":19},"action":"insert","lines":["s"]},{"start":{"row":90,"column":19},"end":{"row":90,"column":20},"action":"insert","lines":["t"]},{"start":{"row":90,"column":20},"end":{"row":90,"column":21},"action":"insert","lines":["o"]}],[{"start":{"row":90,"column":21},"end":{"row":90,"column":22},"action":"insert","lines":[" "],"id":348},{"start":{"row":90,"column":22},"end":{"row":90,"column":23},"action":"insert","lines":["e"]},{"start":{"row":90,"column":23},"end":{"row":90,"column":24},"action":"insert","lines":["s"]}],[{"start":{"row":90,"column":24},"end":{"row":90,"column":25},"action":"insert","lines":[" "],"id":349},{"start":{"row":90,"column":25},"end":{"row":90,"column":26},"action":"insert","lines":["u"]},{"start":{"row":90,"column":26},"end":{"row":90,"column":27},"action":"insert","lines":["n"]},{"start":{"row":90,"column":27},"end":{"row":90,"column":28},"action":"insert","lines":["a"]}],[{"start":{"row":90,"column":28},"end":{"row":90,"column":29},"action":"insert","lines":[" "],"id":350},{"start":{"row":90,"column":29},"end":{"row":90,"column":30},"action":"insert","lines":["p"]},{"start":{"row":90,"column":30},"end":{"row":90,"column":31},"action":"insert","lines":["r"]},{"start":{"row":90,"column":31},"end":{"row":90,"column":32},"action":"insert","lines":["u"]},{"start":{"row":90,"column":32},"end":{"row":90,"column":33},"action":"insert","lines":["e"]},{"start":{"row":90,"column":33},"end":{"row":90,"column":34},"action":"insert","lines":["b"]},{"start":{"row":90,"column":34},"end":{"row":90,"column":35},"action":"insert","lines":["a"]}],[{"start":{"row":78,"column":0},"end":{"row":78,"column":20},"action":"remove","lines":["          port: 465,"],"id":367},{"start":{"row":77,"column":33},"end":{"row":78,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":78,"column":0},"end":{"row":78,"column":23},"action":"remove","lines":["          secure: true,"],"id":368},{"start":{"row":77,"column":33},"end":{"row":78,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":77,"column":30},"end":{"row":77,"column":31},"action":"remove","lines":["m"],"id":369},{"start":{"row":77,"column":29},"end":{"row":77,"column":30},"action":"remove","lines":["o"]},{"start":{"row":77,"column":28},"end":{"row":77,"column":29},"action":"remove","lines":["c"]},{"start":{"row":77,"column":27},"end":{"row":77,"column":28},"action":"remove","lines":["."]},{"start":{"row":77,"column":26},"end":{"row":77,"column":27},"action":"remove","lines":["l"]},{"start":{"row":77,"column":25},"end":{"row":77,"column":26},"action":"remove","lines":["i"]},{"start":{"row":77,"column":24},"end":{"row":77,"column":25},"action":"remove","lines":["a"]},{"start":{"row":77,"column":23},"end":{"row":77,"column":24},"action":"remove","lines":["m"]},{"start":{"row":77,"column":22},"end":{"row":77,"column":23},"action":"remove","lines":["g"]},{"start":{"row":77,"column":21},"end":{"row":77,"column":22},"action":"remove","lines":["."]},{"start":{"row":77,"column":20},"end":{"row":77,"column":21},"action":"remove","lines":["p"]},{"start":{"row":77,"column":19},"end":{"row":77,"column":20},"action":"remove","lines":["t"]},{"start":{"row":77,"column":18},"end":{"row":77,"column":19},"action":"remove","lines":["m"]},{"start":{"row":77,"column":17},"end":{"row":77,"column":18},"action":"remove","lines":["s"]}],[{"start":{"row":77,"column":17},"end":{"row":77,"column":18},"action":"insert","lines":["G"],"id":370},{"start":{"row":77,"column":18},"end":{"row":77,"column":19},"action":"insert","lines":["m"]},{"start":{"row":77,"column":19},"end":{"row":77,"column":20},"action":"insert","lines":["a"]},{"start":{"row":77,"column":20},"end":{"row":77,"column":21},"action":"insert","lines":["i"]},{"start":{"row":77,"column":21},"end":{"row":77,"column":22},"action":"insert","lines":["l"]}],[{"start":{"row":77,"column":10},"end":{"row":77,"column":14},"action":"remove","lines":["host"],"id":371},{"start":{"row":77,"column":10},"end":{"row":77,"column":11},"action":"insert","lines":["s"]},{"start":{"row":77,"column":11},"end":{"row":77,"column":12},"action":"insert","lines":["e"]},{"start":{"row":77,"column":12},"end":{"row":77,"column":13},"action":"insert","lines":["r"]},{"start":{"row":77,"column":13},"end":{"row":77,"column":14},"action":"insert","lines":["v"]},{"start":{"row":77,"column":14},"end":{"row":77,"column":15},"action":"insert","lines":["i"]},{"start":{"row":77,"column":15},"end":{"row":77,"column":16},"action":"insert","lines":["c"]},{"start":{"row":77,"column":16},"end":{"row":77,"column":17},"action":"insert","lines":["e"]}],[{"start":{"row":76,"column":4},"end":{"row":76,"column":7},"action":"remove","lines":["let"],"id":372},{"start":{"row":76,"column":4},"end":{"row":76,"column":5},"action":"insert","lines":["v"]},{"start":{"row":76,"column":5},"end":{"row":76,"column":6},"action":"insert","lines":["a"]},{"start":{"row":76,"column":6},"end":{"row":76,"column":7},"action":"insert","lines":["r"]}],[{"start":{"row":84,"column":6},"end":{"row":84,"column":9},"action":"remove","lines":["let"],"id":373},{"start":{"row":84,"column":6},"end":{"row":84,"column":7},"action":"insert","lines":["v"]},{"start":{"row":84,"column":7},"end":{"row":84,"column":8},"action":"insert","lines":["a"]},{"start":{"row":84,"column":8},"end":{"row":84,"column":9},"action":"insert","lines":["r"]}],[{"start":{"row":70,"column":4},"end":{"row":90,"column":8},"action":"remove","lines":["var express = require('express'),","    path = require('path'),","    nodeMailer = require('nodemailer'),","    bodyParser = require('body-parser');","    ","    ","    var transporter = nodeMailer.createTransport({","          service: 'Gmail',","          auth: {","              user: 'keesema@gmail.com',","              pass: '14-11-94'","          }","      });","      ","      var mailOptions = {","          from: '\"Construment\" <keesema@gmail.com', // sender address","          to: 'luis-estiven@hotmail.com', // list of receivers","          subject: 'test', // Subject line","          text: 'esto es una prueba', // plain text body","          html: '<b>NodeJS Email Tutorial</b>' // html body","      };"],"id":374}],[{"start":{"row":6,"column":0},"end":{"row":7,"column":0},"action":"insert","lines":["",""],"id":375},{"start":{"row":7,"column":0},"end":{"row":8,"column":0},"action":"insert","lines":["",""]},{"start":{"row":8,"column":0},"end":{"row":9,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":8,"column":0},"end":{"row":28,"column":8},"action":"insert","lines":["var express = require('express'),","    path = require('path'),","    nodeMailer = require('nodemailer'),","    bodyParser = require('body-parser');","    ","    ","    var transporter = nodeMailer.createTransport({","          service: 'Gmail',","          auth: {","              user: 'keesema@gmail.com',","              pass: '14-11-94'","          }","      });","      ","      var mailOptions = {","          from: '\"Construment\" <keesema@gmail.com', // sender address","          to: 'luis-estiven@hotmail.com', // list of receivers","          subject: 'test', // Subject line","          text: 'esto es una prueba', // plain text body","          html: '<b>NodeJS Email Tutorial</b>' // html body","      };"],"id":376}],[{"start":{"row":8,"column":4},"end":{"row":8,"column":33},"action":"remove","lines":["express = require('express'),"],"id":377}],[{"start":{"row":8,"column":4},"end":{"row":9,"column":0},"action":"remove","lines":["",""],"id":378},{"start":{"row":8,"column":4},"end":{"row":8,"column":8},"action":"remove","lines":["    "]}],[{"start":{"row":14,"column":20},"end":{"row":14,"column":21},"action":"remove","lines":["G"],"id":379}],[{"start":{"row":14,"column":20},"end":{"row":14,"column":21},"action":"insert","lines":["g"],"id":380}],[{"start":{"row":13,"column":26},"end":{"row":13,"column":27},"action":"remove","lines":["M"],"id":381}],[{"start":{"row":13,"column":26},"end":{"row":13,"column":27},"action":"insert","lines":["m"],"id":382}],[{"start":{"row":9,"column":8},"end":{"row":9,"column":9},"action":"remove","lines":["M"],"id":383}],[{"start":{"row":9,"column":8},"end":{"row":9,"column":9},"action":"insert","lines":["m"],"id":384}],[{"start":{"row":25,"column":36},"end":{"row":26,"column":59},"action":"remove","lines":[", // plain text body","          html: '<b>NodeJS Email Tutorial</b>' // html body"],"id":385}],[{"start":{"row":14,"column":20},"end":{"row":14,"column":21},"action":"remove","lines":["g"],"id":386}],[{"start":{"row":14,"column":20},"end":{"row":14,"column":21},"action":"insert","lines":["G"],"id":387}],[{"start":{"row":22,"column":31},"end":{"row":22,"column":32},"action":"remove","lines":["<"],"id":388},{"start":{"row":22,"column":30},"end":{"row":22,"column":31},"action":"remove","lines":[" "]},{"start":{"row":22,"column":29},"end":{"row":22,"column":30},"action":"remove","lines":["\""]},{"start":{"row":22,"column":28},"end":{"row":22,"column":29},"action":"remove","lines":["t"]},{"start":{"row":22,"column":27},"end":{"row":22,"column":28},"action":"remove","lines":["n"]},{"start":{"row":22,"column":26},"end":{"row":22,"column":27},"action":"remove","lines":["e"]},{"start":{"row":22,"column":25},"end":{"row":22,"column":26},"action":"remove","lines":["m"]},{"start":{"row":22,"column":24},"end":{"row":22,"column":25},"action":"remove","lines":["u"]},{"start":{"row":22,"column":23},"end":{"row":22,"column":24},"action":"remove","lines":["r"]},{"start":{"row":22,"column":22},"end":{"row":22,"column":23},"action":"remove","lines":["t"]},{"start":{"row":22,"column":21},"end":{"row":22,"column":22},"action":"remove","lines":["s"]},{"start":{"row":22,"column":20},"end":{"row":22,"column":21},"action":"remove","lines":["n"]},{"start":{"row":22,"column":19},"end":{"row":22,"column":20},"action":"remove","lines":["o"]},{"start":{"row":22,"column":18},"end":{"row":22,"column":19},"action":"remove","lines":["C"]},{"start":{"row":22,"column":17},"end":{"row":22,"column":18},"action":"remove","lines":["\""]}],[{"start":{"row":34,"column":6},"end":{"row":35,"column":0},"action":"insert","lines":["",""],"id":416},{"start":{"row":35,"column":0},"end":{"row":35,"column":4},"action":"insert","lines":["    "]},{"start":{"row":35,"column":4},"end":{"row":36,"column":0},"action":"insert","lines":["",""]},{"start":{"row":36,"column":0},"end":{"row":36,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":35,"column":4},"end":{"row":35,"column":5},"action":"insert","lines":["v"],"id":417}],[{"start":{"row":35,"column":4},"end":{"row":35,"column":5},"action":"remove","lines":["v"],"id":418}],[{"start":{"row":35,"column":4},"end":{"row":43,"column":9},"action":"insert","lines":[" var transporter = nodemailer.createTransport({","          service: 'Gmail',","          auth: {","              user: 'keesema@gmail.com',","              clientId: '696537653215-76v6p9gjhktbe4gkqvn6n9lj1l5tq398.apps.googleusercontent.com',","              clientSecret: 'mJT7lAGbbWr_rk63rVeI6XIs',","              refreshToken: '1/IxHAxT9LMBxoEPQc-JUR00Vvt2e--XO_ciRO993be58'","          }","      });"],"id":419}]]},"ace":{"folds":[],"scrolltop":420,"scrollleft":0,"selection":{"start":{"row":43,"column":9},"end":{"row":43,"column":9},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":25,"state":"no_regex","mode":"ace/mode/javascript"}},"timestamp":1525133232206,"hash":"ad39bef423dc80c4d9a9b498f524b896725a2797"}