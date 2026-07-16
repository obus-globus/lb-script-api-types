import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class KmVariance extends Enum<KmVariance> {
    static IN: KmVariance;
    static INVARIANT: KmVariance;
    static OUT: KmVariance;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): KmVariance;
    static values(): KmVariance[];
    private constructor()
    name(): "INVARIANT" | "IN" | "OUT";
}