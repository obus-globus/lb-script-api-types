import type { FloatUnaryOperator } from '../../../it/unimi/dsi/fastutil/floats/FloatUnaryOperator.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { DeltaTracker } from '../../../net/minecraft/client/DeltaTracker.d.ts'
export class DeltaTracker$Timer extends Object implements DeltaTracker {
    static ONE: DeltaTracker;
    static ZERO: DeltaTracker;
    constructor(ticksPerSecond: number, currentMs: number, targetMsptProvider: (param0: number) => number)
    // private deltaTickResidual: number;
    // private deltaTicks: number;
    // private frozen: boolean;
    // private lastMs: number;
    // private lastUiMs: number;
    // private msPerTick: number;
    // private paused: boolean;
    // private pausedDeltaTickResidual: number;
    readonly realtimeDeltaTicks: number;
    // private targetMsptProvider: (param0: number) => number;
    advanceGameTime(currentMs: number): number;
    advanceRealTime(currentMs: number): void;
    getGameTimeDeltaPartialTick(ignoreFrozenGame: boolean): number;
    getGameTimeDeltaTicks(): number;
    getRealtimeDeltaTicks(): number;
    // private pause(): void;
    // private unPause(): void;
    updateFrozenState(frozen: boolean): void;
    updatePauseState(pauseState: boolean): void;
}