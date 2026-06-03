import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { BedRenderer } from '../../../../../net/minecraft/client/renderer/blockentity/BedRenderer.d.ts'
import type { NoDataSpecialModelRenderer } from '../../../../../net/minecraft/client/renderer/special/NoDataSpecialModelRenderer.d.ts'
import type { SpriteId } from '../../../../../net/minecraft/client/resources/model/sprite/SpriteId.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { BedPart } from '../../../../../net/minecraft/world/level/block/state/properties/BedPart.d.ts'
import type { Vector3fc } from '../../../../../org/joml/Vector3fc.d.ts'
export class BedSpecialRenderer extends Object implements NoDataSpecialModelRenderer {
    constructor(bedRenderer: BedRenderer, sprite: SpriteId, part: BedPart)
    // private bedRenderer: BedRenderer;
    // private part: BedPart;
    // private sprite: SpriteId;
    extractArgument(stack: ItemStack): void;
    getExtents(output: (param0: Vector3fc) => void): void;
    submit(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, overlayCoords: number, hasFoil: boolean, outlineColor: number): void;
    submit(argument: void, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, overlayCoords: number, hasFoil: boolean, outlineColor: number): void;
    submit(argument: void, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, overlayCoords: number, hasFoil: boolean, outlineColor: number): void;
}