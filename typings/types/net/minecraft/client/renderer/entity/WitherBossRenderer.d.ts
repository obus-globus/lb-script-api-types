import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { WitherBossModel } from '../../../../../net/minecraft/client/model/monster/wither/WitherBossModel.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { MobRenderer } from '../../../../../net/minecraft/client/renderer/entity/MobRenderer.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { WitherRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/WitherRenderState.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { WitherBoss } from '../../../../../net/minecraft/world/entity/boss/wither/WitherBoss.d.ts'
export class WitherBossRenderer extends MobRenderer<WitherBoss, WitherRenderState, WitherBossModel> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    createRenderState(): WitherRenderState;
    createRenderState(entity: WitherBoss, partialTicks: number): WitherRenderState;
    extractRenderState(entity: WitherBoss, state: WitherRenderState, partialTicks: number): void;
    getBlockLightLevel(entity: WitherBoss, blockPos: BlockPos): number;
    getTextureLocation(state: WitherRenderState): Identifier;
    scale(state: WitherRenderState, poseStack: PoseStack): void;
}