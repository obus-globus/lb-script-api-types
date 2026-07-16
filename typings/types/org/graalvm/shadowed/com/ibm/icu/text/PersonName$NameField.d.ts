import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class PersonName$NameField extends Enum<PersonName$NameField> {
    static CREDENTIALS: PersonName$NameField;
    static GENERATION: PersonName$NameField;
    static GIVEN: PersonName$NameField;
    static GIVEN2: PersonName$NameField;
    static SURNAME: PersonName$NameField;
    static SURNAME2: PersonName$NameField;
    static TITLE: PersonName$NameField;
    static forString(paramname: string): PersonName$NameField;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): PersonName$NameField;
    static values(): PersonName$NameField[];
    private constructor(name: string)
    // private name: string;
    toString(): string;
    name(): "TITLE" | "GIVEN" | "GIVEN2" | "SURNAME" | "SURNAME2" | "GENERATION" | "CREDENTIALS";
}