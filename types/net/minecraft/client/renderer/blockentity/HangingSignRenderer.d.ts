import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Model$Simple } from '../../../../../net/minecraft/client/model/Model$Simple.d.ts'
import type { EntityModelSet } from '../../../../../net/minecraft/client/model/geom/EntityModelSet.d.ts'
import type { LayerDefinition } from '../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { AbstractSignRenderer } from '../../../../../net/minecraft/client/renderer/blockentity/AbstractSignRenderer.d.ts'
import type { BlockEntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/blockentity/BlockEntityRendererProvider$Context.d.ts'
import type { HangingSignRenderer$Models } from '../../../../../net/minecraft/client/renderer/blockentity/HangingSignRenderer$Models.d.ts'
import type { WallAndGroundTransformations } from '../../../../../net/minecraft/client/renderer/blockentity/WallAndGroundTransformations.d.ts'
import type { HangingSignRenderState } from '../../../../../net/minecraft/client/renderer/blockentity/state/HangingSignRenderState.d.ts'
import type { SignRenderState$SignTransformations } from '../../../../../net/minecraft/client/renderer/blockentity/state/SignRenderState$SignTransformations.d.ts'
import type { ModelFeatureRenderer$CrumblingOverlay } from '../../../../../net/minecraft/client/renderer/feature/ModelFeatureRenderer$CrumblingOverlay.d.ts'
import type { SpriteGetter } from '../../../../../net/minecraft/client/resources/model/sprite/SpriteGetter.d.ts'
import type { SpriteId } from '../../../../../net/minecraft/client/resources/model/sprite/SpriteId.d.ts'
import type { HangingSignBlock$Attachment } from '../../../../../net/minecraft/world/level/block/HangingSignBlock$Attachment.d.ts'
import type { SignBlockEntity } from '../../../../../net/minecraft/world/level/block/entity/SignBlockEntity.d.ts'
import type { SignText } from '../../../../../net/minecraft/world/level/block/entity/SignText.d.ts'
import type { WoodType } from '../../../../../net/minecraft/world/level/block/state/properties/WoodType.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class HangingSignRenderer extends AbstractSignRenderer<HangingSignRenderState> {
    static TRANSFORMATIONS: WallAndGroundTransformations<SignRenderState$SignTransformations>;
    static createHangingSignLayer(paramtype: HangingSignBlock$Attachment): LayerDefinition;
    static createSignModel(paramentityModelSet: EntityModelSet, paramwoodType: WoodType, paramattachmentType: HangingSignBlock$Attachment): Model$Simple;
    static getDarkColor(paramsignText: SignText): number;
    static submitSpecial(paramsprites: SpriteGetter, paramposeStack: PoseStack, paramsubmitNodeCollector: SubmitNodeCollector, paramlightCoords: number, paramoverlayCoords: number, parammodel: Model$Simple, paramsprite: SpriteId): void;
    constructor(context: BlockEntityRendererProvider$Context)
    // private signModels: Map<WoodType, HangingSignRenderer$Models>;
    createRenderState(): HangingSignRenderState;
    extractRenderState(blockEntity: SignBlockEntity, state: HangingSignRenderState, partialTicks: number, cameraPosition: Vec3, breakProgress: ModelFeatureRenderer$CrumblingOverlay): void;
    getSignModel(state: HangingSignRenderState): Model$Simple;
    getSignSprite(type: WoodType): SpriteId;
}