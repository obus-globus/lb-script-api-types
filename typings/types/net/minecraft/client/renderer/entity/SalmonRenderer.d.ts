import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { SalmonModel } from '../../../../../net/minecraft/client/model/animal/fish/SalmonModel.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { MobRenderer } from '../../../../../net/minecraft/client/renderer/entity/MobRenderer.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { SalmonRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/SalmonRenderState.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Salmon } from '../../../../../net/minecraft/world/entity/animal/fish/Salmon.d.ts'
export class SalmonRenderer extends MobRenderer<Salmon, SalmonRenderState, SalmonModel> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    // private largeSalmonModel: SalmonModel;
    // private mediumSalmonModel: SalmonModel;
    // private smallSalmonModel: SalmonModel;
    createRenderState(): SalmonRenderState;
    createRenderState(entity: Salmon, partialTicks: number): SalmonRenderState;
    extractRenderState(entity: Salmon, state: SalmonRenderState, partialTicks: number): void;
    getTextureLocation(state: SalmonRenderState): Identifier;
    setupRotations(state: SalmonRenderState, poseStack: PoseStack, bodyRot: number, entityScale: number): void;
    submit(state: SalmonRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
}