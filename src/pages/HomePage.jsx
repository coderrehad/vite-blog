import {useEffect, useState} from 'react';
import Layout from "../layouts/Layout.jsx";
import {NewestBlogRequest} from "../APIRequest/APIRequest.js";
import BlogList from "../components/BlogList.jsx";
import Loader from "../components/Loader.jsx";

const HomePage = () => {
    let [data, setData] = useState(null);

    useEffect(()=>{
        (async ()=>{
            let res = await NewestBlogRequest();
            setData(res)
        })()
    })
    return (
        <Layout>
            {data === null?<Loader/>:<BlogList list={data}/>}
        </Layout>
    );
};

export default HomePage;