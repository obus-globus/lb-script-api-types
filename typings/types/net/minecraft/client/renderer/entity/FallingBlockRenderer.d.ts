import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { Frustum } from '../../../../../net/minecraft/client/renderer/culling/Frustum.d.ts'
import type { EntityRenderer } from '../../../../../net/minecraft/client/renderer/entity/EntityRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { FallingBlockRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/FallingBlockRenderState.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { FallingBlockEntity } from '../../../../../net/minecraft/world/entity/item/FallingBlockEntity.d.ts'
export class FallingBlockRenderer extends EntityRenderer<FallingBlockEntity, FallingBlockRenderState> {
    static NAMETAG_SCALE: number;
    constructor(context: EntityRendererProvider$Context)
    createRenderState(): FallingBlockRenderState;
    extractRenderState(entity: FallingBlockEntity, state: FallingBlockRenderState, partialTicks: number): void;
    shouldRender(entity: FallingBlockEntity, culler: Frustum, camX: number, camY: number, camZ: number): boolean;
    submit(state: FallingBlockRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
}