import type { PoseStack } from '../../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { HumanoidModel } from '../../../../../../../net/minecraft/client/model/HumanoidModel.d.ts'
import type { SubmitNodeCollector } from '../../../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { HumanoidRenderState } from '../../../../../../../net/minecraft/client/renderer/entity/state/HumanoidRenderState.d.ts'
import type { EquipmentSlot } from '../../../../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
import type { LivingEntity } from '../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export interface ArmorRenderer extends Object{
    render(arg0: PoseStack, arg1: SubmitNodeCollector, arg2: ItemStack, arg3: HumanoidRenderState, arg4: EquipmentSlot, arg5: number, arg6: HumanoidModel<HumanoidRenderState>): void;
    shouldRenderDefaultHeadItem(arg0: LivingEntity, arg1: ItemStack): boolean;
}