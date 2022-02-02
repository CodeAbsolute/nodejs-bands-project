const router = require("express").Router();
const {
  addBand,
  editBand,
  deleteBand,
  allBands,
  userSpecificBands,
} = require("../Controllers/BandController");
const Band = require("../models/Bands");

// getting user specific bands
router.get("/bands", async (req, res) => {
  res.redirect(`/api/users/${req.session.user._id}/bands`);
});

// rendering the add band page
router.get("/:uid/bands", async (req, res) => {
  res.render("add-band", { id: req.params.uid });
});

// GET USER SPECIFIC BANDS
router.get("/:uid/bands/band/:bid", userSpecificBands);

//CREATE Band from received data
router.post("/:uid/bands", addBand);

//UPDATE BAND DETAILS: PUT
router.put("/:uid/bands/band/:bid", editBand);

//DELETE BAND: DELETE
router.delete("/:uid/bands/band/:bid", deleteBand);

//GET ALL BANDS
router.get("/bands/explore", allBands);

module.exports = router;
