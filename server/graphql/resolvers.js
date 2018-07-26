// Imports: Axios
import axios from 'axios';


// GraphQL: Resolvers
const RESOLVERS = {
  Query: {

    // DEATHS
    // Deaths by Falling
    getDeathsByFalling: (parent, args) => {
      return axios.get(`https://data.cdc.gov/resource/6j4j-ispt.json?injury_mechanism=Fall`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Deaths by Drowning
    getDeathsByDrowning: (parent, args) => {
      return axios.get(`https://data.cdc.gov/resource/6j4j-ispt.json?injury_mechanism=Drowning`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Deaths by Firearms
    getDeathsByFirearms: (parent, args) => {
      return axios.get(`https://data.cdc.gov/resource/6j4j-ispt.json?injury_mechanism=Firearm`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Deaths by Suffocation
    getDeathsBySuffocation: (parent, args) => {
      return axios.get(`https://data.cdc.gov/resource/6j4j-ispt.json?injury_mechanism=Suffocation`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Deaths by Poisoning
    getDeathsByPoisoning: (parent, args) => {
      return axios.get(`https://data.cdc.gov/resource/6j4j-ispt.json?injury_mechanism=Poisoning`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Deaths by Motor Vehicles
    getDeathsByMotorVehicles: (parent, args) => {
      return axios.get(`https://data.cdc.gov/resource/6j4j-ispt.json?injury_mechanism=Motor vehicle traffic`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Deaths by Cut/Pierce
    getDeathsByCutPierce: (parent, args) => {
      return axios.get(`https://data.cdc.gov/resource/6j4j-ispt.json?injury_mechanism=Cut/pierce`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
  }
}


// Exports
export default RESOLVERS