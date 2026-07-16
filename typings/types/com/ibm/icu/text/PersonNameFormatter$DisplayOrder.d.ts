import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class PersonNameFormatter$DisplayOrder extends Enum<PersonNameFormatter$DisplayOrder> {
    static DEFAULT: PersonNameFormatter$DisplayOrder;
    static FORCE_GIVEN_FIRST: PersonNameFormatter$DisplayOrder;
    static FORCE_SURNAME_FIRST: PersonNameFormatter$DisplayOrder;
    static SORTING: PersonNameFormatter$DisplayOrder;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): PersonNameFormatter$DisplayOrder;
    static values(): PersonNameFormatter$DisplayOrder[];
    private constructor()
    name(): "DEFAULT" | "SORTING" | "FORCE_GIVEN_FIRST" | "FORCE_SURNAME_FIRST";
}