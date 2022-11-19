const{ response, request} = require("express")
const pool = require("../db/connection");
const modelanime = require("../models/anime")
const {queryanimeExist} = require("../models/anime")

const getAnime = async (req = request, res = response) => {
    let conn
    try{
        conn = await pool.getConnection() //realizamos la conexion
        
        //generamos la consulta
        const person = await conn.query(modelanime.querygetAnime, (error) => {if (error) throw error})

        if(!person){ // En caso de no haber registros lo informamos
            res.status(404).json({msg: "NO existen usuarios registrados"})
            return
        }
        res.json({person})
    }catch (error){

        console.log(error)
        res.status(500).json({msg: error}) //informamos del error
    } finally{
        if (conn) conn.end() //termina la conexion

    }
}

const getAnimeByID = async (req = request, res = response) =>{
    const {id} = req.params
    let conn
    try{
        conn = await pool.getConnection() //realizamos la conexion
        
        //generamos la consulta
        const [person] = await conn.query(modelanime.querygetAnimeByID,[id], (error) => {if (error) throw error})
        console.log(person)

        if(!person){ // En caso de no haber registros lo informamos
            res.status(404).json({msg: `NO existen usuarios registrados con el ID ${id}`})
            return
        }
        res.json({person})
    }catch (error){

        console.log(error)
        res.status(500).json({msg: error}) //informamos del error
    } finally{
        if (conn) conn.end() //termina la conexion

    }


}



const deleteAnimeByID = async (req = request, res = response) =>{
        const {id} = req.params
        let conn
        try{
            conn = await pool.getConnection() //realizamos la conexion
            
            //generamos la consulta
            const result = await conn.query(`UPDATE siete SET Active = 'N' WHERE ID = ${id}`, (error) => {if (error) throw error})
            console.log(result.affectedRows)

            if(result.affectedRows === 0){ // En caso de no haber registros lo informamos
                res.status(404).json({msg: `NO existen usuarios registrados con el ID ${id}`})
                return
            }

            res.json({msg:`Se elemino el usuario con el ID ${id}`})
        }catch (error){
    
            console.log(error)
            res.status(500).json({msg: error}) //informamos del error
        } finally{
            if (conn) conn.end() //termina la conexion
    
        }
    

}
const updateAnimeByperson = async (req = request, res = response) => {
    //const {id} = req.params
    const {Name,
        Hability, 
        race, 
        deadly_sin, 
        years, 
        } = req.body//URI params

    if(!Name || !Hability || !race || !deadly_sin || !years ){
        res.status(400).json({msg: "Faltan Datos"})
        return
    }
    let conn;
    try {
        conn = await pool.getConnection()//Realizamos la conexión

        const [animeExist] = await conn.query(`SELECT Name FROM siete WHERE Name = '${Name}'`)
        
                 //generamos la consulta
                 if(!animeExist){ res.json({msg:`El usuario'${Name}' no existe`})
                    return
                }

                    const result = await conn.query(`UPDATE Usuarios SET 
                    Name = '${Name}',
                    race = '${race}',
                    deadly_sin = ${deadly_sin},
                    years= '${years}'
                    WHERE Name = '${Name}'`, (error) => {if (error) throw error})
                    
                    if (result.affectedRows === 0) {//En caso de no haber resgistros lo informamos
                        res.status(404).json({msg: `No se pudo actualizar el usuario`})
                        return
                        }
   
                    res.json({msg:`Se actualizo satisfactoriamente el usuario '${Name}'`})//Se manda la lista de usuarios
                 
               
    }catch (error){
        console.log(error)
        res.status(500).json({msg: error})//informamos el error
    }finally{
        if (conn) conn.end()//Termina la conexión
    }

}

const prueba = (req = request, res = response) => {
    const {Name} = req.body
    res.json({body: req.body})
}

const addAnime = async (req = request, res = response) => {
    
    // const {Name, Hability, race, deadly_sin, years, Active = 'S'} = req.body
    const {Name} = req.body
    const {prueba} = req.query

    console.log(req.body)

    if(!Name //|| 
        // !Hability || 
        // !race || 
        // !deadly_sin || 
        // !years || 
        // !Active
        ){
    res.status(400).json({msg: "Faltan Datos", body: req.body, prueba: req.query})
    return
    }
    
    let conn;

    try {

        conn = await pool.getConnection()//Realizamos la conexión
        //generamos la consulta
        const [animeExist] = await conn.query(`SELECT Name FROM siete WHERE Name='${Name}`)
        
        if (animeExist) {
            res.json({msg:`el personaje : '${Name}' ya se encuentra registrado.`})
            return
        }
        //generamos la consulta
        const result = await conn.query(
            `INSERT INTO siete(
                Name,
                Hability, 
                race, 
                deadly_sin, 
                years, 
                Active) VALUES (
                    '${Name}',
                    '${Hability}',
                    '${race}',
                    '${deadly_sin}',
                     ${years},
                     '${Active}')`, (error) => {if(error) throw error})

        if (result.affectedRows === 0) {//En caso de no haber resgistros lo informamos
            res.status(404).json({msg: `No se pudo agregar el personaje '${Name}'`})
            return
        }
        res.json({msg:`Se agregó satisfactoriamente el personaje con Nombre '${Name}'`})//Se manda la lista de usuarios
        
    } catch (error){
        console.log(error)
        res.status(500).json({msg: error})//informamos el error
    }finally{
        if (conn) conn.end()//Termina la conexión
    }
}

module.exports = {getAnime, getAnimeByID, deleteAnimeByID, updateAnimeByperson, addAnime, prueba}