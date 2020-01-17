export const selectLibraryAction = libId => {
  return {
    type: 'SELECT_LIBRARY',
    payload: libId,
  };
};
