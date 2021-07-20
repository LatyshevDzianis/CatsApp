import {contains, makeFirstLetterUpper} from '../src/helpers/helpers';

describe('Contains', () => {
  const catObject = {
    id: 1,
    name: 'Harry',
    breed: 'Some breed',
    age: '4 month',
    imageUri:
      'https://www.askideas.com/media/17/Abyssinian-Cat-With-Green-Eyes.jpg',
    description:
      'The Abyssinian /æbɪˈsɪniən/ is a breed of domestic short-haired cat with a distinctive "ticked" tabby coat, in which individual hairs are banded with different colors.',
  };

  it('returns true or false if cat object properties are containing the string', () => {
    const searchString = 'some';
    const result = contains(catObject, searchString);

    expect(result).toEqual(true);
  });

  it('returns false if substring is not present in cat object', () => {
    const searchString = 'abcddd';
    const result = contains(catObject, searchString);

    expect(result).toEqual(false);
  });
});

describe('makeFirstLetterUpper', () => {
  it('Returns new string with uppercased first letter', () => {
    const str = 'hello, my friend';

    const result = makeFirstLetterUpper(str);
    const expected = 'Hello, my friend';

    expect(result).toEqual(expected);
  });
});
