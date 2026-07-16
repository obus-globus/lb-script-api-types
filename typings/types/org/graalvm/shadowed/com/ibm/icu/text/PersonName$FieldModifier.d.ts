import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class PersonName$FieldModifier extends Enum<PersonName$FieldModifier> {
    static ALL_CAPS: PersonName$FieldModifier;
    static CORE: PersonName$FieldModifier;
    static GENITIVE: PersonName$FieldModifier;
    static INFORMAL: PersonName$FieldModifier;
    static INITIAL: PersonName$FieldModifier;
    static INITIAL_CAP: PersonName$FieldModifier;
    static MONOGRAM: PersonName$FieldModifier;
    static PREFIX: PersonName$FieldModifier;
    static RETAIN: PersonName$FieldModifier;
    static VOCATIVE: PersonName$FieldModifier;
    static forString(paramname: string): PersonName$FieldModifier;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): PersonName$FieldModifier;
    static values(): PersonName$FieldModifier[];
    private constructor(name: string)
    // private name: string;
    toString(): string;
    name(): "INFORMAL" | "PREFIX" | "CORE" | "INITIAL" | "MONOGRAM" | "ALL_CAPS" | "RETAIN" | "INITIAL_CAP" | "GENITIVE" | "VOCATIVE";
}