import React, {useEffect, useState} from 'react';
import {BlogByCategoryRequest} from "../APIRequest/APIRequest.js";
import Loader from "../components/Loader.jsx";
import BlogList from "../components/BlogList.jsx";
import {useParams} from "react-router-dom";
import Layout from "../layouts/Layout.jsx";

const CategoryPage = () => {
    let {ID} = useParams();
    let [data, setData] = useState(null);
    useEffect(() => {
        (async ()=>{
            let res = await BlogByCategoryRequest(ID);
            setData(res)
        })()
    }, [ID]);
    return (
        <>
            <Layout>
                {data === null?<Loader/>:<BlogList list={data}/>}
            </Layout>
        </>
    );
};

export default CategoryPage;