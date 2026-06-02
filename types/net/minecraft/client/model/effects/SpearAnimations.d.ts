import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { HumanoidModel } from '../../../../../net/minecraft/client/model/HumanoidModel.d.ts'
import type { ModelPart } from '../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { HumanoidArm } from '../../../../../net/minecraft/world/entity/HumanoidArm.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class SpearAnimations extends Object {
    static firstPersonAttack(paramattack: number, paramposeStack: PoseStack, paraminvert: number, paramarm: HumanoidArm): void;
    static firstPersonUse(paramticksSinceKineticHitFeedback: number, paramposeStack: PoseStack, paramtimeHeld: number, paramarm: HumanoidArm, paramitemStack: ItemStack): void;
    static thirdPersonAttackHand(parammodel: HumanoidModel<Object>, paramstate: Object | null): void;
    static thirdPersonAttackItem(paramstate: Object | null, paramposeStack: PoseStack): void;
    static thirdPersonHandUse(paramarm: ModelPart, paramhead: ModelPart, paramholdingInRightArm: boolean, paramitem: ItemStack, paramstate: Object | null): void;
    static thirdPersonUseItem(paramstate: Object | null, paramposeStack: PoseStack, paramtimeHeld: number, paramarm: HumanoidArm, paramactualItem: ItemStack): void;
    constructor()
}