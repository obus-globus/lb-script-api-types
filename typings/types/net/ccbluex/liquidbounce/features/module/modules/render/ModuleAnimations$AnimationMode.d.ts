import type { PoseStack } from '../../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Mode } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { HumanoidArm } from '../../../../../../../net/minecraft/world/entity/HumanoidArm.d.ts'
/**
 * A choice that aims to transform the held item transformation during the swing progress.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/c86714198f6c981b97c9965ca188b8b8598816e4/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleAnimations.kt#L119 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleAnimations.kt:119}
 */
export abstract class ModuleAnimations$AnimationMode extends Mode {
    static Companion: Tagged$Companion;
    constructor(name: string)
    readonly parent: ModeValueGroup<any>;
    getParent(): ModeValueGroup<any>;
    protected applySwingOffset(matrices: PoseStack, arm: HumanoidArm, swingProgress: number): void;
    transform(matrices: PoseStack, arm: HumanoidArm, equipProgress: number, swingProgress: number): void;
}