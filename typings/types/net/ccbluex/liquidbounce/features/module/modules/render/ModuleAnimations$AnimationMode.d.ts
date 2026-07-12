import type { PoseStack } from '../../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Mode } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { HumanoidArm } from '../../../../../../../net/minecraft/world/entity/HumanoidArm.d.ts'
/**
 * A choice that aims to transform the held item transformation during the swing progress.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleAnimations.kt#L119 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleAnimations.kt:119}
 */
export abstract class ModuleAnimations$AnimationMode extends Mode {
    static Companion: Tagged$Companion;
    constructor(name: string)
    readonly parent: ModeValueGroup<any>;
    protected applySwingOffset(matrices: PoseStack, arm: HumanoidArm, swingProgress: number): void;
    transform(matrices: PoseStack, arm: HumanoidArm, equipProgress: number, swingProgress: number): void;
}