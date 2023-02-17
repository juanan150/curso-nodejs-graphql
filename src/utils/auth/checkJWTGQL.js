const boom = require('@hapi/boom');

async function checkJWTGQL(context) {
  const { user } = await context.authenticate('jwt', { session: false });
  if (!user) {
    throw boom.unauthorized('invalid jwt');
  }
  return user;
}

module.exports = checkJWTGQL;
