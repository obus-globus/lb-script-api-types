import type { PoseStack } from '../../../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { ModuleAnimations$AnimationMode } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/animations/ModuleAnimations$AnimationMode.d.ts'
import type { HumanoidArm } from '../../../../../../../../net/minecraft/world/entity/HumanoidArm.d.ts'
export class ModuleAnimations$SigmaAnimation extends ModuleAnimations$AnimationMode {
    static Companion: Tagged$Companion;
    static INSTANCE: ModuleAnimations$SigmaAnimation;
    // private translateY: number;
    // private /*not mapped: */ getTranslateY(): number;
    transform(matrices: PoseStack, arm: HumanoidArm, equipProgress: number, swingProgress: number): void;
}