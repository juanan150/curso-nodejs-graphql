const boom = require('@hapi/boom');

function checkRolesGQL(user, ...roles) {
  if (!roles.includes(user.role)) {
    throw boom.unauthorized('invalid role');
  }
}

module.exports = checkRolesGQL;
