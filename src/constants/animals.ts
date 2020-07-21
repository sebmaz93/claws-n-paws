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

export enum ANIMAL_GENDER {
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
    breed: string | 'mix';
    pureBreed?: ANIMAL_BREED_TYPE;
    gender: ANIMAL_GENDER;
    size: ANIMAL_SIZE;
    type: ANIMAL_TYPE;
    description?: string;
    age:string;
    ageISO:number;
    contacts:string[];
    team?: string;
    images:string[];
}