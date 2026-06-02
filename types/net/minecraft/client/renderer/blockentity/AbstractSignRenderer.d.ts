import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Font } from '../../../../../net/minecraft/client/gui/Font.d.ts'
import type { Model$Simple } from '../../../../../net/minecraft/client/model/Model$Simple.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { BlockEntityRenderer } from '../../../../../net/minecraft/client/renderer/blockentity/BlockEntityRenderer.d.ts'
import type { BlockEntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/blockentity/BlockEntityRendererProvider$Context.d.ts'
import type { SignRenderState } from '../../../../../net/minecraft/client/renderer/blockentity/state/SignRenderState.d.ts'
import type { ModelFeatureRenderer$CrumblingOverlay } from '../../../../../net/minecraft/client/renderer/feature/ModelFeatureRenderer$CrumblingOverlay.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { SpriteGetter } from '../../../../../net/minecraft/client/resources/model/sprite/SpriteGetter.d.ts'
import type { SpriteId } from '../../../../../net/minecraft/client/resources/model/sprite/SpriteId.d.ts'
import type { BlockEntity } from '../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { SignBlockEntity } from '../../../../../net/minecraft/world/level/block/entity/SignBlockEntity.d.ts'
import type { SignText } from '../../../../../net/minecraft/world/level/block/entity/SignText.d.ts'
import type { WoodType } from '../../../../../net/minecraft/world/level/block/state/properties/WoodType.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export abstract class AbstractSignRenderer<S extends SignRenderState> extends Object implements BlockEntityRenderer<SignBlockEntity, S> {
    static getDarkColor(paramsignText: SignText): number;
    constructor(context: BlockEntityRendererProvider$Context)
    // private font: Font;
    // private sprites: SpriteGetter;
    extractRenderState(blockEntity: SignBlockEntity, state: S, partialTicks: number, cameraPosition: Vec3, breakProgress: ModelFeatureRenderer$CrumblingOverlay): void;
    extractRenderState<T extends BlockEntity>(blockEntity: T, state: S, partialTicks: number, cameraPosition: Vec3, breakProgress: ModelFeatureRenderer$CrumblingOverlay): void;
    getSignModel(state: S): Model$Simple;
    getSignSprite(type: WoodType): SpriteId;
    getViewDistance(): number;
    shouldRender<T extends BlockEntity>(blockEntity: T, cameraPosition: Vec3): boolean;
    shouldRenderOffScreen(): boolean;
    submit(state: S, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
    submitSign(poseStack: PoseStack, lightCoords: number, type: WoodType, signModel: Model$Simple, breakProgress: ModelFeatureRenderer$CrumblingOverlay, submitNodeCollector: SubmitNodeCollector): void;
    // private submitSignText(state: S, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, signText: SignText): void;
    // private submitSignWithText(state: S, poseStack: PoseStack, breakProgress: ModelFeatureRenderer$CrumblingOverlay, submitNodeCollector: SubmitNodeCollector): void;
}