import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ClosingFuture$ReachabilityFenceCaller extends Enum<ClosingFuture$ReachabilityFenceCaller> {
    static NO_OP_CALLER: ClosingFuture$ReachabilityFenceCaller;
    static REAL_CALLER: ClosingFuture$ReachabilityFenceCaller;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ClosingFuture$ReachabilityFenceCaller;
    static values(): ClosingFuture$ReachabilityFenceCaller[];
    private constructor()
    reachabilityFence(o: Object): void;
    name(): "REAL_CALLER" | "NO_OP_CALLER";
}