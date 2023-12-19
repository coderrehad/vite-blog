import {useEffect, useState} from 'react';
import {byCategoryRequest} from "../APIRequest/APIRequest.js";

const Layout = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        (async ()=>{
            if (!localStorage.getItem('category')){
                let res = await byCategoryRequest();
                setData(res)
                localStorage.setItem('category', JSON.stringify(res))
            }else{
                let res = localStorage.getItem('category')
                setData(JSON.parse(res))
            }


        })()
    }, []);
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 6h16M4 12h8m-8 6h16"/>
                            </svg>
                        </div>
                        <ul tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a href='/'>হোম</a></li>
                            {data.map((item,index)=>{
                                return (
                                    <li key={index.toString()}><a
                                        href={"/category/"+item['categoryID']}>{item['name']}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Vite-Blog</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href='/'>হোম</a></li>
                        {data.map((item,index)=>{
                            return (
                                <li key={index.toString()}>
                                    <a href={"/category/"+item['categoryID']}>{item['name']}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            {/* eslint-disable-next-line react/prop-types */}
            {props.children}
        </>
    );
};

export default Layout;