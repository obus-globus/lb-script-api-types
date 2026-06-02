import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Transformation } from '../../../../../com/mojang/math/Transformation.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TridentModel } from '../../../../../net/minecraft/client/model/object/projectile/TridentModel.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { NoDataSpecialModelRenderer } from '../../../../../net/minecraft/client/renderer/special/NoDataSpecialModelRenderer.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Vector3fc } from '../../../../../org/joml/Vector3fc.d.ts'
export class TridentSpecialRenderer extends Object implements NoDataSpecialModelRenderer {
    static DEFAULT_TRANSFORMATION: Transformation;
    constructor(model: TridentModel)
    // private model: TridentModel;
    extractArgument(stack: ItemStack): void;
    getExtents(output: (param0: Vector3fc) => void): void;
    submit(argument: void, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, overlayCoords: number, hasFoil: boolean, outlineColor: number): void;
    submit(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, overlayCoords: number, hasFoil: boolean, outlineColor: number): void;
}