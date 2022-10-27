import axios from "axios";
import {API_BASE_URL, API_TOKEN} from "../constants/ApiConstant";



export async function getAddress(query : string) {
    try {
        const response = await axios({
            method: 'post',
            url: API_BASE_URL,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Token " + API_TOKEN,
            },
            data : {
                query: query,
                count : 20
            }
        })
        return await response.data.suggestions
    } catch (error) {
        console.error(error);
    }

}
