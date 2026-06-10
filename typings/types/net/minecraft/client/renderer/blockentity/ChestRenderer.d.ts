import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Transformation } from '../../../../../com/mojang/math/Transformation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ModelLayerLocation } from '../../../../../net/minecraft/client/model/geom/ModelLayerLocation.d.ts'
import type { ChestModel } from '../../../../../net/minecraft/client/model/object/chest/ChestModel.d.ts'
import type { MultiblockChestResources } from '../../../../../net/minecraft/client/renderer/MultiblockChestResources.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { BlockEntityRenderer } from '../../../../../net/minecraft/client/renderer/blockentity/BlockEntityRenderer.d.ts'
import type { BlockEntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/blockentity/BlockEntityRendererProvider$Context.d.ts'
import type { ChestRenderState } from '../../../../../net/minecraft/client/renderer/blockentity/state/ChestRenderState.d.ts'
import type { ModelFeatureRenderer$CrumblingOverlay } from '../../../../../net/minecraft/client/renderer/feature/ModelFeatureRenderer$CrumblingOverlay.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { SpriteGetter } from '../../../../../net/minecraft/client/resources/model/sprite/SpriteGetter.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { BlockEntity } from '../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { LidBlockEntity } from '../../../../../net/minecraft/world/level/block/entity/LidBlockEntity.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ChestRenderer<T extends BlockEntity & LidBlockEntity> extends Object implements BlockEntityRenderer<T, ChestRenderState> {
    static LAYERS: MultiblockChestResources<ModelLayerLocation>;
    static modelTransformation(paramfacing: Direction): Transformation;
    static xmasTextures(): boolean;
    constructor(context: BlockEntityRendererProvider$Context)
    // private models: MultiblockChestResources<ChestModel>;
    // private sprites: SpriteGetter;
    // private xmasTextures: boolean;
    createRenderState(): ChestRenderState;
    extractRenderState(blockEntity: T, state: ChestRenderState, partialTicks: number, cameraPosition: Vec3, breakProgress: ModelFeatureRenderer$CrumblingOverlay): void;
    getViewDistance(): number;
    shouldRender(blockEntity: T, cameraPosition: Vec3): boolean;
    shouldRenderOffScreen(): boolean;
    submit(state: ChestRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
}