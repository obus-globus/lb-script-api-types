import type { Object } from '../../../java/lang/Object.d.ts'
import type { DeltaTracker } from '../../../net/minecraft/client/DeltaTracker.d.ts'
export class DeltaTracker$DefaultValue extends Object implements DeltaTracker {
    static ONE: DeltaTracker;
    static ZERO: DeltaTracker;
    private constructor(value: number)
    // private value: number;
    getGameTimeDeltaPartialTick(ignored: boolean): number;
    getGameTimeDeltaTicks(): number;
    getRealtimeDeltaTicks(): number;
}