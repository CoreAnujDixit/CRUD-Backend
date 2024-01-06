const todoschema = require("../models/schema");


exports.getTodo = async (req, res) => {
    try {
        //fetch all todo items from DB
        const todos = await todoschema.findById({});
        //response
        res.status(200).json({
            success: true,
            data: todos,
            message: "Data Fetch Successfully",
        })
    } catch (error) {
        console.log(error);
        console.error(error);
        res.status(500).json({
            success: false,
            data: "internal Server issue",
            message: error.message,
        })
    }
};
