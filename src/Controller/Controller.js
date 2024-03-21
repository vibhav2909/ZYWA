


const CardModel = require("../Modals/CardModel.js");
   
const getCardStatus = async (req, res) => {
    try {
      const findData = req.query.mobile_number;
      if (!findData) {
        throw new Error("Please provide the card id or mobile number!");

      }

      const findcri = {
              $or: [
                { "mobile": findData },
                { "cardID": findData }
              ]
            };

      const cardStatus = await CardModel.find(findcri);
      
      if (cardStatus) {
        res.status(200).json({
          status: true,
          message: "Card Status DetailsSSS",
          data: cardStatus
        });
      } else {
        res.status(404).json({
          status: false,
          message: "Card not found"
        });
      }
    } catch (error) {
      res.status(500).json({ status: false, message: error.message });
    }
};

module.exports = { getCardStatus };

