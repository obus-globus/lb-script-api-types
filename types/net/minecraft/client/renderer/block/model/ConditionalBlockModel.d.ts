import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockModelRenderState } from '../../../../../../net/minecraft/client/renderer/block/BlockModelRenderState.d.ts'
import type { BlockDisplayContext } from '../../../../../../net/minecraft/client/renderer/block/model/BlockDisplayContext.d.ts'
import type { BlockModel } from '../../../../../../net/minecraft/client/renderer/block/model/BlockModel.d.ts'
import type { ConditionalBlockModelProperty } from '../../../../../../net/minecraft/client/renderer/block/model/properties/conditional/ConditionalBlockModelProperty.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class ConditionalBlockModel extends Object implements BlockModel {
    constructor(property: ConditionalBlockModelProperty, onTrue: BlockModel, onFalse: BlockModel)
    // private onFalse: BlockModel;
    // private onTrue: BlockModel;
    // private property: ConditionalBlockModelProperty;
    update(output: BlockModelRenderState, blockState: BlockState, displayContext: BlockDisplayContext, seed: number): void;
}