import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
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
    static forString(paramarg0: string): PersonName$FieldModifier;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): PersonName$FieldModifier;
    static values(): (Object | null)[];
    private constructor(arg2: string)
    // private name: string;
    toString(): string;
    name(): "INFORMAL" | "PREFIX" | "CORE" | "INITIAL" | "MONOGRAM" | "ALL_CAPS" | "RETAIN" | "INITIAL_CAP" | "GENITIVE" | "VOCATIVE";
}