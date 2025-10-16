import { useState } from 'react'; //permite manejar estados dentro del hook personalizado.

const useLogin = () => {
    //variables de estado
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');

    const errorData = (dataMessage) => {
        if (dataMessage) {
            if (dataMessage.includes('email') || dataMessage.includes('Email')) {
                setErrorEmail(dataMessage); //Actualiza el estado de errorEmail
            } else if (dataMessage.includes('password') || dataMessage.includes('contraseña')) {
                setErrorPassword(dataMessage); //Actualiza el estado de errorPassword
            }
        }
    };

    //Limpia los errores al modificar los inputs
    const handleInputChange = () => {
        setErrorEmail('');
        setErrorPassword('');
    };

    //Devuelve los estados y funciones para usarlos desde el componente
    return {
        errorEmail,
        errorPassword,
        errorData,
        handleInputChange
    };
};

export default useLogin;
