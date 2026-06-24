import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { EntityModel } from '../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { MobRenderer } from '../../../../../net/minecraft/client/renderer/entity/MobRenderer.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { SlimeRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/SlimeRenderState.d.ts'
import type { AbstractCubeMob } from '../../../../../net/minecraft/world/entity/monster/cubemob/AbstractCubeMob.d.ts'
export abstract class AbstractCubeMobRenderer<T extends AbstractCubeMob, S extends SlimeRenderState, M extends EntityModel<S>> extends MobRenderer<T, S, M> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context, model: M)
    applySizeAndSquish(state: S, poseStack: PoseStack): void;
    downscaleSlightly(poseStack: PoseStack): void;
    extractRenderState(entity: T, state: S, partialTicks: number): void;
    getShadowRadius(state: SlimeRenderState): number;
    scale(state: S, poseStack: PoseStack): void;
}