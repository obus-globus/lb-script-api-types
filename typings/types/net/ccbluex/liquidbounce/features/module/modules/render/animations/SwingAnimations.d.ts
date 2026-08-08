import type { PoseStack } from '../../../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { ToggleableValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { SwingAnimations$Mode } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/animations/SwingAnimations$Mode.d.ts'
import type { AbstractClientPlayer } from '../../../../../../../../net/minecraft/client/player/AbstractClientPlayer.d.ts'
import type { InteractionHand } from '../../../../../../../../net/minecraft/world/InteractionHand.d.ts'
import type { HumanoidArm } from '../../../../../../../../net/minecraft/world/entity/HumanoidArm.d.ts'
export class SwingAnimations extends ToggleableValueGroup {
    static INSTANCE: SwingAnimations;
    // private PI: number;
    readonly mode: SwingAnimations$Mode;
    // private applySwing(poseStack: PoseStack, swing: number, arm: HumanoidArm): void;
    // private applySwingOffset(poseStack: PoseStack, arm: HumanoidArm, swing: number): void;
    // private fSin(v: number): number;
    // private fSqrt(v: number): number;
    onRenderItem(player: AbstractClientPlayer, hand: InteractionHand, swingProgress: number, poseStack: PoseStack): void;
}