import type { BlockModelRenderState } from '../../../../../../net/minecraft/client/renderer/block/BlockModelRenderState.d.ts'
import type { EntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/EntityRenderState.d.ts'
export class TntRenderState extends EntityRenderState {
    static NO_OUTLINE: number;
    constructor()
    blockState: BlockModelRenderState;
    fuseRemainingInTicks: number;
}