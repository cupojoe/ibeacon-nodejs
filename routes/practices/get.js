module.exports = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");

  res.send([
    {name: 'Account Management', color: 'E74C3C'},
    {name: 'Project Management', color: 'EA772A'},
    {name: 'Experience Strategy', color: 'F1C40F'},
    {name: 'Interaction Design', color: 'AD51AD'},
    {name: 'Visual Design', color: '0098CC'},
    {name: 'Front-End Development', color: '2BB275'},
    {name: 'Content', color: 'A6BEBF'}
  ]);
  next();
}