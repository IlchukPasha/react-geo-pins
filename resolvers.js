module.exports = {
  Query: {
    me: () => {
      return {
        _id: 'ID',
        name: 'Name',
        email: 'Email',
        picture: 'URL'
      };
    }
  }
};