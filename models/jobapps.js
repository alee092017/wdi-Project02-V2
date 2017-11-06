const db = require('../db/config');

const Jobapp = {};

Jobapp.findAll = () => {
  return db.query('SELECT * FROM jobapps');
};

// Jobapp.findById = id => {
//   return db.oneOrNone(
//     `SELECT * FROM jobapps
//     WHERE id = $1`, [id] );
// };

// Jobapp.create = jobapp => {
//   return db.one(
//     `INSERT INTO jobapps
//     (status, company, jobtitle, linktoapp, datesubmitted, followup, intcontactname, intcontactemail, notes)
//     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
//     RETURNING *`, [jobapp.status, jobapp.company, jobapp.jobtitle, jobapp.linktoapp, jobapp.datesubmitted, jobapp.followup, jobapp.intcontactname, jobapp.intcontactemail, jobapp.notes]);
// };

// Jobapp.update = (jobapp, id) => {
//   return db.one(
//     `UPDATE jobapps SET
//     status = $1,
//     company = $2,
//     jobtitle = $3,
//     linktoapp = $4,
//     datesubmitted = $5,
//     followup = $6,
//     intcontactname = $7,
//     intcontactemail = $8,
//     notes = $7,
//     WHERE id = $10
//     RETURNING *`, [jobapp.status, jobapp.company, jobapp.jobtitle, jobapp.linktoapp, jobapp.datesubmitted, jobapp.followup, jobapp.intcontactname, jobapp.intcontactemail, jobapp.notes];
// };

// Jobapp.destroy = id => {
//   return db.none(
//     `DELETE FROM jobapps
//     WHERE id = $1`, [id]);
// };

module.exports = Jobapp;
