import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { FoxModel } from '../../../../../net/minecraft/client/model/animal/fox/FoxModel.d.ts'
import type { AgeableMobRenderer } from '../../../../../net/minecraft/client/renderer/entity/AgeableMobRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { FoxRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/FoxRenderState.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Fox } from '../../../../../net/minecraft/world/entity/animal/fox/Fox.d.ts'
export class FoxRenderer extends AgeableMobRenderer<Fox, FoxRenderState, FoxModel> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    createRenderState(): FoxRenderState;
    extractRenderState(entity: Fox, state: FoxRenderState, partialTicks: number): void;
    getTextureLocation(state: FoxRenderState): Identifier;
    setupRotations(state: FoxRenderState, poseStack: PoseStack, bodyRot: number, entityScale: number): void;
}