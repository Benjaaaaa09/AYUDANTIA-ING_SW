import { useState } from 'react';
import { useAuth } from '@context/AuthContext';
//import { getProfile } from '@services/profile.service';
import { showErrorAlert } from '@helpers/sweetAlert';
import cookies from 'js-cookie';

const Home = () => {
  const [profileData, setProfileData] = useState(false); //profileData comienza en falso

  const { user } = useAuth(); //Extrae user de useAuth (useContext)
  
  const jwtToken = cookies.get('jwt-auth');

  const handleGetCredentials = async () => {
    try {
      setProfileData(true); //Actualiza profileData
      
    } catch (error) {
      showErrorAlert('Error', 'Error al obtener credenciales');
    } 
  };

  const handleHideCredentials = () => {
    setProfileData(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 w-full max-w-4xl transform transition-all hover:scale-105">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600"> 
          Página de Inicio
        </h1>

        {!profileData ? (
          <button 
            onClick={handleGetCredentials} 
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            Obtener Perfil
          </button>
        ) : (

          <div className="space-y-6">
            {/* Email del usuario */}
            {user && (
              <div className="p-6 bg-blue-50 rounded-xl border border-blue-200">
                <h2 className="text-2xl font-bold text-blue-800 mb-4">Email del Usuario</h2>
                <div className="p-4 bg-white rounded-lg border border-blue-300">
                  <code className="text-lg font-mono text-blue-900">
                    {user.email}
                  </code>
                </div>
              </div>
            )}

            {/* Token */}
            {jwtToken && (
              <div className="p-6 bg-purple-50 rounded-xl border border-purple-200">
                <h2 className="text-2xl font-bold text-purple-800 mb-4">Token JWT</h2>
                <div className="p-4 bg-white rounded-lg border border-purple-300">
                  <code className="text-sm text-purple-900 break-all font-mono">
                    {jwtToken}
                  </code>
                </div>
              </div>
            )}

            {/* Botón para ocultar */}
            <button 
              onClick={handleHideCredentials}
              className="w-full bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-gray-300"
            >
              Ocultar Credenciales
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;