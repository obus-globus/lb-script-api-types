import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class GaussJordan$Phase extends Enum<GaussJordan$Phase> {
    static ECHELON: GaussJordan$Phase;
    static REDUCED: GaussJordan$Phase;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): GaussJordan$Phase;
    static values(): GaussJordan$Phase[];
    private constructor()
    name(): "ECHELON" | "REDUCED";
}