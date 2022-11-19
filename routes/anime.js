const {Router} = require("express")
const {getAnime,getAnimeByID ,deleteAnimeByID, updateAnimeByperson, addAnime, prueba } = require("../controllers/anime")

const router = Router()

//http://localhost:4000/api/v1/messages
//http://localhost:4000/api/v1/anime

/// GET ///

router.get("/", getAnime)
router.get("/id/:id", getAnimeByID )
/// DELETE ///
router.delete("/id/:id",deleteAnimeByID)
//update
router.put("/", updateAnimeByperson)
/// POST ///
router.post("/", prueba)

module.exports = router