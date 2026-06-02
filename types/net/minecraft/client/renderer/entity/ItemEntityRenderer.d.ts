import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { EntityRenderer } from '../../../../../net/minecraft/client/renderer/entity/EntityRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { ItemClusterRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/ItemClusterRenderState.d.ts'
import type { ItemEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/ItemEntityRenderState.d.ts'
import type { ItemModelResolver } from '../../../../../net/minecraft/client/renderer/item/ItemModelResolver.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { RandomSource } from '../../../../../net/minecraft/util/RandomSource.d.ts'
import type { ItemEntity } from '../../../../../net/minecraft/world/entity/item/ItemEntity.d.ts'
import type { AABB } from '../../../../../net/minecraft/world/phys/AABB.d.ts'
export class ItemEntityRenderer extends EntityRenderer<ItemEntity, ItemEntityRenderState> {
    static NAMETAG_SCALE: number;
    static renderMultipleFromCount(paramposeStack: PoseStack, paramsubmitNodeCollector: SubmitNodeCollector, paramlightCoords: number, paramstate: ItemClusterRenderState, paramrandom: RandomSource): void;
    static submitMultipleFromCount(paramposeStack: PoseStack, paramsubmitNodeCollector: SubmitNodeCollector, paramlightCoords: number, paramstate: ItemClusterRenderState, paramrandom: RandomSource): void;
    static submitMultipleFromCount(paramposeStack: PoseStack, paramsubmitNodeCollector: SubmitNodeCollector, paramlightCoords: number, paramstate: ItemClusterRenderState, paramrandom: RandomSource, parammodelBoundingBox: AABB): void;
    constructor(context: EntityRendererProvider$Context)
    // private itemModelResolver: ItemModelResolver;
    // private random: RandomSource;
    createRenderState(): ItemEntityRenderState;
    extractRenderState(entity: ItemEntity, state: ItemEntityRenderState, partialTicks: number): void;
    submit(state: ItemEntityRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
}