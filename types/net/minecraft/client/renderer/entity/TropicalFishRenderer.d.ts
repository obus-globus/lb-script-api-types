import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { EntityModel } from '../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { MobRenderer } from '../../../../../net/minecraft/client/renderer/entity/MobRenderer.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { TropicalFishRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/TropicalFishRenderState.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { TropicalFish } from '../../../../../net/minecraft/world/entity/animal/fish/TropicalFish.d.ts'
export class TropicalFishRenderer extends MobRenderer<TropicalFish, TropicalFishRenderState, EntityModel<TropicalFishRenderState>> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    // private largeModel: EntityModel<TropicalFishRenderState>;
    // private smallModel: EntityModel<TropicalFishRenderState>;
    createRenderState(): TropicalFishRenderState;
    extractRenderState(entity: TropicalFish, state: TropicalFishRenderState, partialTicks: number): void;
    getModelTint(state: TropicalFishRenderState): number;
    getTextureLocation(state: TropicalFishRenderState): Identifier;
    setupRotations(state: TropicalFishRenderState, poseStack: PoseStack, bodyRot: number, entityScale: number): void;
    submit(state: TropicalFishRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
}