module.exports = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");

  res.send([
    {
        uuid: 'B9407F30-F5F8-466E-AFF9-25556B57FE6D',
        major: 15676,
        minor: 51068,
        name: 'Office'
    }
  ]);
  next();
}