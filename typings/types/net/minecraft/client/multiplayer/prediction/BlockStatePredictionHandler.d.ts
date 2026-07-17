import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClientLevel } from '../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { LocalPlayer } from '../../../../../net/minecraft/client/player/LocalPlayer.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class BlockStatePredictionHandler extends Object implements AutoCloseable {
    constructor()
    // private currentSequenceNr: number;
    // private isPredicting: boolean;
    // private lastTeleportSequence: number;
    // private serverVerifiedStates: JavaMap<any, any>;
    close(): void;
    currentSequence(): number;
    endPredictionsUpTo(sequence: number, clientLevel: ClientLevel): void;
    isPredicting(): boolean;
    onTeleport(): void;
    retainKnownServerState(pos: BlockPos, state: BlockState, player: LocalPlayer): void;
    startPredicting(): BlockStatePredictionHandler;
    updateKnownServerState(pos: BlockPos, blockState: BlockState): boolean;
}