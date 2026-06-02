import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { AbstractFelineModel } from '../../../../../net/minecraft/client/model/animal/feline/AbstractFelineModel.d.ts'
import type { AgeableMobRenderer } from '../../../../../net/minecraft/client/renderer/entity/AgeableMobRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { CatRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/CatRenderState.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Cat } from '../../../../../net/minecraft/world/entity/animal/feline/Cat.d.ts'
export class CatRenderer extends AgeableMobRenderer<Cat, CatRenderState, AbstractFelineModel<CatRenderState>> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    createRenderState(): CatRenderState;
    extractRenderState(entity: Cat, state: CatRenderState, partialTicks: number): void;
    getTextureLocation(state: CatRenderState): Identifier;
    setupRotations(state: CatRenderState, poseStack: PoseStack, bodyRot: number, entityScale: number): void;
}