import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { AdultAndBabyModelPair } from '../../../../../net/minecraft/client/model/AdultAndBabyModelPair.d.ts'
import type { ChickenModel } from '../../../../../net/minecraft/client/model/animal/chicken/ChickenModel.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { MobRenderer } from '../../../../../net/minecraft/client/renderer/entity/MobRenderer.d.ts'
import type { ChickenRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/ChickenRenderState.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Chicken } from '../../../../../net/minecraft/world/entity/animal/chicken/Chicken.d.ts'
import type { ChickenVariant$ModelType } from '../../../../../net/minecraft/world/entity/animal/chicken/ChickenVariant$ModelType.d.ts'
export class ChickenRenderer extends MobRenderer<Chicken, ChickenRenderState, ChickenModel> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    // private models: Map<ChickenVariant$ModelType, AdultAndBabyModelPair<ChickenModel>>;
    createRenderState(): ChickenRenderState;
    createRenderState(entity: Chicken, partialTicks: number): ChickenRenderState;
    extractRenderState(entity: Chicken, state: ChickenRenderState, partialTicks: number): void;
    getTextureLocation(state: ChickenRenderState): Identifier;
    submit(state: ChickenRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
}