import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { AdultAndBabyModelPair } from '../../../../../net/minecraft/client/model/AdultAndBabyModelPair.d.ts'
import type { PigModel } from '../../../../../net/minecraft/client/model/animal/pig/PigModel.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { MobRenderer } from '../../../../../net/minecraft/client/renderer/entity/MobRenderer.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { PigRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/PigRenderState.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Pig } from '../../../../../net/minecraft/world/entity/animal/pig/Pig.d.ts'
import type { PigVariant$ModelType } from '../../../../../net/minecraft/world/entity/animal/pig/PigVariant$ModelType.d.ts'
export class PigRenderer extends MobRenderer<Pig, PigRenderState, PigModel> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    // private models: JavaMap<PigVariant$ModelType, AdultAndBabyModelPair<PigModel>>;
    createRenderState(): PigRenderState;
    createRenderState(entity: Pig, partialTicks: number): PigRenderState;
    extractRenderState(entity: Pig, state: PigRenderState, partialTicks: number): void;
    getTextureLocation(state: PigRenderState): Identifier;
    submit(state: PigRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
}