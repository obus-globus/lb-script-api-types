import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { PoseStack } from '../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { VertexConsumer } from '../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FabricModel } from '../../../../net/fabricmc/fabric/api/client/rendering/v1/FabricModel.d.ts'
import type { ModelExtensions } from '../../../../net/fabricmc/fabric/impl/client/rendering/ModelExtensions.d.ts'
import type { ModelPart } from '../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { RenderType } from '../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export abstract class Model<S extends unknown> extends Object implements FabricModel<S>, ModelExtensions {
    constructor(root: ModelPart, renderType: (param0: Identifier) => RenderType)
    // private allParts: ModelPart[];
    // private childPartMap: JavaMap<Object | null, Object | null>;
    // private renderType: (param0: Identifier) => RenderType;
    // private root: ModelPart;
    allParts(): ModelPart[];
    copyTransforms(arg0: Model<Object>): void;
    fabric$calculateChildParts(arg0: ModelPart): void;
    getChildPart(arg0: string): ModelPart;
    renderToBuffer(poseStack: PoseStack, buffer: VertexConsumer, lightCoords: number, overlayCoords: number, color: number): void;
    renderType(): (param0: Identifier) => RenderType;
    renderType(texture: Identifier): RenderType;
    resetPose(): void;
    root(): ModelPart;
    setupAnim(state: S): void;
}