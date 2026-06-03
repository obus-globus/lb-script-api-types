import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { EndCrystalModel } from '../../../../../net/minecraft/client/model/object/crystal/EndCrystalModel.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { Frustum } from '../../../../../net/minecraft/client/renderer/culling/Frustum.d.ts'
import type { EntityRenderer } from '../../../../../net/minecraft/client/renderer/entity/EntityRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { EndCrystalRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/EndCrystalRenderState.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { EndCrystal } from '../../../../../net/minecraft/world/entity/boss/enderdragon/EndCrystal.d.ts'
export class EndCrystalRenderer extends EntityRenderer<EndCrystal, EndCrystalRenderState> {
    static NAMETAG_SCALE: number;
    static getY(paramtimeInTicks: number): number;
    constructor(context: EntityRendererProvider$Context)
    // private model: EndCrystalModel;
    createRenderState(): EndCrystalRenderState;
    createRenderState(entity: EndCrystal, partialTicks: number): EndCrystalRenderState;
    extractRenderState(entity: EndCrystal, state: EndCrystalRenderState, partialTicks: number): void;
    shouldRender(entity: EndCrystal, culler: Frustum, camX: number, camY: number, camZ: number): boolean;
    submit(state: EndCrystalRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
}