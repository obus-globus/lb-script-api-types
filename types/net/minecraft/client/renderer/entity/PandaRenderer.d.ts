import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { PandaModel } from '../../../../../net/minecraft/client/model/animal/panda/PandaModel.d.ts'
import type { AgeableMobRenderer } from '../../../../../net/minecraft/client/renderer/entity/AgeableMobRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { PandaRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/PandaRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Panda } from '../../../../../net/minecraft/world/entity/animal/panda/Panda.d.ts'
export class PandaRenderer extends AgeableMobRenderer<Panda, PandaRenderState, PandaModel> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    createRenderState(): PandaRenderState;
    extractRenderState(entity: Panda, state: PandaRenderState, partialTicks: number): void;
    // private getAngle(thisAngle: number, nextAngle: number, nextRollPos: number, rollTransitionTime: number, threshold: number): number;
    getTextureLocation(state: PandaRenderState): Identifier;
    setupRotations(state: PandaRenderState, poseStack: PoseStack, bodyRot: number, entityScale: number): void;
}