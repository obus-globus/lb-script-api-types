import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockModelRenderState } from '../../../../../net/minecraft/client/renderer/block/BlockModelRenderState.d.ts'
import type { SelectBlockModel$ModelSelector } from '../../../../../net/minecraft/client/renderer/block/SelectBlockModel$ModelSelector.d.ts'
import type { BlockDisplayContext } from '../../../../../net/minecraft/client/renderer/block/model/BlockDisplayContext.d.ts'
import type { BlockModel } from '../../../../../net/minecraft/client/renderer/block/model/BlockModel.d.ts'
import type { SelectBlockModelProperty } from '../../../../../net/minecraft/client/renderer/block/model/properties/select/SelectBlockModelProperty.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class SelectBlockModel<T extends Object | number | string | boolean> extends Object implements BlockModel {
    constructor(property: SelectBlockModelProperty<T>, models: (param0: T) => net.minecraft.client.renderer.block.model.BlockModel)
    // private models: (param0: T) => net.minecraft.client.renderer.block.model.BlockModel;
    // private property: SelectBlockModelProperty<T>;
    update(output: BlockModelRenderState, blockState: BlockState, displayContext: BlockDisplayContext, seed: number): void;
}