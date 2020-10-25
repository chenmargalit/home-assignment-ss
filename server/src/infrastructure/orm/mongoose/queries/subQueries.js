const find = (model) => {
  return model.find();
};

const create = async (model, values) => {
  try {
    const doc = new model({ ...values });
    await doc.save();
    return 'post created successfully';
  } catch (e) {
    console.log('error while creating new post', e);
  }
};

module.exports = { find, create };
