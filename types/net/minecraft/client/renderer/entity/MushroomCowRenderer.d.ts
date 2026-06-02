import type { CowModel } from '../../../../../net/minecraft/client/model/animal/cow/CowModel.d.ts'
import type { BlockModelResolver } from '../../../../../net/minecraft/client/renderer/block/BlockModelResolver.d.ts'
import type { BlockDisplayContext } from '../../../../../net/minecraft/client/renderer/block/model/BlockDisplayContext.d.ts'
import type { AgeableMobRenderer } from '../../../../../net/minecraft/client/renderer/entity/AgeableMobRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { MushroomCowRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/MushroomCowRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { MushroomCow } from '../../../../../net/minecraft/world/entity/animal/cow/MushroomCow.d.ts'
export class MushroomCowRenderer extends AgeableMobRenderer<MushroomCow, MushroomCowRenderState, CowModel> {
    static BLOCK_DISPLAY_CONTEXT: BlockDisplayContext;
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    // private blockModelResolver: BlockModelResolver;
    createRenderState(): MushroomCowRenderState;
    extractRenderState(entity: MushroomCow, state: MushroomCowRenderState, partialTicks: number): void;
    getTextureLocation(state: MushroomCowRenderState): Identifier;
}