export enum ANIMAL_SIZE {
    LARGE = 'large',
    MEDIUM = 'medium',
    SMALL = 'small'
}

export enum ANIMAL_TYPE {
    DOG = 'dog',
    CAT = 'cat',
    OTHER = 'other'
}

export enum ANIMAL_SEX {
    MALE = 'male',
    FEMALE = 'female'
}

export enum ANIMAL_BREED_TYPE {
    PURE = 'pure',
    MIX = 'mix'
}

export interface AnimalInterface {
    id: string;
    name: string;
    breed: string;
    pureBreed: ANIMAL_BREED_TYPE;
    sex: ANIMAL_SEX;
    size: ANIMAL_SIZE;
    type: ANIMAL_TYPE;
    description?: string;
    age:string;
}