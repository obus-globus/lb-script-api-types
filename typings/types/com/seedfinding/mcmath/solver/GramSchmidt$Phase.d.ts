import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class GramSchmidt$Phase extends Enum<GramSchmidt$Phase> {
    static ORTHOGONAL: GramSchmidt$Phase;
    static ORTHONORMAL: GramSchmidt$Phase;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): GramSchmidt$Phase;
    static values(): GramSchmidt$Phase[];
    private constructor()
    name(): "ORTHOGONAL" | "ORTHONORMAL";
}