import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ChestModel } from '../../../../../net/minecraft/client/model/object/chest/ChestModel.d.ts'
import type { MultiblockChestResources } from '../../../../../net/minecraft/client/renderer/MultiblockChestResources.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { NoDataSpecialModelRenderer } from '../../../../../net/minecraft/client/renderer/special/NoDataSpecialModelRenderer.d.ts'
import type { SpriteGetter } from '../../../../../net/minecraft/client/resources/model/sprite/SpriteGetter.d.ts'
import type { SpriteId } from '../../../../../net/minecraft/client/resources/model/sprite/SpriteId.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Vector3fc } from '../../../../../org/joml/Vector3fc.d.ts'
export class ChestSpecialRenderer extends Object implements NoDataSpecialModelRenderer {
    static CHRISTMAS: MultiblockChestResources<Identifier>;
    static COPPER_EXPOSED: MultiblockChestResources<Identifier>;
    static COPPER_OXIDIZED: MultiblockChestResources<Identifier>;
    static COPPER_UNAFFECTED: MultiblockChestResources<Identifier>;
    static COPPER_WEATHERED: MultiblockChestResources<Identifier>;
    static ENDER_CHEST: Identifier;
    static REGULAR: MultiblockChestResources<Identifier>;
    static TRAPPED: MultiblockChestResources<Identifier>;
    constructor(sprites: SpriteGetter, model: ChestModel, sprite: SpriteId, openness: number)
    // private model: ChestModel;
    // private openness: number;
    // private sprite: SpriteId;
    // private sprites: SpriteGetter;
    extractArgument(stack: ItemStack): void;
    getExtents(output: (param0: Vector3fc) => void): void;
    submit(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, overlayCoords: number, hasFoil: boolean, outlineColor: number): void;
    submit(argument: void, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, overlayCoords: number, hasFoil: boolean, outlineColor: number): void;
}