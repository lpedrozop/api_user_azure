import {getAllUserDetails, IntroDataAzure} from "../Services/Services_Azure.js"


export const New_user = async (req, res) => {
    try {

        const {ID_Azure, Nombre, Apellido, Correo, Idp} = req.body;

        if(!ID_Azure || !Nombre || !Apellido || !Correo || !Idp){
            console.log('No se están enviando todos los datos')
            return res.status(201).json({
                message: 'No se están enviando todos los datos'})
        }

        if(ID_Azure === ""){
            console.log('No se ha obtenido el ID_Azure')
            return res.status(201).json({
                message: 'No se ha obtenido el ID_Azure'})
        }

        if(Nombre === ""){
            console.log('No se ha obtenido el Nombre')
            return res.status(201).json({
                message: 'No se ha obtenido el Nombre'})
        }

        if(Apellido === ""){
            console.log('No se ha obtenido el Apellido')
            return res.status(201).json({
                message: 'No se ha obtenido el Apellido'})
        }

        if(Correo === ""){
            console.log('No se ha obtenido el Correo')
            return res.status(201).json({
                message: 'No se ha obtenido el Correo'})
        }

        if(Idp === ""){
            console.log('No se ha obtenido el Idp')
            return res.status(201).json({
                message: 'No se ha obtenido el Idp'})
        }

        //Save the Data
        await IntroDataAzure(ID_Azure, Nombre, Apellido, Correo, Idp)

        res.status(200).json('Datos almacenados exitosamente');

    } catch (err) {
        console.error(err);
        res.status(500).json('Error al almacenar datos de usuario');
    }
}


export const getAllUser = async (req, res) => {
    try {
        const profes = await getAllUserDetails();

        if (profes.length) {
            res.status(200).json(profes);
        } else {
            res.status(201).json({ message: 'No se encontraron profesores.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener los profesores.' });
    }
};