import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class KVariance extends Enum<KVariance> implements Serializable {
    static IN: KVariance;
    static INVARIANT: KVariance;
    static OUT: KVariance;
    static getEntries(): KVariance[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): KVariance;
    static values(): KVariance[];
    private constructor()
    name(): "INVARIANT" | "IN" | "OUT";
}