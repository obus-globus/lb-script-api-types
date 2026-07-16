import type { PoseStack } from '../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { ArmedEntityRenderState } from '../../../../net/minecraft/client/renderer/entity/state/ArmedEntityRenderState.d.ts'
import type { HumanoidArm } from '../../../../net/minecraft/world/entity/HumanoidArm.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
export class HumanoidModel$ArmPose extends Enum<HumanoidModel$ArmPose> {
    static BLOCK: HumanoidModel$ArmPose;
    static BOW_AND_ARROW: HumanoidModel$ArmPose;
    static BRUSH: HumanoidModel$ArmPose;
    static CROSSBOW_CHARGE: HumanoidModel$ArmPose;
    static CROSSBOW_HOLD: HumanoidModel$ArmPose;
    static EMPTY: HumanoidModel$ArmPose;
    static ITEM: HumanoidModel$ArmPose;
    static SPEAR: HumanoidModel$ArmPose;
    static SPYGLASS: HumanoidModel$ArmPose;
    static THROW_TRIDENT: HumanoidModel$ArmPose;
    static TOOT_HORN: HumanoidModel$ArmPose;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): HumanoidModel$ArmPose;
    static values(): HumanoidModel$ArmPose[];
    private constructor(twoHanded: boolean, affectsOffhandPose: boolean)
    // private affectsOffhandPose: boolean;
    readonly twoHanded: boolean;
    affectsOffhandPose(): boolean;
    animateUseItem<S extends ArmedEntityRenderState>(state: S, poseStack: PoseStack, ticksUsingItem: number, arm: HumanoidArm, actualItem: ItemStack): void;
    isTwoHanded(): boolean;
    name(): "EMPTY" | "ITEM" | "BLOCK" | "BOW_AND_ARROW" | "THROW_TRIDENT" | "CROSSBOW_CHARGE" | "CROSSBOW_HOLD" | "SPYGLASS" | "TOOT_HORN" | "BRUSH" | "SPEAR";
}