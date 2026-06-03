import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { EntityModel } from '../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { MobRenderer } from '../../../../../net/minecraft/client/renderer/entity/MobRenderer.d.ts'
import type { EntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/EntityRenderState.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { PufferfishRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/PufferfishRenderState.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Pufferfish } from '../../../../../net/minecraft/world/entity/animal/fish/Pufferfish.d.ts'
export class PufferfishRenderer extends MobRenderer<Pufferfish, PufferfishRenderState, EntityModel<EntityRenderState>> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    // private big: EntityModel<EntityRenderState>;
    // private mid: EntityModel<EntityRenderState>;
    // private small: EntityModel<EntityRenderState>;
    createRenderState(): PufferfishRenderState;
    createRenderState(entity: Pufferfish, partialTicks: number): PufferfishRenderState;
    extractRenderState(entity: Pufferfish, state: PufferfishRenderState, partialTicks: number): void;
    getShadowRadius(state: PufferfishRenderState): number;
    getTextureLocation(state: PufferfishRenderState): Identifier;
    setupRotations(state: PufferfishRenderState, poseStack: PoseStack, bodyRot: number, entityScale: number): void;
    submit(state: PufferfishRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
}