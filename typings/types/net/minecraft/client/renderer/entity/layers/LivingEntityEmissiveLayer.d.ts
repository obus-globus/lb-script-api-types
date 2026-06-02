import type { PoseStack } from '../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { EntityModel } from '../../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { SubmitNodeCollector } from '../../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { RenderLayerParent } from '../../../../../../net/minecraft/client/renderer/entity/RenderLayerParent.d.ts'
import type { LivingEntityEmissiveLayer$AlphaFunction } from '../../../../../../net/minecraft/client/renderer/entity/layers/LivingEntityEmissiveLayer$AlphaFunction.d.ts'
import type { RenderLayer } from '../../../../../../net/minecraft/client/renderer/entity/layers/RenderLayer.d.ts'
import type { LivingEntityRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { RenderType } from '../../../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class LivingEntityEmissiveLayer<S extends LivingEntityRenderState, M extends EntityModel<S>> extends RenderLayer<S, M> {
    constructor(renderer: RenderLayerParent<S, M>, textureProvider: (param0: S) => Identifier, alphaFunction: LivingEntityEmissiveLayer$AlphaFunction<S>, model: M, bufferProvider: (param0: Identifier) => RenderType, alwaysVisible: boolean)
    // private alphaFunction: LivingEntityEmissiveLayer$AlphaFunction<S>;
    // private alwaysVisible: boolean;
    // private bufferProvider: (param0: Identifier) => RenderType;
    // private model: M;
    // private textureProvider: (param0: S) => Identifier;
    submit(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, state: S, yRot: number, xRot: number): void;
}