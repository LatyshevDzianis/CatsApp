const makeFirstLetterUpper = str => str.charAt(0).toUpperCase() + str.slice(1);

const contains = ({name, breed, description}, text) => {
  const query = text.toLowerCase();

  if (
    name.toLowerCase().includes(query) ||
    breed.toLowerCase().includes(query) ||
    description.toLowerCase().includes(query)
  ) {
    return true;
  }
  return false;
};

export {makeFirstLetterUpper, contains};
