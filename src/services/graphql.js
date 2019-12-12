import graphqlHTTP from "express-graphql"
export default (schema="",graphiql=true)=>({
    endPointGraphQl:()=>{
        return graphqlHTTP({
            schema,
            graphiql:graphiql
        })
    }
})