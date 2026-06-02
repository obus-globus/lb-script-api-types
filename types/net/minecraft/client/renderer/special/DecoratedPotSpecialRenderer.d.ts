import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { DecoratedPotRenderer } from '../../../../../net/minecraft/client/renderer/blockentity/DecoratedPotRenderer.d.ts'
import type { SpecialModelRenderer } from '../../../../../net/minecraft/client/renderer/special/SpecialModelRenderer.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { PotDecorations } from '../../../../../net/minecraft/world/level/block/entity/PotDecorations.d.ts'
import type { Vector3fc } from '../../../../../org/joml/Vector3fc.d.ts'
export class DecoratedPotSpecialRenderer extends Object implements SpecialModelRenderer<PotDecorations> {
    constructor(decoratedPotRenderer: DecoratedPotRenderer)
    // private decoratedPotRenderer: DecoratedPotRenderer;
    extractArgument(stack: ItemStack): PotDecorations;
    getExtents(output: (param0: Vector3fc) => void): void;
    submit(decorations: PotDecorations, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, overlayCoords: number, hasFoil: boolean, outlineColor: number): void;
}