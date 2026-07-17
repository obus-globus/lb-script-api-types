import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { AdultAndBabyModelPair } from '../../../../../net/minecraft/client/model/AdultAndBabyModelPair.d.ts'
import type { CowModel } from '../../../../../net/minecraft/client/model/animal/cow/CowModel.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { MobRenderer } from '../../../../../net/minecraft/client/renderer/entity/MobRenderer.d.ts'
import type { CowRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/CowRenderState.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Cow } from '../../../../../net/minecraft/world/entity/animal/cow/Cow.d.ts'
import type { CowVariant$ModelType } from '../../../../../net/minecraft/world/entity/animal/cow/CowVariant$ModelType.d.ts'
export class CowRenderer extends MobRenderer<Cow, CowRenderState, CowModel> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    // private models: JavaMap<CowVariant$ModelType, AdultAndBabyModelPair<CowModel>>;
    createRenderState(): CowRenderState;
    createRenderState(entity: Cow, partialTicks: number): CowRenderState;
    extractRenderState(entity: Cow, state: CowRenderState, partialTicks: number): void;
    getTextureLocation(state: CowRenderState): Identifier;
    submit(state: CowRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
}