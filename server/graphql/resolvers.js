// Imports: Axios
import axios from 'axios';


// GraphQL: Resolvers
const RESOLVERS = {
  Query: {

    // DEATHS
    // Get Deaths by Falling
    getDeathsByFalling: (parent, args) => {
      return axios.get(`https://data.cdc.gov/resource/6j4j-ispt.json?injury_mechanism=Fall`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get Deaths by Drowning
    getDeathsByDrowning: (parent, args) => {
      return axios.get(`https://data.cdc.gov/resource/6j4j-ispt.json?injury_mechanism=Drowning`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get Deaths by Firearms
    getDeathsByFirearms: (parent, args) => {
      return axios.get(`https://data.cdc.gov/resource/6j4j-ispt.json?injury_mechanism=Firearm`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get Deaths by Suffocation
    getDeathsBySuffocation: (parent, args) => {
      return axios.get(`https://data.cdc.gov/resource/6j4j-ispt.json?injury_mechanism=Suffocation`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get Deaths by Poisoning
    getDeathsByPoisoning: (parent, args) => {
      return axios.get(`https://data.cdc.gov/resource/6j4j-ispt.json?injury_mechanism=Poisoning`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get Deaths by Motor Vehicles
    getDeathsByMotorVehicles: (parent, args) => {
      return axios.get(`https://data.cdc.gov/resource/6j4j-ispt.json?injury_mechanism=Motor vehicle traffic`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get Deaths by Cut/Pierce
    getDeathsByCutPierce: (parent, args) => {
      return axios.get(`https://data.cdc.gov/resource/6j4j-ispt.json?injury_mechanism=Cut/pierce`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },



    // LIFE EXPECTANCY AT BIRTH AND DEATH RATES
    // Get All Life Expectancy
    getAllLifeExpectancy: (parent, args) => {
      return axios.get(`https://data.cdc.gov/resource/bgqx-uh4z.json?`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get Life Expectancy by Year
    getLifeExpectancyByYear: (parent, args) => {
      return axios.get(`https://data.cdc.gov/resource/bgqx-uh4z.json?year=${args.year}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get Life Expectancy by Race
    getLifeExpectancyByRace: (parent, args) => {
      return axios.get(`https://data.cdc.gov/resource/bgqx-uh4z.json?race=${args.race}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get Life Expectancy by Sex
    getLifeExpectancyBySex: (parent, args) => {
      return axios.get(`https://data.cdc.gov/resource/bgqx-uh4z.json?sex=${args.sex}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get Life Expectancy by Average Life Expectancy
    getLifeExpectancyByAverageLifeExpectancy: (parent, args) => {
      return axios.get(`https://data.cdc.gov/resource/bgqx-uh4z.json?average_life_expectancy=${args.averageLifeExpectancy}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get Life Expectancy by Mortality
    getLifeExpectancyByMortalility: (parent, args) => {
      return axios.get(`https://data.cdc.gov/resource/bgqx-uh4z.json?mortality=${args.mortality}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },



    // LEADING CAUSES OF DEATH
    // Get All Leading Causes of Death
    getAllLeadingCausesOfDeath: (parent, args) => {
      return axios.get(`https://data.cdc.gov/resource/u4d7-xz8k.json`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get Leading Causes of Death by Year
    getLeadingCausesOfDeathByYear: (parent, args) => {
      return axios.get(`https://data.cdc.gov/resource/u4d7-xz8k.json?year=${args.year}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get Leading Causes of Death by 113 Cause Name
    getLeadingCausesOfDeathBy113CauseName: (parent, args) => {
      return axios.get(`https://data.cdc.gov/resource/u4d7-xz8k.json?_113_cause_name=${args.causeName}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get Leading Causes of Death by Cause Name
    getlLeadingCausesOfDeathByCauseName: (parent, args) => {
      return axios.get(`https://data.cdc.gov/resource/u4d7-xz8k.json?_cause_name=${args.causeName}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get Leading Causes of Death by State
    getlLeadingCausesOfDeathByState: (parent, args) => {
      return axios.get(`https://data.cdc.gov/resource/u4d7-xz8k.json?state=${args.state}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get Leading Causes of Death by Deaths
    getlLeadingCausesOfDeathByDeaths: (parent, args) => {
      return axios.get(`https://data.cdc.gov/resource/u4d7-xz8k.json?deaths=${args.deaths}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get Leading Causes of Death by Adjusted Death Rate
    getlLeadingCausesOfDeathByAgeAdjustedDeathRate: (parent, args) => {
      return axios.get(`https://data.cdc.gov/resource/u4d7-xz8k.json?${args.ageAdjustedDeathRate}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },


    // DEATH RATES (AGE ADJUSTED) FOR SELECT MAJOR CAUSES OF DEATH
    // Get Death Rate by Cause
    getlDeathRateByCause: (parent, args) => {
      return axios.get(` https://data.cdc.gov/resource/p2s2-23ze.json?leading_causes=${args.cause}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get Death Rate by Year
    getlDeathRateByYear: (parent, args) => {
      return axios.get(`https://data.cdc.gov/resource/p2s2-23ze.json?year=${args.year}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get Death Rate by Age Adjusted Death Rate
    getlDeathRateByAgeAdjustedDeathRate: (parent, args) => {
      return axios.get(`https://data.cdc.gov/resource/p2s2-23ze.json?age_adjusted_death_rate=${args.ageAdjustedDeathRate}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },



    // POTENTIALLY EXCESS DEATHS FROM FIVE LEADING CAUSES OF DEATH
    // https://data.cdc.gov/resource/78p9-mpg4.json
  }
}


// Exports
export default RESOLVERS