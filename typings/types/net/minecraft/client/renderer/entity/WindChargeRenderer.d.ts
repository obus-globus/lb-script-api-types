import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { WindChargeModel } from '../../../../../net/minecraft/client/model/object/projectile/WindChargeModel.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { EntityRenderer } from '../../../../../net/minecraft/client/renderer/entity/EntityRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { EntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/EntityRenderState.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { AbstractWindCharge } from '../../../../../net/minecraft/world/entity/projectile/hurtingprojectile/windcharge/AbstractWindCharge.d.ts'
export class WindChargeRenderer extends EntityRenderer<AbstractWindCharge, EntityRenderState> {
    static NAMETAG_SCALE: number;
    constructor(context: EntityRendererProvider$Context)
    // private model: WindChargeModel;
    createRenderState(): EntityRenderState;
    createRenderState(entity: AbstractWindCharge, partialTicks: number): EntityRenderState;
    submit(state: EntityRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
    xOffset(t: number): number;
}