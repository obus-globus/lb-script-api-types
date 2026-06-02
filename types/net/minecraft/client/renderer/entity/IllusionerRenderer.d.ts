import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { IllagerRenderer } from '../../../../../net/minecraft/client/renderer/entity/IllagerRenderer.d.ts'
import type { IllusionerRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/IllusionerRenderState.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Illusioner } from '../../../../../net/minecraft/world/entity/monster/illager/Illusioner.d.ts'
import type { AABB } from '../../../../../net/minecraft/world/phys/AABB.d.ts'
export class IllusionerRenderer extends IllagerRenderer<Illusioner, IllusionerRenderState> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    createRenderState(): IllusionerRenderState;
    extractRenderState(entity: Illusioner, state: IllusionerRenderState, partialTicks: number): void;
    getBoundingBoxForCulling(entity: Illusioner): AABB;
    getTextureLocation(state: IllusionerRenderState): Identifier;
    isBodyVisible(state: IllusionerRenderState): boolean;
    submit(state: IllusionerRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
}