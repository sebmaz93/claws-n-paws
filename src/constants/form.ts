import {
  ANIMAL_BREED_TYPE,
  ANIMAL_GENDER,
  ANIMAL_SIZE,
  ANIMAL_TYPE,
} from 'constants/animals';

export const GENDER = [
  {label: 'Male', value: ANIMAL_GENDER.MALE},
  {label: 'Female', value: ANIMAL_GENDER.FEMALE},
];

export const BREED_TYPE = [
  {label: 'Pure', value: ANIMAL_BREED_TYPE.PURE},
  {label: 'Mix', value: ANIMAL_BREED_TYPE.MIX},
];

export const SIZE = [
  {label: 'Small', value: ANIMAL_SIZE.SMALL},
  {label: 'Medium', value: ANIMAL_SIZE.MEDIUM},
  {label: 'Large', value: ANIMAL_SIZE.LARGE},
];

export const TYPE = [
  {label: 'Dog', value: ANIMAL_TYPE.DOG},
  {label: 'Cat', value: ANIMAL_TYPE.CAT},
  {label: 'Other', value: ANIMAL_TYPE.OTHER},
];
