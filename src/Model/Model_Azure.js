import { conectar } from '../Config/configDB.js';

export const insertUserMetadata = (data) => {

    const sql = 'INSERT INTO usuarioestudiante (ID_Azure, Nombre, Apellido, Correo, Idp, Create_time) VALUES (?, ?, ?, ?, ?, ?)';

    return new Promise((resolve, reject) => {
        conectar.query(sql, [data.ID_Azure, data.Nombre, data.Apellido, data.Correo, data.Idp, data.Crete_time], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};


export const getUserByAzureId = async (ID_Azure) => {
    const sql = 'SELECT ID_Azure FROM usuarioestudiante WHERE ID_Azure = ?';

    return new Promise((resolve, reject) => {
        conectar.query(sql, [ID_Azure], (err, results) => {
            if (err) {
                reject(err);
                return;
            }

            if (results.length > 0) {
                resolve(results[0]);
            } else {
                resolve(null);
            }
        });
    });
};



export const getAllUserFromDB = async () => {
    const sql = `
        SELECT Nombre, Apellido, Correo FROM usuarioestudiante
    `;

    return new Promise((resolve, reject) => {
        conectar.query(sql, [], (err, results) => {
            if (err) {
                reject(err);
                return;
            }

            if (results.length > 0) {
                resolve(results);
            } else {
                resolve([]);
            }
        });
    });
};