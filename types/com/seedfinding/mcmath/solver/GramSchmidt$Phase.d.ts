import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class GramSchmidt$Phase extends Enum<GramSchmidt$Phase> {
    static ORTHOGONAL: GramSchmidt$Phase;
    static ORTHONORMAL: GramSchmidt$Phase;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): GramSchmidt$Phase;
    static values(): (Object | null)[];
    private constructor()
    name(): "ORTHOGONAL" | "ORTHONORMAL";
}