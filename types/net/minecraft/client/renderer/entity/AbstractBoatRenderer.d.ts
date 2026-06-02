import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { EntityModel } from '../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { EntityRenderer } from '../../../../../net/minecraft/client/renderer/entity/EntityRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { BoatRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/BoatRenderState.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { AbstractBoat } from '../../../../../net/minecraft/world/entity/vehicle/boat/AbstractBoat.d.ts'
export abstract class AbstractBoatRenderer extends EntityRenderer<AbstractBoat, BoatRenderState> {
    static NAMETAG_SCALE: number;
    constructor(context: EntityRendererProvider$Context, texture: Identifier)
    // private texture: Identifier;
    createRenderState(): BoatRenderState;
    extractRenderState(entity: AbstractBoat, state: BoatRenderState, partialTicks: number): void;
    model(): EntityModel<BoatRenderState>;
    submit(state: BoatRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
    submitTypeAdditions(state: BoatRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number): void;
}