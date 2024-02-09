export const environment = {
  production: false,
  endpoints: {
    command: {
      createItem: 'http://0.0.0.0:4010/api/command/create-item',
      deleteItem: 'http://0.0.0.0:4010/api/command/delete-item',
      setIsComplete: 'http://0.0.0.0:4010/api/command/set-is-completed',
    },
    query: {
      getItems: 'http://0.0.0.0:4010/api/query/get-items'
    },
  },
};
