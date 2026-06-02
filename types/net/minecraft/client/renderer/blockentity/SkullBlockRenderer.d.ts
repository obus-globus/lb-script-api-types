import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Transformation } from '../../../../../com/mojang/math/Transformation.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EntityModelSet } from '../../../../../net/minecraft/client/model/geom/EntityModelSet.d.ts'
import type { SkullModelBase } from '../../../../../net/minecraft/client/model/object/skull/SkullModelBase.d.ts'
import type { PlayerSkinRenderCache } from '../../../../../net/minecraft/client/renderer/PlayerSkinRenderCache.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { BlockEntityRenderer } from '../../../../../net/minecraft/client/renderer/blockentity/BlockEntityRenderer.d.ts'
import type { BlockEntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/blockentity/BlockEntityRendererProvider$Context.d.ts'
import type { WallAndGroundTransformations } from '../../../../../net/minecraft/client/renderer/blockentity/WallAndGroundTransformations.d.ts'
import type { BlockEntityRenderState } from '../../../../../net/minecraft/client/renderer/blockentity/state/BlockEntityRenderState.d.ts'
import type { SkullBlockRenderState } from '../../../../../net/minecraft/client/renderer/blockentity/state/SkullBlockRenderState.d.ts'
import type { ModelFeatureRenderer$CrumblingOverlay } from '../../../../../net/minecraft/client/renderer/feature/ModelFeatureRenderer$CrumblingOverlay.d.ts'
import type { RenderType } from '../../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { SkullBlock$Type } from '../../../../../net/minecraft/world/level/block/SkullBlock$Type.d.ts'
import type { BlockEntity } from '../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { SkullBlockEntity } from '../../../../../net/minecraft/world/level/block/entity/SkullBlockEntity.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class SkullBlockRenderer extends Object implements BlockEntityRenderer<SkullBlockEntity, SkullBlockRenderState> {
    static TRANSFORMATIONS: WallAndGroundTransformations<Transformation>;
    static createModel(parammodelSet: EntityModelSet, paramtype: SkullBlock$Type): SkullModelBase;
    static getPlayerSkinRenderType(paramtexture: Identifier): RenderType;
    static getSkullRenderType(paramtype: SkullBlock$Type, paramtexture: Identifier): RenderType;
    static submitSkull(paramanimationValue: number, paramposeStack: PoseStack, paramsubmitNodeCollector: SubmitNodeCollector, paramlightCoords: number, parammodel: SkullModelBase, paramrenderType: RenderType, paramoutlineColor: number, parambreakProgress: ModelFeatureRenderer$CrumblingOverlay): void;
    constructor(context: BlockEntityRendererProvider$Context)
    // private modelByType: (param0: SkullBlock$Type) => SkullModelBase;
    // private playerSkinRenderCache: PlayerSkinRenderCache;
    createRenderState(): SkullBlockRenderState;
    extractRenderState<T extends BlockEntity, S extends BlockEntityRenderState>(blockEntity: T, state: S, partialTicks: number, cameraPosition: Vec3, breakProgress: ModelFeatureRenderer$CrumblingOverlay): void;
    extractRenderState(blockEntity: SkullBlockEntity, state: SkullBlockRenderState, partialTicks: number, cameraPosition: Vec3, breakProgress: ModelFeatureRenderer$CrumblingOverlay): void;
    getViewDistance(): number;
    // private resolveSkullRenderType(type: SkullBlock$Type, entity: SkullBlockEntity): RenderType;
    shouldRender<T extends BlockEntity>(blockEntity: T, cameraPosition: Vec3): boolean;
    shouldRenderOffScreen(): boolean;
    submit(state: SkullBlockRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
}