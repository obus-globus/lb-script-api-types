import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { ModelLayerLocation } from '../../../../../net/minecraft/client/model/geom/ModelLayerLocation.d.ts'
import type { GuardianModel } from '../../../../../net/minecraft/client/model/monster/guardian/GuardianModel.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { Frustum } from '../../../../../net/minecraft/client/renderer/culling/Frustum.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { MobRenderer } from '../../../../../net/minecraft/client/renderer/entity/MobRenderer.d.ts'
import type { GuardianRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/GuardianRenderState.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Guardian } from '../../../../../net/minecraft/world/entity/monster/Guardian.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class GuardianRenderer extends MobRenderer<Guardian, GuardianRenderState, GuardianModel> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    constructor(context: EntityRendererProvider$Context, shadow: number, modelId: ModelLayerLocation)
    createRenderState(): GuardianRenderState;
    extractRenderState(entity: Guardian, state: GuardianRenderState, partialTicks: number): void;
    // private getPosition(entity: LivingEntity, yOffset: number, partialTicks: number): Vec3;
    getTextureLocation(state: GuardianRenderState): Identifier;
    shouldRender(entity: Guardian, culler: Frustum, camX: number, camY: number, camZ: number): boolean;
    submit(state: GuardianRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
}