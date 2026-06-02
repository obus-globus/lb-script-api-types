import type { MovingBlockRenderState } from '../../../../../../net/minecraft/client/renderer/block/MovingBlockRenderState.d.ts'
import type { EntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/EntityRenderState.d.ts'
export class FallingBlockRenderState extends EntityRenderState {
    static NO_OUTLINE: number;
    constructor()
    movingBlockRenderState: MovingBlockRenderState;
}