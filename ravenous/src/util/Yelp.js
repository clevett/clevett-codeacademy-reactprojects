const apiKey = 'pA10pmWCOCuM2T2A6UtWwMU3cvyO9tJ6KwQswut0gbxq-vNEbrEgPqCAwyXOZS9NRBCJrOfzWzpCMP61qa46vj-boOd2MhMDkmsSbJ4vQkT3MmaS8liRNjKWf_yAXnYx'

 const Yelp = {
  searchYelp(term, location, sortBY) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBY}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response=> {
      return response.json()
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => {
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count,
          }
        })
      }
    })
  }
}

export default Yelp