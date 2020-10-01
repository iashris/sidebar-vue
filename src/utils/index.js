import randN from 'random-indian-name';

export const randomContact = (id) => {
  const name = randN({ seed: id });
  return {
    name,
    email: name.split(' ')[0].toLowerCase() + '@gmail.com',
    id,
  };
};

export const dictionarize = (arr) => {
  const toRet = {};
  arr.forEach((elem) => {
    const firstL =
      parseInt(elem.name[0]) || elem.name[0] === '0'
        ? '#'
        : elem.name[0].toUpperCase();
    if (firstL in toRet) toRet[firstL].push(elem);
    else toRet[firstL] = [elem];
  });
  const r = Object.entries(toRet).map(([character, records]) => {
    return { character, records };
  });
  return r.sort((a, b) => a.character.localeCompare(b.character));
};

export const validateEmail = (value) => {
  return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);
};
