import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class PersonName$PreferredOrder extends Enum<PersonName$PreferredOrder> {
    static DEFAULT: PersonName$PreferredOrder;
    static GIVEN_FIRST: PersonName$PreferredOrder;
    static SURNAME_FIRST: PersonName$PreferredOrder;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): PersonName$PreferredOrder;
    static values(): PersonName$PreferredOrder[];
    private constructor()
    name(): "DEFAULT" | "GIVEN_FIRST" | "SURNAME_FIRST";
}