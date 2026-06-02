import type { SquidModel } from '../../../../../net/minecraft/client/model/animal/squid/SquidModel.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { SquidRenderer } from '../../../../../net/minecraft/client/renderer/entity/SquidRenderer.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { SquidRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/SquidRenderState.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { GlowSquid } from '../../../../../net/minecraft/world/entity/animal/squid/GlowSquid.d.ts'
export class GlowSquidRenderer extends SquidRenderer<GlowSquid> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context, model: SquidModel, babyModel: SquidModel)
    getBlockLightLevel(entity: GlowSquid, blockPos: BlockPos): number;
    getTextureLocation(state: SquidRenderState): Identifier;
}