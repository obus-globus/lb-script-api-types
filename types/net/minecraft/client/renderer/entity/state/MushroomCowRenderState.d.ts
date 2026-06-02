import type { BlockModelRenderState } from '../../../../../../net/minecraft/client/renderer/block/BlockModelRenderState.d.ts'
import type { LivingEntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { MushroomCow$Variant } from '../../../../../../net/minecraft/world/entity/animal/cow/MushroomCow$Variant.d.ts'
export class MushroomCowRenderState extends LivingEntityRenderState {
    static NO_OUTLINE: number;
    constructor()
    mushroomModel: BlockModelRenderState;
    variant: MushroomCow$Variant;
}