import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class GaussJordan$Phase extends Enum<GaussJordan$Phase> {
    static ECHELON: GaussJordan$Phase;
    static REDUCED: GaussJordan$Phase;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): GaussJordan$Phase;
    static values(): GaussJordan$Phase[];
    private constructor()
    name(): "ECHELON" | "REDUCED";
}