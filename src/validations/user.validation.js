"use strict";
import joi from "joi";

/*
    username, email, password
*/

export const userBodyValidation = joi.object ({
    email: joi.string()
        .required()
        .email()
        .messages({
            "string.empty": "el email no puede estar vacio",
            "string.required": "El username es obligatorio",
            "string.email": "El email debe tener un formato valido"
        })
    ,
    password: joi.string()
        .required()
        .min(6)
        .max(50)
        .pattern(/^[a-zA-Z0-9]+$/)
        .messages({
            "string.empty": "La contraseña no puede estar vacia",
            "string.required": "El username es obligatorio",
            "string.base": "La contraseña debe ser de tipo texto",
            "string.min": "La contraseña debe tener al menos 6 caracteres",
            "string.max": "La contraseña debe tener como maxima 50 caracteristicas",
            "string.pattern": "La contraseña solo puede contener letras y numeros",
            "string.pattern.base": "La contraseña solo puede contener letras y numeros" 
        })
})