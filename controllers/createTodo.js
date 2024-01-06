const todoschema = require("../models/schema");

exports.createTodo = async (req, res) => {
    try {
        const { title, description } = req.body;
        const response = await todoschema.create({ title, description });

        res.status(200).json({
            success: true,
            data: response,
            message: "data entered successfully",
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

// // ISko pehle se he schema de denge
// const schema = require("../models/schema");

// // kisi route me hit hokar yaha
// // aye honge toh route handler
// exports.createTodo = async (req, res) => {
//     try {
//         // extract title & description from req body
//         const { title, description } = req.body;
//         // Naya todo banaya $ insert it into DB
//         const response = await schema.create({ title, description });
//         // Success Flag
//         res.status(200).json({
//             success: true,
//             data: response,
//             message: "Entry Created Successfully",
//         });
//     } catch (err) {
//         console.error(err);
//         console.log(err);
//         res.status(500).json({
//             success: false,
//             data: "internal server issue",
//             message: err.message,
//         });
//     }
// };

