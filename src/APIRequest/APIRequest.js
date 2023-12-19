import axios from "axios";

let BaseURL = "http://localhost:4000/api/v1";


export async function byCategoryRequest() {
    let result = await axios.get(BaseURL+"/byCategory");
    if(result.status === 200){
        return result.data['data']
    }else{
        return []
    }
}


export async function NewestBlogRequest() {
    let result = await axios.get(BaseURL+"/NewestBlog");
    if(result.status === 200){
        return result.data['data']
    }else{
        return []
    }
}


export async function BlogByCategoryRequest(ID) {
    let result = await axios.get(BaseURL+"/blogByCategory/"+ID);
    if(result.status === 200){
        return result.data['data']
    }else{
        return []
    }
}

export async function BlogDetailsRequest(ID) {
    let result = await axios.get(BaseURL+"/BlogDetails/"+ID);
    if(result.status === 200){
        return result.data['data']['0']
    }else{
        return []
    }
}