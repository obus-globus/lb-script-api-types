import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockStatePredictionHandler } from '../../../../../../../net/minecraft/client/multiplayer/prediction/BlockStatePredictionHandler.d.ts'
export interface MixinClientLevelAccessor extends Object{
    getBlockStatePredictionHandler(): BlockStatePredictionHandler;
}