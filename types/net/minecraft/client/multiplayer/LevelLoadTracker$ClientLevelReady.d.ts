import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { LevelLoadTracker$ClientState } from '../../../../net/minecraft/client/multiplayer/LevelLoadTracker$ClientState.d.ts'
export class LevelLoadTracker$ClientLevelReady extends Record implements LevelLoadTracker$ClientState {
    // private readyAt: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    loadingPacketsReceived(): LevelLoadTracker$ClientState;
    readyAt(): number;
    tick(): LevelLoadTracker$ClientState;
    toString(): string;
}