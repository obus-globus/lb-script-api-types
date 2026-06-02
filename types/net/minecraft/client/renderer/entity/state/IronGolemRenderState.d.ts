import type { BlockModelRenderState } from '../../../../../../net/minecraft/client/renderer/block/BlockModelRenderState.d.ts'
import type { LivingEntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { Crackiness$Level } from '../../../../../../net/minecraft/world/entity/Crackiness$Level.d.ts'
export class IronGolemRenderState extends LivingEntityRenderState {
    static NO_OUTLINE: number;
    constructor()
    attackTicksRemaining: number;
    crackiness: Crackiness$Level;
    flowerBlock: BlockModelRenderState;
    offerFlowerTick: number;
}