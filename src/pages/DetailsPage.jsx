import React, {useEffect, useState} from 'react';
import {BlogDetailsRequest} from "../APIRequest/APIRequest.js";
import {useParams} from "react-router-dom";
import Layout from "../layouts/Layout.jsx";
import Loader from "../components/Loader.jsx";
import BlogDetails from "../components/BlogDetails.jsx";

const DetailsPage = () => {
    let {ID} = useParams();
    let [data, setData] = useState(null);
    useEffect(() => {
        (async ()=>{
            let res = await BlogDetailsRequest(ID);
            setData(res)
        })()
    }, [ID]);
    return (
        <>
            <Layout>
                {data === null?<Loader/>:<BlogDetails data={data}/>}
            </Layout>
        </>
    );
};

export default DetailsPage;