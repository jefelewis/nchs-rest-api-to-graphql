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
    getLifeExpectancyByYear(year: String): [LifeExpectancy]
    getLifeExpectancyByRace(race: String): [LifeExpectancy]
    getLifeExpectancyBySex(sex: String): [LifeExpectancy]
    getLifeExpectancyByAverageLifeExpectancy(averageLifeExpectancy: String): [LifeExpectancy]
    getLifeExpectancyByMortalility(mortality: String): [LifeExpectancy]

    getAllLeadingCausesOfDeath: [LeadingCauseOfDeath]
    getLeadingCausesOfDeathByYear(year: String): [LeadingCauseOfDeath]
    getLeadingCausesOfDeathBy113CauseName(causeOfDeath: String): [LeadingCauseOfDeath]
    getLeadingCausesOfDeathByCauseName(causeOfDeath: String): [LeadingCauseOfDeath]
    getLeadingCausesOfDeathByState(state: String): [LeadingCauseOfDeath]
    getLeadingCausesOfDeathByDeaths(deaths: String): [LeadingCauseOfDeath]
    getLeadingCausesOfDeathByAgeAdjustedDeathRate(String: ageAdjustedDeathRate): [LeadingCauseOfDeath]

    getAllDeathRates: [DeathRate]
    getDeathRateByCause(causeOfDeath: String): [DeathRate]
    getlDeathRateByYear(year: String): [DeathRate]
    getlDeathRateByAgeAdjustedDeathRate(ageAdjustedDeathRate: String): [DeathRate]

    getAllExcessDeaths: [ExcessDeath]
    getExcessDeathsByYear(year: String): [ExcessDeath]
    getExcessDeathsByCauseOfDeath(causeOfDeath: String): [ExcessDeath]
    getExcessDeathsByState(state: String): [ExcessDeath]
    getExcessDeathsByAgeRange(ageRange: String): [ExcessDeath]
    getExcessDeathsByLocality(locality: String): [ExcessDeath]

    getAllAlcoholBingeDrinking: [AlcoholBingeDrinking]
    getAlcoholBingeDrinkingByGender: [AlcoholBingeDrinking]
    getAlcoholBingeDrinkingByRaceEthnicty: [AlcoholBingeDrinking]
    getAlcoholBingeDrinkingByState(stateAbbreviation: String): [AlcoholBingeDrinking]

    getAllTeenBirths: [TeenBirth]
    getTeenBirthsByState(state: String): [TeenBirth]
    getTeenBirthsByYearRange(yearStart: String yearEnd: String): [TeenBirth]

    getAllUnmarriedBirths: [UnmarriedBirth]

    getAllChildhoodMortalityRates: [ChildhoodMortalityRate]
    getChildhoodMortalityRatesByYear(year: String): [ChildhoodMortalityRate]
    getChildhoodMortalityRatesByMortalityRate(mortalityRate: String): [ChildhoodMortalityRate]

    getAllMonthlyDrugOverdoses: [DrugOverdose]
    getMonthlyDrugOverdosesByState(state: String): [DrugOverdose]
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

  type DeathRate {
    age_adjusted_death_rate: String
    leading_causes: String
    year: String
  }

  type ExcessDeath {
    age_range: String
    benchmark: String
    cause_of_death: String
    expected_deaths: String
    hhs_region: String
    locality: String
    observed_deaths: String
    percent_potentially_excess_deaths: String
    population: String
    potentially_excess_deaths: String
    state: String
    state_fips_code: String
    year: String
  }

  type AlcoholBingeDrinking {
    lowconfidencelimit: String
    stratificationid1: String
    datavaluetypeid: String
    datavaluefootnote: String
    stratificationcategoryid1: String
    yearend: String
    highconfidencelimit: String
    locationdesc: String
    stratification1: String
    topicid: String
    datavalueunit: String
    datavalue: String
    datavaluefootnotesymbol: String
    datavaluetype: String
    questionid: String
    question: String
    locationabbr: String
    stratificationcategory1: String
    datasource: String
    datavaluealt: String
    locationid: String
    topic: String
    yearstart: String
  }

  type TeenBirth {
    age_years: String
    state: String
    state_births: String
    state_rate: String
    u_s_birth_rate: String
    u_s_births: String
    unit: String
    year: String
  }

  type UnmarriedBirth {
    age_group: String
    birth_number: String
    year: String
  }

  type ChildhoodMortalityRate {
    age_at_death: String
    mortality_rate: String
    year: String
  }

  type DrugOverdose {
    indicator: String
    month: String
    state_name: String
    year: String
    percent_pending_investigation: String
    data_value: String
    predicted_value: String
    state: String
    percent_complete: String
  }
`;


// Exports
export default TYPEDEFS;