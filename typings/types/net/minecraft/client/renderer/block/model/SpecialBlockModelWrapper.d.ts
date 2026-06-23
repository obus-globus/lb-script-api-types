import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockModelRenderState } from '../../../../../../net/minecraft/client/renderer/block/BlockModelRenderState.d.ts'
import type { BlockDisplayContext } from '../../../../../../net/minecraft/client/renderer/block/model/BlockDisplayContext.d.ts'
import type { BlockModel } from '../../../../../../net/minecraft/client/renderer/block/model/BlockModel.d.ts'
import type { SpecialModelRenderer } from '../../../../../../net/minecraft/client/renderer/special/SpecialModelRenderer.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { Matrix4fc } from '../../../../../../org/joml/Matrix4fc.d.ts'
export class SpecialBlockModelWrapper<T extends unknown> extends Object implements BlockModel {
    constructor(specialRenderer: SpecialModelRenderer<T>, transformation: Matrix4fc)
    // private specialRenderer: SpecialModelRenderer<T>;
    // private transformation: Matrix4fc;
    update(output: BlockModelRenderState, blockState: BlockState, displayContext: BlockDisplayContext, seed: number): void;
}