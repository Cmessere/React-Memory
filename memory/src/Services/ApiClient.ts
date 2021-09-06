import axios from "axios"
import { ContributorsReponse } from "./Types"

const url = "https://api.github.com/repos/facebook/react/contributors"


export const getContributors =() =>{
    return axios.get<ContributorsReponse>(url)
}
