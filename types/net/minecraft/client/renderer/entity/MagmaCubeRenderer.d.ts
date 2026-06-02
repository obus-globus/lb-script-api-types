import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { MagmaCubeModel } from '../../../../../net/minecraft/client/model/monster/slime/MagmaCubeModel.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { MobRenderer } from '../../../../../net/minecraft/client/renderer/entity/MobRenderer.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { SlimeRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/SlimeRenderState.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { MagmaCube } from '../../../../../net/minecraft/world/entity/monster/MagmaCube.d.ts'
export class MagmaCubeRenderer extends MobRenderer<MagmaCube, SlimeRenderState, MagmaCubeModel> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    createRenderState(): SlimeRenderState;
    extractRenderState(entity: MagmaCube, state: SlimeRenderState, partialTicks: number): void;
    getBlockLightLevel(entity: MagmaCube, blockPos: BlockPos): number;
    getShadowRadius(state: SlimeRenderState): number;
    getTextureLocation(state: SlimeRenderState): Identifier;
    scale(state: SlimeRenderState, poseStack: PoseStack): void;
}