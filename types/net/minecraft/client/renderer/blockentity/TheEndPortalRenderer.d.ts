import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Transformation } from '../../../../../com/mojang/math/Transformation.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { AbstractEndPortalRenderer } from '../../../../../net/minecraft/client/renderer/blockentity/AbstractEndPortalRenderer.d.ts'
import type { EndPortalRenderState } from '../../../../../net/minecraft/client/renderer/blockentity/state/EndPortalRenderState.d.ts'
import type { RenderType } from '../../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { TheEndPortalBlockEntity } from '../../../../../net/minecraft/world/level/block/entity/TheEndPortalBlockEntity.d.ts'
import type { Vector3fc } from '../../../../../org/joml/Vector3fc.d.ts'
export class TheEndPortalRenderer extends AbstractEndPortalRenderer<TheEndPortalBlockEntity, EndPortalRenderState> {
    static END_PORTAL_LOCATION: Identifier;
    static END_SKY_LOCATION: Identifier;
    static TRANSFORMATION: Transformation;
    static getExtents(paramoutput: (param0: Vector3fc) => void): void;
    static submitSpecial(paramrenderType: RenderType, paramposeStack: PoseStack, paramsubmitNodeCollector: SubmitNodeCollector): void;
    constructor()
    createRenderState(): EndPortalRenderState;
    submit(state: EndPortalRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
}