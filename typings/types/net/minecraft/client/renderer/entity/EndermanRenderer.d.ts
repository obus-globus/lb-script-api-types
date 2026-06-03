import type { EndermanModel } from '../../../../../net/minecraft/client/model/monster/enderman/EndermanModel.d.ts'
import type { BlockModelResolver } from '../../../../../net/minecraft/client/renderer/block/BlockModelResolver.d.ts'
import type { BlockDisplayContext } from '../../../../../net/minecraft/client/renderer/block/model/BlockDisplayContext.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { MobRenderer } from '../../../../../net/minecraft/client/renderer/entity/MobRenderer.d.ts'
import type { EndermanRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/EndermanRenderState.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { RandomSource } from '../../../../../net/minecraft/util/RandomSource.d.ts'
import type { EnderMan } from '../../../../../net/minecraft/world/entity/monster/EnderMan.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class EndermanRenderer extends MobRenderer<EnderMan, EndermanRenderState, EndermanModel<EndermanRenderState>> {
    static BLOCK_DISPLAY_CONTEXT: BlockDisplayContext;
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    // private blockModelResolver: BlockModelResolver;
    // private random: RandomSource;
    createRenderState(): EndermanRenderState;
    createRenderState(entity: EnderMan, partialTicks: number): EndermanRenderState;
    extractRenderState(entity: EnderMan, state: EndermanRenderState, partialTicks: number): void;
    getRenderOffset(state: EndermanRenderState): Vec3;
    getTextureLocation(state: EndermanRenderState): Identifier;
}