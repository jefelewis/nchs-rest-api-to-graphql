# National Center of Health Statistic's GraphQL Server
Operation Refactor America's wrapped National Center of Health Statistic's REST API to GraphQL Server. The REST endpoints have been mapped as GraphQL types and resolvers.

If you'd like to contribute to this project, please fork this repository and submit a pull request.

## On This Page
*  [About the Data](#about-the-data)
*  [About Operation Refactor America](#about-operation-refactor-america)
*  [GraphQL Server: Apollo Server](#graphql-server-apollo-server)
*  [GraphQL Server: Start](#graphql-server-start)
*  [GraphQL Server: Query](#graphql-server-query)
*  [GraphQL Server: Testing API Endpoints](#graphql-server-testing-api-endpoints)
*  [API Data: ](#api-data)
*  [GraphQL Query Examples](#graphql-query-examples)

## About Operation Refactor America
Operation Refactor America is a not associated with any government agency, but our goal is to empower citizens with transparent data. Only a fraction of government agencies provide public APIs, which are usually poorly documented, built on archaic REST architecture, and contains scattered data. Our mission is to retrieve that valuable data and convert them into an intuitive and modern API using GraphQL Server.

## About the Data
The data comes directly from the National Center of Health Statistic's REST API. The REST endpoints have been mapped as GraphQL types and resolvers. A summary of endpoints and documentation can be found here:

**Injury Mortality**
https://dev.socrata.com/foundry/data.cdc.gov/6j4j-ispt

**Death Rates And Life Expectancy At Birth**
https://dev.socrata.com/foundry/data.cdc.gov/bgqx-uh4z

**Leading Cause Of Death:**
https://dev.socrata.com/foundry/data.cdc.gov/u4d7-xz8k

**Age-Adjusted Death Rates For Selected Major Causes Of Death**
https://dev.socrata.com/foundry/data.cdc.gov/p2s2-23ze

**Note: Maximum of 10 requests per second or "experience degraded performance and may be blocked entirely"**

## GraphQL Server: Apollo Server
This GraphQL server uses apollo-server-express and not Facebook's graphql-express.

## GraphQL Server: Start
    npm run server

## GraphQL Server: Query
    http://localhost:4000/graphiql

## GraphQL Server: Testing API Endpoints
    npm jest

## API Data: 



## GraphQL Query Examples
### Example #1: Number of all Burglary Victims (Annually)
**Query:**




### Example #2: Retrieve Agency by Originating Agency Identification (ORI)
**Query:**



**GraphQL Result:**




### Example #3: Number of all Homicide Victims in the Arizona by Age Range (Annually)
**Query:**



**GraphQL Result:**
