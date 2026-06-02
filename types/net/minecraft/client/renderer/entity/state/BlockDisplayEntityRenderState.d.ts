import type { BlockModelRenderState } from '../../../../../../net/minecraft/client/renderer/block/BlockModelRenderState.d.ts'
import type { DisplayEntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/DisplayEntityRenderState.d.ts'
export class BlockDisplayEntityRenderState extends DisplayEntityRenderState {
    static NO_OUTLINE: number;
    constructor()
    blockModel: BlockModelRenderState;
    hasSubState(): boolean;
}