import type { Object } from '../../../java/lang/Object.d.ts'
export interface DeltaTracker extends Object{
    getGameTimeDeltaPartialTick(ignoreFrozenGame: boolean): number;
    getGameTimeDeltaTicks(): number;
    getRealtimeDeltaTicks(): number;
}