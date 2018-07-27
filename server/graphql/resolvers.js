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
    getLeadingCausesOfDeathByCauseName: (parent, args) => {
      return axios.get(`https://data.cdc.gov/resource/u4d7-xz8k.json?_cause_name=${args.causeName}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get Leading Causes of Death by State
    getLeadingCausesOfDeathByState: (parent, args) => {
      return axios.get(`https://data.cdc.gov/resource/u4d7-xz8k.json?state=${args.state}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get Leading Causes of Death by Deaths
    getLeadingCausesOfDeathByDeaths: (parent, args) => {
      return axios.get(`https://data.cdc.gov/resource/u4d7-xz8k.json?deaths=${args.deaths}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get Leading Causes of Death by Adjusted Death Rate
    getLeadingCausesOfDeathByAgeAdjustedDeathRate: (parent, args) => {
      return axios.get(`https://data.cdc.gov/resource/u4d7-xz8k.json?${args.ageAdjustedDeathRate}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },


    // DEATH RATES (AGE ADJUSTED) FOR SELECT MAJOR CAUSES OF DEATH
    // Get All Death Rates
    getAllDeathRates: (parent, args) => {
      return axios.get(`https://data.cdc.gov/resource/p2s2-23ze.json`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get Death Rate by Cause
    getDeathRateByCause: (parent, args) => {
      return axios.get(`https://data.cdc.gov/resource/p2s2-23ze.json?leading_causes=${args.cause}`)
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
    // Get All Excess Deaths
    getAllExcessDeaths: (parent, args) => {
      return axios.get(`https://data.cdc.gov/resource/78p9-mpg4.json`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get Excess Deaths by Year
    getExcessDeathsByYear: (parent, args) => {
      return axios.get(`https://data.cdc.gov/resource/78p9-mpg4.json?year=${args.year}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get Excess Deaths by Cause Of Death
    getExcessDeathsByCauseOfDeath: (parent, args) => {
      return axios.get(`https://data.cdc.gov/resource/78p9-mpg4.json?cause_of_death=${args.cause_of_death}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get Excess Deaths by State
    getExcessDeathsByState: (parent, args) => {
      return axios.get(`https://data.cdc.gov/resource/78p9-mpg4.json?state=${args.state}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get Excess Deaths by Age Range
    getExcessDeathsByAgeRange: (parent, args) => {
      return axios.get(`https://data.cdc.gov/resource/78p9-mpg4.json?age_range=${args.age_range}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },
    // Get Excess Deaths by Locality
    getExcessDeathsByLocality: (parent, args) => {
      return axios.get(`https://data.cdc.gov/resource/78p9-mpg4.json?locality=${args.locality}`)
      .then((response) => response.data)
      .catch((error) => console.log(error))
    },


    // CHRONIC DISEASE INDICATORS
    // https://data.cdc.gov/resource/g4ie-h725.json
    // https://data.cdc.gov/resource/g4ie-h725.json?locationdesc=California


    // TEEN BIRTH TRENDS
    // https://data.cdc.gov/resource/sgfp-ytm5.json


    // Births to Unmarried Women by Age Group
    // https://data.cdc.gov/resource/fvae-a8ai.json


    // Childhood Mortality Rates
    // https://data.cdc.gov/resource/uumi-wks2.json


  }
}


// Exports
export default RESOLVERS