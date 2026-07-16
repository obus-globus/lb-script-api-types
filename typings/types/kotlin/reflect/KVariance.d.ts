import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class KVariance extends Enum<KVariance> implements Serializable {
    static IN: KVariance;
    static INVARIANT: KVariance;
    static OUT: KVariance;
    static getEntries(): KVariance[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): KVariance;
    static values(): KVariance[];
    private constructor()
    name(): "INVARIANT" | "IN" | "OUT";
}