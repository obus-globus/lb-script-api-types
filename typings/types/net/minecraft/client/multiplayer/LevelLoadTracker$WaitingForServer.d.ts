import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClientLevel } from '../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { LevelLoadTracker$ClientState } from '../../../../net/minecraft/client/multiplayer/LevelLoadTracker$ClientState.d.ts'
import type { LocalPlayer } from '../../../../net/minecraft/client/player/LocalPlayer.d.ts'
export class LevelLoadTracker$WaitingForServer extends Record implements LevelLoadTracker$ClientState {
    private constructor(player: LocalPlayer, level: ClientLevel, timeoutAfter: number)
    // private level: ClientLevel;
    // private player: LocalPlayer;
    // private timeoutAfter: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    level(): ClientLevel;
    loadingPacketsReceived(): LevelLoadTracker$ClientState;
    player(): LocalPlayer;
    tick(): LevelLoadTracker$ClientState;
    timeoutAfter(): number;
    toString(): string;
}