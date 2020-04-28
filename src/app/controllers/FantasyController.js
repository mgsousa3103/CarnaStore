const { Fantasy } = require("../models");

class FantasyController {
  form(req, res) {
    return res.render("main/store");
  }

  async index(req, res) {
    const fantasies = await Fantasy.findAll();

    return res.render("main/home", { fantasies });
  }

  async show(req, res) {
    const { id } = req.params;

    const fantasy = await Fantasy.findAll({ where: { id: id } });

    return res.render("main/show", { fantasy });
  }

  async store(req, res) {
    const { filename: image } = req.file;

    await Fantasy.create({ ...req.body, image });

    return res.redirect("/store");
  }
}

module.exports = new FantasyController();
