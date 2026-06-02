import type { PoseStack } from '../../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ArmorRenderer } from '../../../../../../../net/fabricmc/fabric/api/client/rendering/v1/ArmorRenderer.d.ts'
import type { HumanoidModel } from '../../../../../../../net/minecraft/client/model/HumanoidModel.d.ts'
import type { SubmitNodeCollector } from '../../../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { HumanoidRenderState } from '../../../../../../../net/minecraft/client/renderer/entity/state/HumanoidRenderState.d.ts'
import type { EquipmentSlot } from '../../../../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export interface ArmorRenderer$Factory extends Object{
    createArmorRenderer(arg0: EntityRendererProvider$Context): (param0: PoseStack, param1: SubmitNodeCollector, param2: ItemStack, param3: HumanoidRenderState, param4: EquipmentSlot, param5: number, param6: HumanoidModel<HumanoidRenderState>) => void;
}