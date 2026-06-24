import type { ClosingFuture$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ClosingFuture$ReachabilityFenceCaller extends Enum<ClosingFuture$ReachabilityFenceCaller> {
    static NO_OP_CALLER: ClosingFuture$ReachabilityFenceCaller;
    static REAL_CALLER: ClosingFuture$ReachabilityFenceCaller;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ClosingFuture$ReachabilityFenceCaller;
    static values(): (Object | null)[];
    private constructor()
    constructor(arg2: ClosingFuture$1)
    reachabilityFence(o: Object): void;
    name(): "REAL_CALLER" | "NO_OP_CALLER";
}