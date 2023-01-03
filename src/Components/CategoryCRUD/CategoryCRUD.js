import React, { useEffect } from 'react'
import { useQuery, gql } from '@apollo/client'
import { LOAD_USERS } from '../../GraphQL/Queries'

function CategoryCRUD() {

    const id = 4;
    const { loading, error, data } = useQuery(LOAD_USERS);

    if (loading) return "Loading...";
    if (error) {
        console.log("error--", error);
        return <pre>{error.message}</pre>};    

    // useEffect(() => {
    //     console.log("chal ja bhai");
    //     console.log("data--", data);
    // }, [data]);
    if(data){
        console.log("data--", typeof(data));
    }

    return (
        <div>
            This is for testing graphql
        </div>
    )
}

export default CategoryCRUD;