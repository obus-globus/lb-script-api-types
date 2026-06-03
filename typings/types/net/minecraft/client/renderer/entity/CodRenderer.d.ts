import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { CodModel } from '../../../../../net/minecraft/client/model/animal/fish/CodModel.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { MobRenderer } from '../../../../../net/minecraft/client/renderer/entity/MobRenderer.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Cod } from '../../../../../net/minecraft/world/entity/animal/fish/Cod.d.ts'
export class CodRenderer extends MobRenderer<Cod, LivingEntityRenderState, CodModel> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    createRenderState(): LivingEntityRenderState;
    createRenderState(entity: Cod, partialTicks: number): LivingEntityRenderState;
    getTextureLocation(state: LivingEntityRenderState): Identifier;
    setupRotations(state: LivingEntityRenderState, poseStack: PoseStack, bodyRot: number, entityScale: number): void;
}