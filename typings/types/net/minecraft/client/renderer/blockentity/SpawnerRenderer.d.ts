import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { BlockEntityRenderer } from '../../../../../net/minecraft/client/renderer/blockentity/BlockEntityRenderer.d.ts'
import type { BlockEntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/blockentity/BlockEntityRendererProvider$Context.d.ts'
import type { SpawnerRenderState } from '../../../../../net/minecraft/client/renderer/blockentity/state/SpawnerRenderState.d.ts'
import type { EntityRenderDispatcher } from '../../../../../net/minecraft/client/renderer/entity/EntityRenderDispatcher.d.ts'
import type { EntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/EntityRenderState.d.ts'
import type { ModelFeatureRenderer$CrumblingOverlay } from '../../../../../net/minecraft/client/renderer/feature/ModelFeatureRenderer$CrumblingOverlay.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { SpawnerBlockEntity } from '../../../../../net/minecraft/world/level/block/entity/SpawnerBlockEntity.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class SpawnerRenderer extends Object implements BlockEntityRenderer<SpawnerBlockEntity, SpawnerRenderState> {
    static submitEntityInSpawner(paramposeStack: PoseStack, paramsubmitNodeCollector: SubmitNodeCollector, paramdisplayEntity: EntityRenderState, paramentityRenderer: EntityRenderDispatcher, paramspin: number, paramscale: number, paramcamera: CameraRenderState): void;
    constructor(context: BlockEntityRendererProvider$Context)
    // private entityRenderer: EntityRenderDispatcher;
    createRenderState(): SpawnerRenderState;
    extractRenderState(blockEntity: SpawnerBlockEntity, state: SpawnerRenderState, partialTicks: number, cameraPosition: Vec3, breakProgress: ModelFeatureRenderer$CrumblingOverlay): void;
    getViewDistance(): number;
    shouldRender(blockEntity: SpawnerBlockEntity, cameraPosition: Vec3): boolean;
    shouldRenderOffScreen(): boolean;
    submit(state: SpawnerRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
}