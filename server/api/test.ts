export default defineEventHandler((event) => {
  const { q } = getQuery(event)

  if (q === 'bad') {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request',
    }) 
  }

  return {
    hello: 'world'
  }
})