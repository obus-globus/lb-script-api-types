import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { LevelLoadTracker$ClientState } from '../../../../net/minecraft/client/multiplayer/LevelLoadTracker$ClientState.d.ts'
import type { LocalPlayer } from '../../../../net/minecraft/client/player/LocalPlayer.d.ts'
import type { LevelRenderer } from '../../../../net/minecraft/client/renderer/LevelRenderer.d.ts'
export class LevelLoadTracker$WaitingForPlayerChunk extends Record implements LevelLoadTracker$ClientState {
    // private level: ClientLevel;
    // private levelRenderer: LevelRenderer;
    // private player: LocalPlayer;
    // private timeoutAfter: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    // private isReady(): boolean;
    level(): ClientLevel;
    levelRenderer(): LevelRenderer;
    loadingPacketsReceived(): LevelLoadTracker$ClientState;
    player(): LocalPlayer;
    tick(): LevelLoadTracker$ClientState;
    tick(): LevelLoadTracker$ClientState;
    timeoutAfter(): number;
    toString(): string;
}