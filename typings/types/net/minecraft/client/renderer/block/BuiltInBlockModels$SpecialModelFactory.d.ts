import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockColors } from '../../../../../net/minecraft/client/color/block/BlockColors.d.ts'
import type { BuiltInBlockModels$ModelFactory } from '../../../../../net/minecraft/client/renderer/block/BuiltInBlockModels$ModelFactory.d.ts'
import type { BlockModel$Unbaked } from '../../../../../net/minecraft/client/renderer/block/model/BlockModel$Unbaked.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export interface BuiltInBlockModels$SpecialModelFactory extends Object, BuiltInBlockModels$ModelFactory{
    create(colors: BlockColors, state: BlockState): BlockModel$Unbaked;
    createSpecial(state: BlockState): BlockModel$Unbaked;
}