const Jobapp = reqire('../models/jobapps');

const jobappsController = {};

jobappsController.index = (req, res) => {
  Jobapp.findall()
  .then(jobapps => {
    res.status(200).render('jobapps/jobapps-index', {
      jobapps: jobapps,
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json({error:err});
  });
};

module.exports = jobappsController;
