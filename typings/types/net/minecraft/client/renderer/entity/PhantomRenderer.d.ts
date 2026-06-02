import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { PhantomModel } from '../../../../../net/minecraft/client/model/monster/phantom/PhantomModel.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { MobRenderer } from '../../../../../net/minecraft/client/renderer/entity/MobRenderer.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { PhantomRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/PhantomRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Phantom } from '../../../../../net/minecraft/world/entity/monster/Phantom.d.ts'
export class PhantomRenderer extends MobRenderer<Phantom, PhantomRenderState, PhantomModel> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    createRenderState(): PhantomRenderState;
    extractRenderState(entity: Phantom, state: PhantomRenderState, partialTicks: number): void;
    getTextureLocation(state: PhantomRenderState): Identifier;
    scale(state: PhantomRenderState, poseStack: PoseStack): void;
    setupRotations(state: PhantomRenderState, poseStack: PoseStack, bodyRot: number, entityScale: number): void;
}