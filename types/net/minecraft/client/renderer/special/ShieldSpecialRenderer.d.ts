import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Transformation } from '../../../../../com/mojang/math/Transformation.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ShieldModel } from '../../../../../net/minecraft/client/model/object/equipment/ShieldModel.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { SpecialModelRenderer } from '../../../../../net/minecraft/client/renderer/special/SpecialModelRenderer.d.ts'
import type { SpriteGetter } from '../../../../../net/minecraft/client/resources/model/sprite/SpriteGetter.d.ts'
import type { TypedDataComponent } from '../../../../../net/minecraft/core/component/TypedDataComponent.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Vector3fc } from '../../../../../org/joml/Vector3fc.d.ts'
export class ShieldSpecialRenderer extends Object implements SpecialModelRenderer<TypedDataComponent<Object>[]> {
    static DEFAULT_TRANSFORMATION: Transformation;
    constructor(sprites: SpriteGetter, model: ShieldModel)
    // private model: ShieldModel;
    // private sprites: SpriteGetter;
    extractArgument(stack: ItemStack): TypedDataComponent<Object>[];
    getExtents(output: (param0: Vector3fc) => void): void;
    submit(components: TypedDataComponent<Object>[], poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, overlayCoords: number, hasFoil: boolean, outlineColor: number): void;
}