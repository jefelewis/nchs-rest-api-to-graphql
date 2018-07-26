// GraphQL: TypeDefs
const TYPEDEFS = `

  type Query {
    getDeathsByFalling: [Death]
    getDeathsByDrowning: [Death]
    getDeathsByFirearms: [Death]
    getDeathsBySuffocation: [Death]
    getDeathsByPoisoning: [Death]
    getDeathsByMotorVehicles: [Death]
    getDeathsByCutPierce: [Death]

    getAllLifeExpectancy: [LifeExpectancy]
    getLifeExpectancyByYear: [LifeExpectancy]
    getLifeExpectancyByRace: [LifeExpectancy]
    getLifeExpectancyBySex: [LifeExpectancy]
    getLifeExpectancyByAverageLifeExpectancy: [LifeExpectancy]
    getLifeExpectancyByMortalility: [LifeExpectancy]

    getAllLeadingCauseOfDeath: [LeadingCauseOfDeath]
    getLeadingCausesOfDeathByYear: [LeadingCauseOfDeath]
    getLeadingCausesOfDeathBy113CauseName: [LeadingCauseOfDeath]
    getlLeadingCausesOfDeathByCauseName: [LeadingCauseOfDeath]
    getlLeadingCausesOfDeathByState: [LeadingCauseOfDeath]
    getlLeadingCausesOfDeathByDeaths: [LeadingCauseOfDeath]
    getlLeadingCausesOfDeathByAgeAdjustedDeathRate: [LeadingCauseOfDeath]

  }

  type Death {
    age_adjusted_rate: String
    age_adjusted_rate_lower_confidence_limit: String
    age_adjusted_rate_standard_error: String
    age_adjusted_rate_upper_confidence_limit: String
    age_specific_rate: String
    age_specific_rate_lower_confidence_limit: String
    age_specific_rate_standard_error: String
    age_specific_rate_upper_confidence_limit: String
    age_years: String
    deaths: String
    injury_intent: String
    injury_mechanism: String
    population: String
    race: String
    sex: String
    unit: String
    year: String
  }

  type LifeExpectancy {
    mortality: String
    race: String
    sex: String
    year: String
  }

  LeadingCauseOfDeath {
    _113_cause_name: String
    aadr: String
    cause_name: String
    deaths: String
    state: String
    year: String
  }
`;


// Exports
export default TYPEDEFS;