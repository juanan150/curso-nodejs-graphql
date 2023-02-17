const checkJWTGQL = require('../utils/auth/checkJWTGQL');
const checkRolesGQL = require('../utils/auth/checkRolesGQL');
const CategoryService = require('./../services/category.service');

const service = new CategoryService();

const addCategory = async (_, { dto }, context) => {
  const user = await checkJWTGQL(context);
  checkRolesGQL(user, 'admin');

  return service.create({ ...dto, image: dto.image.href });
};

const getCategory = (_, { id }) => {
  return service.findOne(id);
};

module.exports = {
  addCategory,
  getCategory,
};
