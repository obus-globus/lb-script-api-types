import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockStateModelPart } from '../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModelPart.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class IrisModSupport extends Object {
    static INSTANCE: IrisModSupport;
    constructor()
    getModelPartState(arg0: BlockStateModelPart): BlockState;
}