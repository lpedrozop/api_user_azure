import {getAllUserFromDB, getUserByAzureId, insertUserMetadata} from "../Model/Model_Azure.js"

export const IntroDataAzure = async (ID_Azure, Nombre, Apellido, Correo, Idp) => {

    // 1. Verificar si el Usuario ya existe
    const existingUser = await getUserByAzureId(ID_Azure);

    // Si el pagador no existe, lo insertamos
    if (existingUser === null) {
        console.log("Usuario nuevo, insertando datos");
        const dataToInsert = {
            ID_Azure: ID_Azure,
            Nombre: Nombre,
            Apellido: Apellido,
            Correo: Correo,
            Idp: Idp,
            Crete_time: new Date()
        };
        await insertUserMetadata(dataToInsert);
    }
    else {
        console.log("Usuario antiguo:", existingUser);
    }
}

export const getAllUserDetails = async () => {
    return await getAllUserFromDB();
};