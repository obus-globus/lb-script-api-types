import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { ShulkerBulletModel } from '../../../../../net/minecraft/client/model/object/projectile/ShulkerBulletModel.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { EntityRenderer } from '../../../../../net/minecraft/client/renderer/entity/EntityRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { ShulkerBulletRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/ShulkerBulletRenderState.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { ShulkerBullet } from '../../../../../net/minecraft/world/entity/projectile/ShulkerBullet.d.ts'
export class ShulkerBulletRenderer extends EntityRenderer<ShulkerBullet, ShulkerBulletRenderState> {
    static NAMETAG_SCALE: number;
    constructor(context: EntityRendererProvider$Context)
    // private model: ShulkerBulletModel;
    createRenderState(): ShulkerBulletRenderState;
    createRenderState(entity: ShulkerBullet, partialTicks: number): ShulkerBulletRenderState;
    extractRenderState(entity: ShulkerBullet, state: ShulkerBulletRenderState, partialTicks: number): void;
    getBlockLightLevel(entity: ShulkerBullet, blockPos: BlockPos): number;
    submit(state: ShulkerBulletRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
}