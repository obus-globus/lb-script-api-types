import type { Record } from '../../../../java/lang/Record.d.ts'
import type { AtomicBoolean } from '../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { LevelLoadTracker$ClientState } from '../../../../net/minecraft/client/multiplayer/LevelLoadTracker$ClientState.d.ts'
import type { LocalPlayer } from '../../../../net/minecraft/client/player/LocalPlayer.d.ts'
export class LevelLoadTracker$WaitingForPlayerChunk extends Record implements LevelLoadTracker$ClientState {
    private constructor(player: LocalPlayer, level: ClientLevel, playerSectionReady: AtomicBoolean, timeoutAfter: number)
    // private level: ClientLevel;
    // private player: LocalPlayer;
    // private playerSectionReady: AtomicBoolean;
    // private timeoutAfter: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    // private isReady(): boolean;
    level(): ClientLevel;
    loadingPacketsReceived(): LevelLoadTracker$ClientState;
    player(): LocalPlayer;
    playerSectionReady(): AtomicBoolean;
    tick(): LevelLoadTracker$ClientState;
    timeoutAfter(): number;
    toString(): string;
}