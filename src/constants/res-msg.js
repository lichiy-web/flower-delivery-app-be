export const RES_MSG = {
  200: { default: 'OK' },
  201: { default: 'Successfully created!' },
  204: { default: '' },
  400: {
    default: 'Bad request',
    invalidId: (idParamName, id) => `The following id {${idParamName}: ${id}} is not valid`,
  },
  401: { default: 'Unauthorized' },
  404: { default: 'Rout not found!' },
  500: { default: 'Internal Server Error' },
};
