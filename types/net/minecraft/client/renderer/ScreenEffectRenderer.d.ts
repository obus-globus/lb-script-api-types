import type { PoseStack } from '../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../net/minecraft/client/Minecraft.d.ts'
import type { MultiBufferSource } from '../../../../net/minecraft/client/renderer/MultiBufferSource.d.ts'
import type { SubmitNodeCollector } from '../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { SpriteGetter } from '../../../../net/minecraft/client/resources/model/sprite/SpriteGetter.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
export class ScreenEffectRenderer extends Object {
    static ITEM_ACTIVATION_ANIMATION_LENGTH: number;
    constructor(minecraft: Minecraft, sprites: SpriteGetter, bufferSource: MultiBufferSource)
    // private bufferSource: MultiBufferSource;
    // private itemActivationItem: ItemStack;
    // private itemActivationOffX: number;
    // private itemActivationOffY: number;
    // private itemActivationTicks: number;
    // private minecraft: Minecraft;
    // private sprites: SpriteGetter;
    displayItemActivation(itemStack: ItemStack, random: RandomSource): void;
    // private renderItemActivationAnimation(poseStack: PoseStack, partialTicks: number, submitNodeCollector: SubmitNodeCollector): void;
    renderScreenEffect(isFirstPerson: boolean, isSleeping: boolean, partialTicks: number, submitNodeCollector: SubmitNodeCollector, hideGui: boolean): void;
    resetItemActivation(): void;
    tick(): void;
}