import type { Object } from '../../../../java/lang/Object.d.ts'
import type { IrisModelPart } from '../../../../net/irisshaders/iris/compat/general/IrisModelPart.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export interface MixinBlockModelPart extends Object, IrisModelPart{
    getBlockAppearance(): BlockState;
}