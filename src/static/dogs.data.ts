import {
  ANIMAL_BREED_TYPE,
  ANIMAL_GENDER,
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
    gender: ANIMAL_GENDER.MALE,
    type: ANIMAL_TYPE.DOG,
    size: ANIMAL_SIZE.SMALL,
    age: '3',
    contacts: ['093029389', '093029326'],
    images: [
      'https://cdn.pixabay.com/photo/2019/03/26/00/53/husky-4081689_960_720.jpg',
    ],
  },
  {
    id: '2',
    name: 'shun',
    breed: 'unknown',
    pureBreed: ANIMAL_BREED_TYPE.MIX,
    gender: ANIMAL_GENDER.FEMALE,
    type: ANIMAL_TYPE.DOG,
    size: ANIMAL_SIZE.MEDIUM,
    age: '3',
    contacts: ['093029389', '093029326'],
    images: [
      'https://cdn.pixabay.com/photo/2016/03/27/21/16/animal-1284307_960_720.jpg',
    ],
  },
  {
    id: '3',
    name: 'zeus',
    breed: 'labrador',
    pureBreed: ANIMAL_BREED_TYPE.PURE,
    gender: ANIMAL_GENDER.MALE,
    type: ANIMAL_TYPE.DOG,
    size: ANIMAL_SIZE.LARGE,
    age: '3',
    contacts: ['093029389', '093029326'],
    images: [
      'https://cdn.pixabay.com/photo/2019/07/30/05/53/dog-4372036__340.jpg',
    ],
  },
  {
    id: '4',
    name: 'zeus',
    breed: 'labrador',
    pureBreed: ANIMAL_BREED_TYPE.PURE,
    gender: ANIMAL_GENDER.FEMALE,
    type: ANIMAL_TYPE.DOG,
    size: ANIMAL_SIZE.LARGE,
    age: '3',
    contacts: ['093029389', '093029326'],
    images: [
      'https://cdn.pixabay.com/photo/2016/05/09/10/42/weimaraner-1381186_960_720.jpg',
    ],
  },
  {
    id: '5',
    name: 'zeus',
    breed: 'labrador',
    pureBreed: ANIMAL_BREED_TYPE.MIX,
    gender: ANIMAL_GENDER.MALE,
    type: ANIMAL_TYPE.DOG,
    size: ANIMAL_SIZE.LARGE,
    age: '3',
    contacts: ['093029389', '093029326'],
    images: [
      'https://cdn.pixabay.com/photo/2020/07/14/12/00/dog-5403928_960_720.jpg',
    ],
  },
  {
    id: '6',
    name: 'zeus',
    breed: 'labrador',
    pureBreed: ANIMAL_BREED_TYPE.PURE,
    gender: ANIMAL_GENDER.MALE,
    type: ANIMAL_TYPE.DOG,
    size: ANIMAL_SIZE.LARGE,
    age: '3',
    contacts: ['093029389', '093029326'],
    images: [
      'https://cdn.pixabay.com/photo/2018/10/09/21/29/dalmatian-3735977_960_720.jpg',
    ],
  },
];

export default DOGS_DATA;
