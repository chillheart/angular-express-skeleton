module.exports = {
	/**
	 * apiController.list()
	 */
    list: function (req, res) {
        return res.status(200).json({
            message: 'Hello World!'
        });
    }
};
