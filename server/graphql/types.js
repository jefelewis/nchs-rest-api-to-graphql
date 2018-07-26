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
`;


// Exports
export default TYPEDEFS;