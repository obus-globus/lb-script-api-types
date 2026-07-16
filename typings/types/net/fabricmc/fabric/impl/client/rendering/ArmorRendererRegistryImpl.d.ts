import type { PoseStack } from '../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ArmorRenderer } from '../../../../../../net/fabricmc/fabric/api/client/rendering/v1/ArmorRenderer.d.ts'
import type { ArmorRenderer$Factory } from '../../../../../../net/fabricmc/fabric/api/client/rendering/v1/ArmorRenderer$Factory.d.ts'
import type { HumanoidModel } from '../../../../../../net/minecraft/client/model/HumanoidModel.d.ts'
import type { SubmitNodeCollector } from '../../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { HumanoidRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/HumanoidRenderState.d.ts'
import type { EquipmentSlot } from '../../../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
import type { Item } from '../../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { ItemLike } from '../../../../../../net/minecraft/world/level/ItemLike.d.ts'
export class ArmorRendererRegistryImpl extends Object {
    static createArmorRenderers(paramarg0: EntityRendererProvider$Context): void;
    static get(paramarg0: Item): (param0: PoseStack, param1: SubmitNodeCollector, param2: ItemStack, param3: HumanoidRenderState, param4: EquipmentSlot, param5: number, param6: HumanoidModel<HumanoidRenderState>) => void;
    static register(paramarg0: (param0: EntityRendererProvider$Context) => (param0: PoseStack, param1: SubmitNodeCollector, param2: ItemStack, param3: HumanoidRenderState, param4: EquipmentSlot, param5: number, param6: HumanoidModel<HumanoidRenderState>) => void, ...paramarg1: ItemLike[]): void;
    static register(paramarg0: (param0: PoseStack, param1: SubmitNodeCollector, param2: ItemStack, param3: HumanoidRenderState, param4: EquipmentSlot, param5: number, param6: HumanoidModel<HumanoidRenderState>) => void, ...paramarg1: ItemLike[]): void;
    constructor()
}