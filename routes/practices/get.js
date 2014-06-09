module.exports = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");

  res.send([
    {name: 'Account Management', color: '3D59AB'},
    {name: 'Project Management', color: 'DC143C'},
    {name: 'Experience Strategy', color: 'FF6347'},
    {name: 'Interaction Design', color: 'C1FFC1'},
    {name: 'Visual Design', color: 'CDCD00'},
    {name: 'Front-End Development', color: 'FFA500'},
    {name: 'Content', color: '00B2EE'}
  ]);
  next();
}