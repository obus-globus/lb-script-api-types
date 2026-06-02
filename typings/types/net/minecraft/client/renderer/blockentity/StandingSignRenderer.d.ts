import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Model$Simple } from '../../../../../net/minecraft/client/model/Model$Simple.d.ts'
import type { EntityModelSet } from '../../../../../net/minecraft/client/model/geom/EntityModelSet.d.ts'
import type { LayerDefinition } from '../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { AbstractSignRenderer } from '../../../../../net/minecraft/client/renderer/blockentity/AbstractSignRenderer.d.ts'
import type { BlockEntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/blockentity/BlockEntityRendererProvider$Context.d.ts'
import type { StandingSignRenderer$Models } from '../../../../../net/minecraft/client/renderer/blockentity/StandingSignRenderer$Models.d.ts'
import type { WallAndGroundTransformations } from '../../../../../net/minecraft/client/renderer/blockentity/WallAndGroundTransformations.d.ts'
import type { SignRenderState$SignTransformations } from '../../../../../net/minecraft/client/renderer/blockentity/state/SignRenderState$SignTransformations.d.ts'
import type { StandingSignRenderState } from '../../../../../net/minecraft/client/renderer/blockentity/state/StandingSignRenderState.d.ts'
import type { ModelFeatureRenderer$CrumblingOverlay } from '../../../../../net/minecraft/client/renderer/feature/ModelFeatureRenderer$CrumblingOverlay.d.ts'
import type { SpriteGetter } from '../../../../../net/minecraft/client/resources/model/sprite/SpriteGetter.d.ts'
import type { SpriteId } from '../../../../../net/minecraft/client/resources/model/sprite/SpriteId.d.ts'
import type { PlainSignBlock$Attachment } from '../../../../../net/minecraft/world/level/block/PlainSignBlock$Attachment.d.ts'
import type { SignBlockEntity } from '../../../../../net/minecraft/world/level/block/entity/SignBlockEntity.d.ts'
import type { SignText } from '../../../../../net/minecraft/world/level/block/entity/SignText.d.ts'
import type { WoodType } from '../../../../../net/minecraft/world/level/block/state/properties/WoodType.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class StandingSignRenderer extends AbstractSignRenderer<StandingSignRenderState> {
    static TRANSFORMATIONS: WallAndGroundTransformations<SignRenderState$SignTransformations>;
    static createSignLayer(paramstanding: boolean): LayerDefinition;
    static createSignModel(paramentityModelSet: EntityModelSet, paramwoodType: WoodType, paramattachment: PlainSignBlock$Attachment): Model$Simple;
    static getDarkColor(paramsignText: SignText): number;
    static submitSpecial(paramsprites: SpriteGetter, paramposeStack: PoseStack, paramsubmitNodeCollector: SubmitNodeCollector, paramlightCoords: number, paramoverlayCoords: number, parammodel: Model$Simple, paramsprite: SpriteId): void;
    constructor(context: BlockEntityRendererProvider$Context)
    // private signModels: Map<WoodType, StandingSignRenderer$Models>;
    createRenderState(): StandingSignRenderState;
    extractRenderState(blockEntity: SignBlockEntity, state: StandingSignRenderState, partialTicks: number, cameraPosition: Vec3, breakProgress: ModelFeatureRenderer$CrumblingOverlay): void;
    getSignModel(state: StandingSignRenderState): Model$Simple;
    getSignSprite(type: WoodType): SpriteId;
}