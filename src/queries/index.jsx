import { gql } from "@apollo/client";

const TESTE = gql`
    query {
        privateInfo(token: "059517fe-78f0-49f4-80c9-c257347284f9"){
            username,
            password,
            createdAt,
        }
    }
`;

export default TESTE;