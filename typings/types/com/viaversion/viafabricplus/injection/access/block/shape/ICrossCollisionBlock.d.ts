import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export interface ICrossCollisionBlock extends Object{
    viaFabricPlus$getShapeIndex(arg0: BlockState): number;
}