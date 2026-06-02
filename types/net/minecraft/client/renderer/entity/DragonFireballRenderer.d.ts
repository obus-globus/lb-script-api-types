import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { EntityRenderer } from '../../../../../net/minecraft/client/renderer/entity/EntityRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { EntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/EntityRenderState.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { DragonFireball } from '../../../../../net/minecraft/world/entity/projectile/hurtingprojectile/DragonFireball.d.ts'
export class DragonFireballRenderer extends EntityRenderer<DragonFireball, EntityRenderState> {
    static NAMETAG_SCALE: number;
    constructor(context: EntityRendererProvider$Context)
    createRenderState(): EntityRenderState;
    getBlockLightLevel(entity: DragonFireball, blockPos: BlockPos): number;
    submit(state: EntityRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
}