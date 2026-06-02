import type { CopperGolemModel } from '../../../../../net/minecraft/client/model/animal/golem/CopperGolemModel.d.ts'
import type { BlockModelResolver } from '../../../../../net/minecraft/client/renderer/block/BlockModelResolver.d.ts'
import type { BlockDisplayContext } from '../../../../../net/minecraft/client/renderer/block/model/BlockDisplayContext.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { MobRenderer } from '../../../../../net/minecraft/client/renderer/entity/MobRenderer.d.ts'
import type { CopperGolemRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/CopperGolemRenderState.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { CopperGolem } from '../../../../../net/minecraft/world/entity/animal/golem/CopperGolem.d.ts'
export class CopperGolemRenderer extends MobRenderer<CopperGolem, CopperGolemRenderState, CopperGolemModel> {
    static BLOCK_DISPLAY_CONTEXT: BlockDisplayContext;
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    // private blockModelResolver: BlockModelResolver;
    createRenderState(): CopperGolemRenderState;
    extractRenderState(entity: CopperGolem, state: CopperGolemRenderState, partialTicks: number): void;
    getTextureLocation(state: CopperGolemRenderState): Identifier;
}