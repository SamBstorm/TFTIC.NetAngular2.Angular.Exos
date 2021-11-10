export interface IPerson {
    firstname : string;
    lastname : string;
    gender : Gender;
    birthdate? : Date;
    father? : IPerson;
    mother? : IPerson;
    siblings? : IPerson[];
}

export enum Gender{ Male, Female, Other}
