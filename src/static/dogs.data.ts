import {
  ANIMAL_BREED_TYPE,
  ANIMAL_SEX,
  ANIMAL_SIZE,
  ANIMAL_TYPE,
  AnimalInterface,
} from 'constants/animals';

const DOGS_DATA: AnimalInterface[] = [
  {
    id: '1',
    name: 'jax',
    breed: 'malamute',
    pureBreed: ANIMAL_BREED_TYPE.PURE,
    sex: ANIMAL_SEX.MALE,
    type: ANIMAL_TYPE.DOG,
    size: ANIMAL_SIZE.LARGE,
    age: '3',
  },
  {
    id: '2',
    name: 'shun',
    breed: 'unknown',
    pureBreed: ANIMAL_BREED_TYPE.MIX,
    sex: ANIMAL_SEX.FEMALE,
    type: ANIMAL_TYPE.DOG,
    size: ANIMAL_SIZE.MEDIUM,
    age: '3',
  },
  {
    id: '3',
    name: 'zeus',
    breed: 'labrador',
    pureBreed: ANIMAL_BREED_TYPE.PURE,
    sex: ANIMAL_SEX.MALE,
    type: ANIMAL_TYPE.DOG,
    size: ANIMAL_SIZE.LARGE,
    age: '3',
  },
];

export default DOGS_DATA;
