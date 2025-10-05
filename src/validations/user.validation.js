"use strict";
import joi from "joi";

/*
    email, password
*/

export const userBodyValidation = joi.object ({
     
    username: joi.string()
        .empty()
        .optional()   
        .trim() //Elimina automaticamente los espacios al inicio y final del nombre
        .min(3)
        .max(50)
        .messages({
            "string.empty": "El nombre no puede ser vacio",
            "string.min": "El nombre debe tener al menos 3 caracteres",
            "string.max": "El nombre debe tener como maximo 50 caracteres",
            "string.base": "El nombre debe ser de tipo texto",
        })
    , 
    email: joi.string()
        .optional()
        .email()
        .messages({
            "string.empty": "el email no puede estar vacio",
            "string.email": "El email debe tener un formato valido"
        })
    ,
    password: joi.string()
        .optional()
        .min(6)
        .max(50)
        .pattern(/^[a-zA-Z0-9]+$/)
        .messages({
            "string.empty": "La contraseña no puede estar vacia",
            "string.base": "La contraseña debe ser de tipo texto",
            "string.min": "La contraseña debe tener al menos 6 caracteres",
            "string.max": "La contraseña debe tener como maxima 50 caracteristicas",
            "string.pattern": "La contraseña solo puede contener letras y numeros",
            "string.pattern.base": "La contraseña solo puede contener letras y numeros" 
        })
})