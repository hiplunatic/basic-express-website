var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET email us page. */
router.get('/', function(req, res, next) {
  res.render('email', { title: 'Email Sign Up' });
});

/*
	admin will need to put in thier gmail credentails to get email working (it will always fail without it).
	if using another provider (such as yahoo or something, change line 16 to match desired provider).
*/

router.post('/send', function(req, res, next){
	var transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: '',
			pass: ''
		}
	});

	var mailOptions = {
		from: 'John Doe <johndoe@outloook.com>',
		to: 'djensen81@gmail.com',
		subject: 'website submission',
		text: 'you have a new submission with the following details...name: ' + req.body.name + 'Email: ' + req.body.email + ' Message: ' + req.body.message,
		html: '<p>You got a submission with the following details...</p><ul><li>name: ' + req.body.name + '</li><li>email:' + req.body.email + '</li><li>Message: '+ req.body.message + '</li></ul>'
	};

	transporter.sendMail(mailOptions, function(error, info){
		if(error){
			console.log(error);
			res.redirect('/');
		} else {
			console.log('Message sent: ' + info.response);
			res.redirect('/');
		}
	});
});

module.exports = router;
