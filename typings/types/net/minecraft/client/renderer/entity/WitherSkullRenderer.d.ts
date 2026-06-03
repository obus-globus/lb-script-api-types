import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { LayerDefinition } from '../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { SkullModel } from '../../../../../net/minecraft/client/model/object/skull/SkullModel.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { EntityRenderer } from '../../../../../net/minecraft/client/renderer/entity/EntityRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { WitherSkullRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/WitherSkullRenderState.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { WitherSkull } from '../../../../../net/minecraft/world/entity/projectile/hurtingprojectile/WitherSkull.d.ts'
export class WitherSkullRenderer extends EntityRenderer<WitherSkull, WitherSkullRenderState> {
    static NAMETAG_SCALE: number;
    static createSkullLayer(): LayerDefinition;
    constructor(context: EntityRendererProvider$Context)
    // private model: SkullModel;
    createRenderState(): WitherSkullRenderState;
    createRenderState(entity: WitherSkull, partialTicks: number): WitherSkullRenderState;
    extractRenderState(entity: WitherSkull, state: WitherSkullRenderState, partialTicks: number): void;
    getBlockLightLevel(entity: WitherSkull, blockPos: BlockPos): number;
    // private getTextureLocation(state: WitherSkullRenderState): Identifier;
    submit(state: WitherSkullRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
}