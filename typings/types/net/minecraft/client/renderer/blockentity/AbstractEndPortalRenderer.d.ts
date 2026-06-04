import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { PoseStack$Pose } from '../../../../../com/mojang/blaze3d/vertex/PoseStack$Pose.d.ts'
import type { VertexConsumer } from '../../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { BlockEntityRenderer } from '../../../../../net/minecraft/client/renderer/blockentity/BlockEntityRenderer.d.ts'
import type { EndPortalRenderState } from '../../../../../net/minecraft/client/renderer/blockentity/state/EndPortalRenderState.d.ts'
import type { ModelFeatureRenderer$CrumblingOverlay } from '../../../../../net/minecraft/client/renderer/feature/ModelFeatureRenderer$CrumblingOverlay.d.ts'
import type { RenderType } from '../../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { TheEndPortalBlockEntity } from '../../../../../net/minecraft/world/level/block/entity/TheEndPortalBlockEntity.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { Matrix3f } from '../../../../../org/joml/Matrix3f.d.ts'
import type { Vector3fc } from '../../../../../org/joml/Vector3fc.d.ts'
export abstract class AbstractEndPortalRenderer<T extends TheEndPortalBlockEntity, S extends EndPortalRenderState> extends Object implements BlockEntityRenderer<T, S> {
    static END_PORTAL_LOCATION: Identifier;
    static END_SKY_LOCATION: Identifier;
    static getExtents(paramoutput: (param0: Vector3fc) => void): void;
    static submitSpecial(paramrenderType: RenderType, paramposeStack: PoseStack, paramsubmitNodeCollector: SubmitNodeCollector): void;
    constructor()
    extractRenderState(blockEntity: T, state: S, partialTicks: number, cameraPosition: Vec3, breakProgress: ModelFeatureRenderer$CrumblingOverlay): void;
    getViewDistance(): number;
    // private quad(arg0: EndPortalRenderState, arg1: VertexConsumer, arg2: PoseStack$Pose, arg3: Matrix3f, arg4: Direction, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: number, arg14: number, arg15: number, arg16: number, arg17: number, arg18: number, arg19: number): void;
    shouldRender(blockEntity: T, cameraPosition: Vec3): boolean;
    shouldRenderOffScreen(): boolean;
}