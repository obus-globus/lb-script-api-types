import type { PoseStack } from '../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { HeadedModel } from '../../../../../../net/minecraft/client/model/HeadedModel.d.ts'
import type { EntityModelSet } from '../../../../../../net/minecraft/client/model/geom/EntityModelSet.d.ts'
import type { SkullModelBase } from '../../../../../../net/minecraft/client/model/object/skull/SkullModelBase.d.ts'
import type { PlayerSkinRenderCache } from '../../../../../../net/minecraft/client/renderer/PlayerSkinRenderCache.d.ts'
import type { SubmitNodeCollector } from '../../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { RenderLayerParent } from '../../../../../../net/minecraft/client/renderer/entity/RenderLayerParent.d.ts'
import type { CustomHeadLayer$Transforms } from '../../../../../../net/minecraft/client/renderer/entity/layers/CustomHeadLayer$Transforms.d.ts'
import type { RenderLayer } from '../../../../../../net/minecraft/client/renderer/entity/layers/RenderLayer.d.ts'
import type { LivingEntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { RenderType } from '../../../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
import type { SkullBlock$Type } from '../../../../../../net/minecraft/world/level/block/SkullBlock$Type.d.ts'
export class CustomHeadLayer<S extends LivingEntityRenderState, M extends EntityModel<S> & HeadedModel> extends RenderLayer<S, M> {
    static translateToHead(paramposeStack: PoseStack, paramtransforms: CustomHeadLayer$Transforms): void;
    constructor(renderer: RenderLayerParent<S, M>, modelSet: EntityModelSet, playerSkinRenderCache: PlayerSkinRenderCache)
    constructor(renderer: RenderLayerParent<S, M>, modelSet: EntityModelSet, playerSkinRenderCache: PlayerSkinRenderCache, transforms: CustomHeadLayer$Transforms)
    // private playerSkinRenderCache: PlayerSkinRenderCache;
    // private skullModels: (param0: SkullBlock$Type) => SkullModelBase;
    // private transforms: CustomHeadLayer$Transforms;
    // private resolveSkullRenderType(state: LivingEntityRenderState, type: SkullBlock$Type): RenderType;
    submit(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, state: S, yRot: number, xRot: number): void;
}