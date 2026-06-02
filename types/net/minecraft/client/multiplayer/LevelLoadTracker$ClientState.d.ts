import type { Object } from '../../../../java/lang/Object.d.ts'
export interface LevelLoadTracker$ClientState extends Object{
    loadingPacketsReceived(): LevelLoadTracker$ClientState;
    tick(): LevelLoadTracker$ClientState;
}