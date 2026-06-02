import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockModelRenderState } from '../../../../../net/minecraft/client/renderer/block/BlockModelRenderState.d.ts'
import type { BlockDisplayContext } from '../../../../../net/minecraft/client/renderer/block/model/BlockDisplayContext.d.ts'
import type { ModelManager } from '../../../../../net/minecraft/client/resources/model/ModelManager.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class BlockModelResolver extends Object {
    constructor(modelManager: ModelManager)
    // private modelManager: ModelManager;
    update(renderState: BlockModelRenderState, blockState: BlockState, displayContext: BlockDisplayContext): void;
    updateForItemFrame(renderState: BlockModelRenderState, isGlowing: boolean, map: boolean): void;
}