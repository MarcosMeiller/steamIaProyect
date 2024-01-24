import { matchedData } from "express-validator";
import { createUserService, findAllUsers, findUserServiceById, updateUserService, deleteUserService, loginService } from "../services/users.js";

export const login = async(req,res) => {
    console.log(req.bod)

    const body = matchedData(req);
    try{ 

        const data = await loginService(body)

        if (!data){
            res.send({res:"email o contraseña invalidos"})
        }
        else{
            res.send({res:"logueado correctamente", token:data});
        }
     

    }
        catch(msg){
        console.log(msg);
        return res.status(400).send('Error');
    }
}

export const getUsers = async (req, res) => {

    const data = await findAllUsers(); 

    res.send({ data })

}

export const getUserById = async (req, res) => {
    const { id } = req.params;
    try{ 
        const data = await findUserServiceById(id);
        if (!data){
            return res.status(404).send('User not found');
        }
        res.send({ data })
    }
    catch(msg){
        return res.status(400).send('Invalid id');
    
    }

}

export const createUser = async (req, res) => {  

    const body = matchedData(req);
    try{ 
        const data = await createUserService(body);
        res.send({data});

    }
        catch(msg){
        console.log(msg);
        return res.status(400).send('Error');
    }
}

export const updateUser = async (req, res) => {
    const { id } = req.params;

    const body = matchedData(req);
    
    try{ 
        const data = await updateUserService(id,body);
        if (!data){
            return res.status(404).send('User not found');
        }
        res.send("Actualizado Correctamente");

    }
    catch(msg){
        return res.status(400).send('Invalid id');
    }
   
}


export const deleteUser = async (req, res) => {
    const { id } = req.params;

    try{
        await deleteUserService(id);
        res.send(" Ha sido Eliminado Correctamente");

    }
    catch(msg){
        console.log(msg);
        return res.status(400).send('Invalid id');
    
    }
}