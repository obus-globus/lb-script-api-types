import type { PoseStack } from '../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Model } from '../../../../../../net/minecraft/client/model/Model.d.ts'
import type { PlayerModel } from '../../../../../../net/minecraft/client/model/player/PlayerModel.d.ts'
import type { SubmitNodeCollector } from '../../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { LivingEntityRenderer } from '../../../../../../net/minecraft/client/renderer/entity/LivingEntityRenderer.d.ts'
import type { RenderLayer } from '../../../../../../net/minecraft/client/renderer/entity/layers/RenderLayer.d.ts'
import type { StuckInBodyLayer$PlacementStyle } from '../../../../../../net/minecraft/client/renderer/entity/layers/StuckInBodyLayer$PlacementStyle.d.ts'
import type { AvatarRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/AvatarRenderState.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export abstract class StuckInBodyLayer<M extends PlayerModel, S extends Object | number | string | boolean> extends RenderLayer<AvatarRenderState, M> {
    constructor(renderer: LivingEntityRenderer<Object, AvatarRenderState, M>, model: Model<S>, modelState: S, texture: Identifier, placementStyle: StuckInBodyLayer$PlacementStyle)
    // private model: Model<S>;
    // private modelState: S;
    // private placementStyle: StuckInBodyLayer$PlacementStyle;
    // private texture: Identifier;
    numStuck(state: AvatarRenderState): number;
    submit(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, state: AvatarRenderState, yRot: number, xRot: number): void;
    // private submitStuckItem(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, directionX: number, directionY: number, directionZ: number, outlineColor: number): void;
}