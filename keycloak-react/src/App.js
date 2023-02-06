import React from "react";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./Keycloak";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import WelcomePage from "./pages/Homepage";
import SecuredPage from "./pages/Securedpage";
import PrivateRoutes from "./helpers/PrivateRoutes";

function App() {
 return (
   <div>
     <ReactKeycloakProvider authClient={keycloak} initOptions={{
          checkLoginIframe: false,
            }}>
       <Nav />
       <React.StrictMode>
       <BrowserRouter>
         <Routes>
           <Route exact path="/" element={<WelcomePage />} />
           <Route
             path="/secured"
             element={
               <PrivateRoutes>
                 <SecuredPage />
               </PrivateRoutes>
             }
           />
         </Routes>
       </BrowserRouter>
       </React.StrictMode>
     </ReactKeycloakProvider>
   </div>
 );
}

export default App;