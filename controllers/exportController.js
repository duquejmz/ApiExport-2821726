const Export = require('../models/export')

const getExports = async (req, res) => {
    try {
        const exports = await Export.find()
        res.json(exports)
    } catch (error) {
        res.status(500).json({ msg: error})
    }
}

module.exports = {
    getExports
}