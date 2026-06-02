import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Transformation } from '../../../../../com/mojang/math/Transformation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ModelPart } from '../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { SpriteMapper } from '../../../../../net/minecraft/client/renderer/SpriteMapper.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { BlockEntityRenderer } from '../../../../../net/minecraft/client/renderer/blockentity/BlockEntityRenderer.d.ts'
import type { BlockEntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/blockentity/BlockEntityRendererProvider$Context.d.ts'
import type { BlockEntityRenderState } from '../../../../../net/minecraft/client/renderer/blockentity/state/BlockEntityRenderState.d.ts'
import type { ConduitRenderState } from '../../../../../net/minecraft/client/renderer/blockentity/state/ConduitRenderState.d.ts'
import type { ModelFeatureRenderer$CrumblingOverlay } from '../../../../../net/minecraft/client/renderer/feature/ModelFeatureRenderer$CrumblingOverlay.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { SpriteGetter } from '../../../../../net/minecraft/client/resources/model/sprite/SpriteGetter.d.ts'
import type { SpriteId } from '../../../../../net/minecraft/client/resources/model/sprite/SpriteId.d.ts'
import type { BlockEntity } from '../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { ConduitBlockEntity } from '../../../../../net/minecraft/world/level/block/entity/ConduitBlockEntity.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ConduitRenderer extends Object implements BlockEntityRenderer<ConduitBlockEntity, ConduitRenderState> {
    static ACTIVE_SHELL_TEXTURE: SpriteId;
    static CLOSED_EYE_TEXTURE: SpriteId;
    static DEFAULT_TRANSFORMATION: Transformation;
    static MAPPER: SpriteMapper;
    static OPEN_EYE_TEXTURE: SpriteId;
    static SHELL_TEXTURE: SpriteId;
    static VERTICAL_WIND_TEXTURE: SpriteId;
    static WIND_TEXTURE: SpriteId;
    static createCageLayer(): LayerDefinition;
    static createEyeLayer(): LayerDefinition;
    static createShellLayer(): LayerDefinition;
    static createWindLayer(): LayerDefinition;
    constructor(context: BlockEntityRendererProvider$Context)
    // private cage: ModelPart;
    // private eye: ModelPart;
    // private shell: ModelPart;
    // private sprites: SpriteGetter;
    // private wind: ModelPart;
    createRenderState(): ConduitRenderState;
    extractRenderState<T extends BlockEntity, S extends BlockEntityRenderState>(blockEntity: T, state: S, partialTicks: number, cameraPosition: Vec3, breakProgress: ModelFeatureRenderer$CrumblingOverlay): void;
    extractRenderState(blockEntity: ConduitBlockEntity, state: ConduitRenderState, partialTicks: number, cameraPosition: Vec3, breakProgress: ModelFeatureRenderer$CrumblingOverlay): void;
    getViewDistance(): number;
    shouldRender<T extends BlockEntity>(blockEntity: T, cameraPosition: Vec3): boolean;
    shouldRenderOffScreen(): boolean;
    submit(state: ConduitRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
}