import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { TridentModel } from '../../../../../net/minecraft/client/model/object/projectile/TridentModel.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { EntityRenderer } from '../../../../../net/minecraft/client/renderer/entity/EntityRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { ThrownTridentRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/ThrownTridentRenderState.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ThrownTrident } from '../../../../../net/minecraft/world/entity/projectile/arrow/ThrownTrident.d.ts'
import type { AABB } from '../../../../../net/minecraft/world/phys/AABB.d.ts'
export class ThrownTridentRenderer extends EntityRenderer<ThrownTrident, ThrownTridentRenderState> {
    static NAMETAG_SCALE: number;
    static TRIDENT_LOCATION: Identifier;
    constructor(context: EntityRendererProvider$Context)
    // private model: TridentModel;
    createRenderState(): ThrownTridentRenderState;
    createRenderState(entity: ThrownTrident, partialTicks: number): ThrownTridentRenderState;
    extractRenderState(entity: ThrownTrident, state: ThrownTridentRenderState, partialTicks: number): void;
    getBoundingBoxForCulling(entity: ThrownTrident): AABB;
    submit(state: ThrownTridentRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
}