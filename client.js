import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'lg6xmkep',
  dataset: 'production',
  useCdn: true
})