import type { PoseStack } from '../../../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { ModuleAnimations$AnimationMode } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/animations/ModuleAnimations$AnimationMode.d.ts'
import type { HumanoidArm } from '../../../../../../../../net/minecraft/world/entity/HumanoidArm.d.ts'
/**
 * Based on the {@link applySwingOffset} but with a different transformation
 * during swing progress to make it look like the {@link PushdownAnimation} from LiquidBounce Legacy.
 *
 * This animation is not the same as the original, but it is similar.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/177e1582d6f271ebe95911c43b6987f81dca51f8/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/animations/ModuleAnimations.kt#L174 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/animations/ModuleAnimations.kt:174}
 */
export class ModuleAnimations$PushdownAnimation extends ModuleAnimations$AnimationMode {
    static Companion: Tagged$Companion;
    static INSTANCE: ModuleAnimations$PushdownAnimation;
    transform(matrices: PoseStack, arm: HumanoidArm, equipProgress: number, swingProgress: number): void;
}