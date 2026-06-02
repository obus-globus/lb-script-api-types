import type { ClientLevel } from '../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { BlockStatePredictionHandler } from '../../../../../../net/minecraft/client/multiplayer/prediction/BlockStatePredictionHandler.d.ts'
import type { LocalPlayer } from '../../../../../../net/minecraft/client/player/LocalPlayer.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class PendingUpdateManager1_18_2 extends BlockStatePredictionHandler {
    constructor()
    close(): void;
    currentSequence(): number;
    endPredictionsUpTo(arg0: number, arg1: ClientLevel): void;
    isPredicting(): boolean;
    retainKnownServerState(arg0: BlockPos, arg1: BlockState, arg2: LocalPlayer): void;
    startPredicting(): BlockStatePredictionHandler;
    updateKnownServerState(arg0: BlockPos, arg1: BlockState): boolean;
}