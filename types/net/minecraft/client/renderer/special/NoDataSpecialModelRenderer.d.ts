import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { SpecialModelRenderer } from '../../../../../net/minecraft/client/renderer/special/SpecialModelRenderer.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export interface NoDataSpecialModelRenderer extends Object, SpecialModelRenderer<void>{
    extractArgument(stack: ItemStack): void;
    submit(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, overlayCoords: number, hasFoil: boolean, outlineColor: number): void;
    submit(argument: void, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, overlayCoords: number, hasFoil: boolean, outlineColor: number): void;
}