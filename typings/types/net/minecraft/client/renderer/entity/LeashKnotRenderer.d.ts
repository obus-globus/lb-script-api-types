import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { LeashKnotModel } from '../../../../../net/minecraft/client/model/object/leash/LeashKnotModel.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { EntityRenderer } from '../../../../../net/minecraft/client/renderer/entity/EntityRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { EntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/EntityRenderState.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { LeashFenceKnotEntity } from '../../../../../net/minecraft/world/entity/decoration/LeashFenceKnotEntity.d.ts'
export class LeashKnotRenderer extends EntityRenderer<LeashFenceKnotEntity, EntityRenderState> {
    static NAMETAG_SCALE: number;
    constructor(context: EntityRendererProvider$Context)
    // private model: LeashKnotModel;
    createRenderState(): EntityRenderState;
    createRenderState(entity: LeashFenceKnotEntity, partialTicks: number): EntityRenderState;
    submit(state: EntityRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
}