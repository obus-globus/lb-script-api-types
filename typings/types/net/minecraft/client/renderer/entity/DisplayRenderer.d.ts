import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { BlockModelResolver } from '../../../../../net/minecraft/client/renderer/block/BlockModelResolver.d.ts'
import type { BlockDisplayContext } from '../../../../../net/minecraft/client/renderer/block/model/BlockDisplayContext.d.ts'
import type { EntityRenderDispatcher } from '../../../../../net/minecraft/client/renderer/entity/EntityRenderDispatcher.d.ts'
import type { EntityRenderer } from '../../../../../net/minecraft/client/renderer/entity/EntityRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { DisplayEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/DisplayEntityRenderState.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Display } from '../../../../../net/minecraft/world/entity/Display.d.ts'
import type { Display$RenderState } from '../../../../../net/minecraft/world/entity/Display$RenderState.d.ts'
import type { AABB } from '../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Quaternionf } from '../../../../../org/joml/Quaternionf.d.ts'
export abstract class DisplayRenderer<T extends Display, S extends unknown, ST extends DisplayEntityRenderState> extends EntityRenderer<T, ST> {
    static BLOCK_DISPLAY_CONTEXT: BlockDisplayContext;
    static NAMETAG_SCALE: number;
    constructor(context: EntityRendererProvider$Context)
    // private blockModelResolver: BlockModelResolver;
    // private entityRenderDispatcher: EntityRenderDispatcher;
    affectedByCulling(entity: T): boolean;
    // private calculateOrientation(renderState: Display$RenderState, state: ST, output: Quaternionf): Quaternionf;
    extractRenderState(entity: T, state: ST, partialTicks: number): void;
    getBlockLightLevel(entity: T, blockPos: BlockPos): number;
    getBoundingBoxForCulling(entity: T): AABB;
    getShadowRadius(state: ST): number;
    getShadowStrength(state: ST): number;
    getSkyLightLevel(entity: T, blockPos: BlockPos): number;
    submit(state: ST, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
    submitInner(state: ST, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, interpolationProgress: number): void;
}