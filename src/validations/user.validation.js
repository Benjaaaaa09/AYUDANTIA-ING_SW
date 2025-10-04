"use strict";
import Joi from "joi";
import joi from "joi";

/*
    email, password
*/

export const userQueryValidation = joi.object ({
    /*     
    name: joi.string()
        .empty()
        .required()


    , */
    email: joi.string()
        .email()
        .required()
        .message({
            "string.empty": "el email no puede estar vacio",
            "any.required": "El email es obligatorio",
            "string.email": "El email debe tener un dormato valido"
        })
    ,
    password: joi.string()
        .min(6)
        .max(50)
        .pattern(/^[a-zA-Z0-9]+$/)
        .required()
        .messages({
            "string.empty": "La contraseña no puede estar vacia",
            "any.require": "La contraseña es obligatoria",
            "string.base": "La contraseña debe ser de tipo texto",
            "string.min": "La contraseña debe tener al menos 6 caracteres",
            "string.max": "La contraseña debe tener como maxima 50 caracteristicas",
            "string.pattern.base": "La contraseña solo puede conectar letras y numeros" 
        })
})