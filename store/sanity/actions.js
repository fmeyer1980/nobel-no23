import { groq } from '@nuxtjs/sanity'

export function fetchSiteSettings(context) {
    return new Promise((resolve,reject) => {
      const query = groq`*[_type == "siteSettings"]{
            name,
            address,
            zip,
            country,
            mail,
            phone,
            "mainMenu": *[_type == "pages"] {
                ...
            },
            socialmedia,
            openingHours,
            cta{
                headline,
                text
            }
          }`
          this.$sanity.fetch(query)
          .then(response => {
              context.commit('setSiteSettings',response[0])
              resolve(response);
          })
          .catch(error => {
              reject(error);
          })
    })
}