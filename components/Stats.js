import { Gitlab } from "@gitbeaker/node";
import React from "react";

export default function Stats({ data }){
    
    return (
    
      <>
        <div className='contentcontainer'>
        <h1> hello </h1>
    </div>
      </>




    );
}

export async function getServerSideprops() {
    const api = new Gitlab(
        {
            host: 'https://gitlab.com',
            token: 'glpat-8XLYfJftQyx1UgkPGtjx',
        }
    );
    let users = await api.Projects.show(39937771);
    return {
        props: {
            data: users
        }
    }

}