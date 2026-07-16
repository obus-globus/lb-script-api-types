import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class CheckSignatureAdapter$State extends Enum<CheckSignatureAdapter$State> {
    static BOUND: CheckSignatureAdapter$State;
    static CLASS_TYPE: CheckSignatureAdapter$State;
    static EMPTY: CheckSignatureAdapter$State;
    static END: CheckSignatureAdapter$State;
    static FORMAL: CheckSignatureAdapter$State;
    static PARAM: CheckSignatureAdapter$State;
    static RETURN: CheckSignatureAdapter$State;
    static SIMPLE_TYPE: CheckSignatureAdapter$State;
    static SUPER: CheckSignatureAdapter$State;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CheckSignatureAdapter$State;
    static values(): CheckSignatureAdapter$State[];
    private constructor()
    name(): "EMPTY" | "FORMAL" | "BOUND" | "SUPER" | "PARAM" | "RETURN" | "SIMPLE_TYPE" | "CLASS_TYPE" | "END";
}