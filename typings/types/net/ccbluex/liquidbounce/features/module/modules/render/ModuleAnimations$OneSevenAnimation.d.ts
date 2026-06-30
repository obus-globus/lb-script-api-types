import type { PoseStack } from '../../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { ModuleAnimations$AnimationMode } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleAnimations$AnimationMode.d.ts'
import type { HumanoidArm } from '../../../../../../../net/minecraft/world/entity/HumanoidArm.d.ts'
/**
 * This animation is based on the 1.7 animation. It is the closest to the original animation
 * if not altered by the user.
 *
 * This animation is used in the ViaFabricPlus project.
 * https://github.com/ViaVersion/ViaFabricPlus/blob/9eb2adf6265cf0ac9d2a17921791642f2b0cdd2c/src/main/java/de/florianmichael/viafabricplus/injection/mixin/fixes/minecraft/item/MixinHeldItemRenderer.java#L50-L60
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/553a3caf47807e98e69ea3ce0e17bcd9e52eeb71/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleAnimations.kt#L145 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleAnimations.kt:145}
 */
export class ModuleAnimations$OneSevenAnimation extends ModuleAnimations$AnimationMode {
    static Companion: Tagged$Companion;
    static INSTANCE: ModuleAnimations$OneSevenAnimation;
    // private swingProgressScale: number;
    // private /*not mapped: */ getSwingProgressScale(): number;
    // private translateY: number;
    // private /*not mapped: */ getTranslateY(): number;
    transform(matrices: PoseStack, arm: HumanoidArm, equipProgress: number, swingProgress: number): void;
}