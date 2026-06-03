import type { SnowGolemModel } from '../../../../../net/minecraft/client/model/animal/golem/SnowGolemModel.d.ts'
import type { BlockModelResolver } from '../../../../../net/minecraft/client/renderer/block/BlockModelResolver.d.ts'
import type { BlockDisplayContext } from '../../../../../net/minecraft/client/renderer/block/model/BlockDisplayContext.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { MobRenderer } from '../../../../../net/minecraft/client/renderer/entity/MobRenderer.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { SnowGolemRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/SnowGolemRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { SnowGolem } from '../../../../../net/minecraft/world/entity/animal/golem/SnowGolem.d.ts'
export class SnowGolemRenderer extends MobRenderer<SnowGolem, SnowGolemRenderState, SnowGolemModel> {
    static BLOCK_DISPLAY_CONTEXT: BlockDisplayContext;
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    // private blockModelResolver: BlockModelResolver;
    createRenderState(): SnowGolemRenderState;
    createRenderState(entity: SnowGolem, partialTicks: number): SnowGolemRenderState;
    extractRenderState(entity: SnowGolem, state: SnowGolemRenderState, partialTicks: number): void;
    getTextureLocation(state: SnowGolemRenderState): Identifier;
}