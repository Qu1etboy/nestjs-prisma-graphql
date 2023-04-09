
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreatePetInput {
    name: string;
}

export class UpdatePetInput {
    id: number;
    name: string;
}

export class Pet {
    id: number;
    name: string;
}

export abstract class IQuery {
    abstract pets(): Nullable<Pet>[] | Promise<Nullable<Pet>[]>;

    abstract pet(id: number): Nullable<Pet> | Promise<Nullable<Pet>>;
}

export abstract class IMutation {
    abstract createPet(createPetInput: CreatePetInput): Pet | Promise<Pet>;

    abstract updatePet(updatePetInput: UpdatePetInput): Pet | Promise<Pet>;

    abstract removePet(id: number): Nullable<Pet> | Promise<Nullable<Pet>>;
}

type Nullable<T> = T | null;
