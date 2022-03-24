import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'izt0wdhq',
  dataset: 'production',
  apiVersion: '2021-10-21',
  token:
    'skngEGlZIpCLhZedMtVc2jjaaAlPY4uaVJ2DP4oV8oKTe4VJor2iHpA8Kt6RCsAd6v6PXQtcIwUVzRw0ZuPDgkp7GR0Kqa09RuixSYY3O2CVgGrEcFy3qmhjO8Ie4PYQl59TnwicHqJkzHv97j7qomb5TGEF6J9PIlA0OoYSCecrJbEEzIKJ',
  useCdn: false,
})
