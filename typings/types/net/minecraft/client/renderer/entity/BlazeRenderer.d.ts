import type { BlazeModel } from '../../../../../net/minecraft/client/model/monster/blaze/BlazeModel.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { MobRenderer } from '../../../../../net/minecraft/client/renderer/entity/MobRenderer.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Blaze } from '../../../../../net/minecraft/world/entity/monster/Blaze.d.ts'
export class BlazeRenderer extends MobRenderer<Blaze, LivingEntityRenderState, BlazeModel> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    createRenderState(): LivingEntityRenderState;
    createRenderState(entity: Blaze, partialTicks: number): LivingEntityRenderState;
    getBlockLightLevel(entity: Blaze, blockPos: BlockPos): number;
    getTextureLocation(state: LivingEntityRenderState): Identifier;
}