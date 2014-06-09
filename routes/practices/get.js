module.exports = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");

  res.send([
    {name: "FED", color: "FFA500"},
    {name: "Design", color: "CDCD00"},
    {name: "ID", color: "C1FFC1"},
    {name: "Strategy", color: "00B2EE"}
  ]);
  next();
}