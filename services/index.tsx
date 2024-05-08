import { request, gql } from 'graphql-request'

export const getCarsList = async () => {
    const query=gql`
    query CarLists {
        carLists {
          createdAt
          id
          imgurl
          manifacturedate
          mark
          model
          price
          desc
          detaileddesc
          publishedAt
          updatedAt
        }
      }
    `

    const result = await request('https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clvskh15j0hof07usj3botlw6/master', query)
    return result
}