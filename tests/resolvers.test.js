// Imports: Supertest
import REQUEST from 'supertest';

// Imports: Resolvers
import RESOLVERS from '../server/graphql/resolvers';


// BLOG ENTRIES
describe('Department of Justice (DOJ) Blog Entries', () => {

  // Last 10 Blog Entries
  it('Submits an HTTP Request to the API and returns the Last Ten Blog Entries', () => {
    REQUEST('http://www.justice.gov/api/v1/blog_entries.json?&pagesize=10').get('/')
      // Set Headers
      .set('Accept', 'application/json')
      // Check Status Code
      .expect(200)
      // Check Response Body
      .end(((err, res) => {
        expect(res.body).to.have.property('metadata')
        expect(res.body).to.have.property('fuck')
        done()
      }))
  })
  // Blog Entry by ID
  it('Submits an HTTP Request to the API and returns a Blog Entry by ID', () => {
    REQUEST('').get('/')
      .expect(200)
  })
})



// PRESS RELEASES
describe('Department of Justice (DOJ) Press Releases', () => {
  // Last 10 Press Releases
  it('Submits an HTTP Request to the API and returns the Last Ten Press Releases', () => {
    REQUEST('http://www.justice.gov/api/v1/press_releases.json?&pagesize=10').get('/')
      .expect(200)
  })
  // Press Release by ID
  it('Submits an HTTP Request to the API and returns a Press Release by ID', () => {
    REQUEST('').get('/')
      .expect(200)
  })
})



// SPEECHES
describe('Department of Justice (DOJ) Speeches', () => {
  // Last 10 Speeches
  it('Submits an HTTP Request to the API and returns the Last Ten Speeches', () => {
    REQUEST('http://www.justice.gov/api/v1/speeches.json?&pagesize=10').get('/')
      .expect(200)
  })
  // Speech by ID
  it('Submits an HTTP Request to the API and returns a Speech by ID', () => {
    REQUEST('').get('/')
      .expect(200)
  })
})



// VACANCY ANNOUNCEMENTS
describe('Department of Justice (DOJ) Vacancy Announcments', () => {
  // Last 10 Vacancy Announcments
  it('Submits an HTTP Request to the API and returns the Last Ten Vacancy Announcments', () => {
    REQUEST('http://www.justice.gov/api/v1/vacancy_announcements.json?&pagesize=10').get('/')
      .expect(200)
  })
  // Vacancy Announcement by ID
  it('Submits an HTTP Request to the API and returns a Vacancy Announcement by ID', () => {
    REQUEST('').get('/')
      .expect(200)
  })
})