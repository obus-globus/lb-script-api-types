import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class PersonName$PreferredOrder extends Enum<PersonName$PreferredOrder> {
    static DEFAULT: PersonName$PreferredOrder;
    static GIVEN_FIRST: PersonName$PreferredOrder;
    static SURNAME_FIRST: PersonName$PreferredOrder;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): PersonName$PreferredOrder;
    static values(): (Object | null)[];
    private constructor()
    name(): "DEFAULT" | "GIVEN_FIRST" | "SURNAME_FIRST";
}