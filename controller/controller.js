const fs = require("fs");
const list = JSON.parse(fs.readFileSync("car-list.json", "utf-8"));

const moremodels = (req, res) => {
  const result = list.sort((b1, b2) =>
    b2.models.length > b1.models.length
      ? 1
      : b1.models.length > b2.models.length
      ? -1
      : 0
  );

  const finalResult = result.map((brand) => {
    return `${brand.brand} - ${brand.models.length}`;
  });

  if (!req.params.amount) {
    req.params.amount = finalResult.length;
  }

  return res.json(finalResult.slice(0, req.params.amount));
};

const lessmodels = (req, res) => {
  const result = list.sort((b1, b2) =>
    b1.models.length > b2.models.length
      ? 1
      : b2.models.length > b1.models.length
      ? -1
      : 0
  );

  const finalResult = result.map((brand) => {
    return `${brand.brand} - ${brand.models.length}`;
  });

  if (!req.params.amount) {
    req.params.amount = finalResult.length;
  }

  return res.json(finalResult.slice(0, req.params.amount));
};

const bybrand = (req, res) => {
  const filteredList = list.find(
    (item) => item.brand.toLowerCase() === req.body.nomeMarca.toLowerCase()
  );

  if (filteredList) {
    return res.json(filteredList);
  } else return res.json([]);
};

module.exports = {
  moremodels,
  lessmodels,
  bybrand,
};
