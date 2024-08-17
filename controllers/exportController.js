const Export = require('../models/export')

const getExports = async (req, res) => {
    try {
        const exports = await Export.find()
        res.json(exports)
    } catch (error) {
        res.status(500).json({ msg: error})
    }
}

const postExports = async (req, res) => {
    try {
        const {
            nameProduct,
            price,
            weight
        } = req.body
        const newExport = new Export ({
            nameProduct,
            price,
            weight
        })
        await newExport.save()
        res.status(201).json(newExport)
    } catch (error) {
        res.status(404).json({ msg: error })
    }
}

module.exports = {
    getExports,
    postExports
}