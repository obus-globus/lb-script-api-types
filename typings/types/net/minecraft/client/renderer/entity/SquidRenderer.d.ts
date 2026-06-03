import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { SquidModel } from '../../../../../net/minecraft/client/model/animal/squid/SquidModel.d.ts'
import type { AgeableMobRenderer } from '../../../../../net/minecraft/client/renderer/entity/AgeableMobRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { SquidRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/SquidRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Squid } from '../../../../../net/minecraft/world/entity/animal/squid/Squid.d.ts'
export class SquidRenderer<T extends Squid> extends AgeableMobRenderer<T, SquidRenderState, SquidModel> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context, model: SquidModel, babyModel: SquidModel)
    createRenderState(): SquidRenderState;
    createRenderState(entity: T, partialTicks: number): SquidRenderState;
    extractRenderState(entity: T, state: SquidRenderState, partialTicks: number): void;
    getTextureLocation(state: SquidRenderState): Identifier;
    setupRotations(state: SquidRenderState, poseStack: PoseStack, bodyRot: number, entityScale: number): void;
}