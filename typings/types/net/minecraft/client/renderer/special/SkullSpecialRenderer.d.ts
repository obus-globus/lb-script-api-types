import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SkullModelBase } from '../../../../../net/minecraft/client/model/object/skull/SkullModelBase.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { RenderType } from '../../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
import type { NoDataSpecialModelRenderer } from '../../../../../net/minecraft/client/renderer/special/NoDataSpecialModelRenderer.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Vector3fc } from '../../../../../org/joml/Vector3fc.d.ts'
export class SkullSpecialRenderer extends Object implements NoDataSpecialModelRenderer {
    constructor(model: SkullModelBase, animation: number, renderType: RenderType)
    // private animation: number;
    // private model: SkullModelBase;
    // private renderType: RenderType;
    extractArgument(stack: ItemStack): void;
    getExtents(output: (param0: Vector3fc) => void): void;
    submit(argument: void, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, overlayCoords: number, hasFoil: boolean, outlineColor: number): void;
    submit(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, overlayCoords: number, hasFoil: boolean, outlineColor: number): void;
}