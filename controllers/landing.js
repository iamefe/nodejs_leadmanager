
const models = require('../models');

exports.get_landing = function(req, res, next) {
  res.render('landing', { title: 'Express' });
}

exports.submit_lead = function(req, res, next) {
  return models.Lead.create({
    email: req.body.lead_email
  }).then(lead => {
    res.redirect('/leads')
    //console.log(lead.dataValues); //to see the data gotten back from the db
  })
}

exports.show_leads = function(req, res, next) {
  return models.Lead.findAll().then(leads => {
    res.render('landing', { title: 'Express', leads: leads });
  })
}