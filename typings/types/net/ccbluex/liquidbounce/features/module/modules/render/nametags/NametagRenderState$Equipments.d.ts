import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Entity } from '../../../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntityEquipment } from '../../../../../../../../net/minecraft/world/entity/EntityEquipment.d.ts'
import type { EquipmentSlot } from '../../../../../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
import type { ItemStack } from '../../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class NametagRenderState$Equipments extends Object {
    constructor()
    /**
     * The items that should be rendered above the name tag
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/nametags/NametagRenderState.kt#L82 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/nametags/NametagRenderState.kt:82}
     */
    equipment: EntityEquipment;
    /**
     * For entity using item.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/nametags/NametagRenderState.kt#L87 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/nametags/NametagRenderState.kt:87}
     */
    highlightStackRef: ItemStack | null;
    /**
     * The order of equipment slots
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/nametags/NametagRenderState.kt#L77 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/nametags/NametagRenderState.kt:77}
     */
    slotOrder: EquipmentSlot[];
    stacksView: ItemStack[];
    reset(): void;
    update(entity: Entity): void;
}