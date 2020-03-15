/* eslint-disable quotes */
const wrongUrl = (req, res) => {
  let regex = /^(users|cards).*/;
  if (!regex.test(req.params.value)) {
  // eslint-disable-next-line quote-props
    res.send({ "message": "Запрашиваемый ресурс не найден" });
  }
};

module.exports = wrongUrl;
