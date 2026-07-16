import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { NautilusModel } from '../../../../../net/minecraft/client/model/animal/nautilus/NautilusModel.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { MobRenderer } from '../../../../../net/minecraft/client/renderer/entity/MobRenderer.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { NautilusRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/NautilusRenderState.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ZombieNautilus } from '../../../../../net/minecraft/world/entity/animal/nautilus/ZombieNautilus.d.ts'
import type { ZombieNautilusVariant$ModelType } from '../../../../../net/minecraft/world/entity/animal/nautilus/ZombieNautilusVariant$ModelType.d.ts'
export class ZombieNautilusRenderer extends MobRenderer<ZombieNautilus, NautilusRenderState, NautilusModel> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    // private models: Map<ZombieNautilusVariant$ModelType, NautilusModel>;
    createRenderState(): NautilusRenderState;
    createRenderState(entity: ZombieNautilus, partialTicks: number): NautilusRenderState;
    extractRenderState(entity: ZombieNautilus, state: NautilusRenderState, partialTicks: number): void;
    getTextureLocation(state: NautilusRenderState): Identifier;
    submit(state: NautilusRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
}