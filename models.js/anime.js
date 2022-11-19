const modelanime = {
    querygetAnime: "SELECT * FROM siete",
    querygetAnimeByID:`SELECT * FROM siete WHERE ID = ?`,
    queryDeleteAnimeByID: `UPDATE name SET Active = 'N' WHERE ID = ?`,
    queryanimeExist:`SELECT Name FROM siete WHERE Name = ?`,
    queryAddAnime:
    `INSERT INTO siete(
                            Name,
                            Hability, 
                            race, 
                            deadly_sin, 
                            years, 
                            Active) VALUES (?,?,?,?,?,?)`
                        }
    
    
    module.exports = modelanime