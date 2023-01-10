const menu = require(`../../data/menu`)

exports.menuroute = (req, res) => {
    res.render(`web/menu`, { menu: menu, })
}


exports.menu = (req, res) => {
    res.render(`web/detailpage`, { menu: menu, })
}

