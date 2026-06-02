import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BookModel } from '../../../../../net/minecraft/client/model/object/book/BookModel.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { BlockEntityRenderer } from '../../../../../net/minecraft/client/renderer/blockentity/BlockEntityRenderer.d.ts'
import type { BlockEntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/blockentity/BlockEntityRendererProvider$Context.d.ts'
import type { BlockEntityRenderState } from '../../../../../net/minecraft/client/renderer/blockentity/state/BlockEntityRenderState.d.ts'
import type { EnchantTableRenderState } from '../../../../../net/minecraft/client/renderer/blockentity/state/EnchantTableRenderState.d.ts'
import type { ModelFeatureRenderer$CrumblingOverlay } from '../../../../../net/minecraft/client/renderer/feature/ModelFeatureRenderer$CrumblingOverlay.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { SpriteGetter } from '../../../../../net/minecraft/client/resources/model/sprite/SpriteGetter.d.ts'
import type { SpriteId } from '../../../../../net/minecraft/client/resources/model/sprite/SpriteId.d.ts'
import type { BlockEntity } from '../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { EnchantingTableBlockEntity } from '../../../../../net/minecraft/world/level/block/entity/EnchantingTableBlockEntity.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class EnchantTableRenderer extends Object implements BlockEntityRenderer<EnchantingTableBlockEntity, EnchantTableRenderState> {
    static BOOK_TEXTURE: SpriteId;
    constructor(context: BlockEntityRendererProvider$Context)
    // private bookModel: BookModel;
    // private sprites: SpriteGetter;
    createRenderState(): EnchantTableRenderState;
    extractRenderState<T extends BlockEntity, S extends BlockEntityRenderState>(blockEntity: T, state: S, partialTicks: number, cameraPosition: Vec3, breakProgress: ModelFeatureRenderer$CrumblingOverlay): void;
    extractRenderState(blockEntity: EnchantingTableBlockEntity, state: EnchantTableRenderState, partialTicks: number, cameraPosition: Vec3, breakProgress: ModelFeatureRenderer$CrumblingOverlay): void;
    getViewDistance(): number;
    shouldRender<T extends BlockEntity>(blockEntity: T, cameraPosition: Vec3): boolean;
    shouldRenderOffScreen(): boolean;
    submit(state: EnchantTableRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
}