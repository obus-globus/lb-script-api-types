import type { PoseStack } from '../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { ParrotModel } from '../../../../../../net/minecraft/client/model/animal/parrot/ParrotModel.d.ts'
import type { EntityModelSet } from '../../../../../../net/minecraft/client/model/geom/EntityModelSet.d.ts'
import type { PlayerModel } from '../../../../../../net/minecraft/client/model/player/PlayerModel.d.ts'
import type { SubmitNodeCollector } from '../../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { RenderLayerParent } from '../../../../../../net/minecraft/client/renderer/entity/RenderLayerParent.d.ts'
import type { RenderLayer } from '../../../../../../net/minecraft/client/renderer/entity/layers/RenderLayer.d.ts'
import type { AvatarRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/AvatarRenderState.d.ts'
import type { Parrot$Variant } from '../../../../../../net/minecraft/world/entity/animal/parrot/Parrot$Variant.d.ts'
export class ParrotOnShoulderLayer extends RenderLayer<AvatarRenderState, PlayerModel> {
    constructor(renderer: RenderLayerParent<AvatarRenderState, PlayerModel>, modelSet: EntityModelSet)
    // private model: ParrotModel;
    submit(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, state: AvatarRenderState, yRot: number, xRot: number): void;
    // private submitOnShoulder(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, playerState: AvatarRenderState, parrotVariant: Parrot$Variant, yRot: number, xRot: number, isLeft: boolean): void;
}