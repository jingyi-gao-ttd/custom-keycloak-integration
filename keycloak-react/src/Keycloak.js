import Keycloak from "keycloak-js";
// import { Configuration } from "@p2-inc/js-sdk";
const keycloak = new Keycloak('/keycloak.json');
const getAccessToken = () => keycloak.token;
console.log(getAccessToken())
export default keycloak;