import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { AbstractEndPortalRenderer } from '../../../../../net/minecraft/client/renderer/blockentity/AbstractEndPortalRenderer.d.ts'
import type { EndGatewayRenderState } from '../../../../../net/minecraft/client/renderer/blockentity/state/EndGatewayRenderState.d.ts'
import type { ModelFeatureRenderer$CrumblingOverlay } from '../../../../../net/minecraft/client/renderer/feature/ModelFeatureRenderer$CrumblingOverlay.d.ts'
import type { RenderType } from '../../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { TheEndGatewayBlockEntity } from '../../../../../net/minecraft/world/level/block/entity/TheEndGatewayBlockEntity.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { Vector3fc } from '../../../../../org/joml/Vector3fc.d.ts'
export class TheEndGatewayRenderer extends AbstractEndPortalRenderer<TheEndGatewayBlockEntity, EndGatewayRenderState> {
    static END_PORTAL_LOCATION: Identifier;
    static END_SKY_LOCATION: Identifier;
    static getExtents(paramoutput: (param0: Vector3fc) => void): void;
    static submitSpecial(paramrenderType: RenderType, paramposeStack: PoseStack, paramsubmitNodeCollector: SubmitNodeCollector): void;
    constructor()
    createRenderState(): EndGatewayRenderState;
    extractRenderState(blockEntity: TheEndGatewayBlockEntity, state: EndGatewayRenderState, partialTicks: number, cameraPosition: Vec3, breakProgress: ModelFeatureRenderer$CrumblingOverlay): void;
    getViewDistance(): number;
    submit(state: EndGatewayRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
}