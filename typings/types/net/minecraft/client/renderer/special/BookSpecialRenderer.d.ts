import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BookModel } from '../../../../../net/minecraft/client/model/object/book/BookModel.d.ts'
import type { BookModel$State } from '../../../../../net/minecraft/client/model/object/book/BookModel$State.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { NoDataSpecialModelRenderer } from '../../../../../net/minecraft/client/renderer/special/NoDataSpecialModelRenderer.d.ts'
import type { SpriteGetter } from '../../../../../net/minecraft/client/resources/model/sprite/SpriteGetter.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Vector3fc } from '../../../../../org/joml/Vector3fc.d.ts'
export class BookSpecialRenderer extends Object implements NoDataSpecialModelRenderer {
    constructor(sprites: SpriteGetter, model: BookModel, state: BookModel$State)
    // private model: BookModel;
    // private sprites: SpriteGetter;
    // private state: BookModel$State;
    extractArgument(stack: ItemStack): void;
    getExtents(output: (param0: Vector3fc) => void): void;
    submit(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, overlayCoords: number, hasFoil: boolean, outlineColor: number): void;
    submit(argument: void, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, overlayCoords: number, hasFoil: boolean, outlineColor: number): void;
    submit(argument: void, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, overlayCoords: number, hasFoil: boolean, outlineColor: number): void;
}