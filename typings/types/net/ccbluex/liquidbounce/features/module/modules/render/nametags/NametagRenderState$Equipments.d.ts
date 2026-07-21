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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e56f181853dc858654c9fc909afec417d274473d/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/nametags/NametagRenderState.kt#L85 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/nametags/NametagRenderState.kt:85}
     */
    equipment: EntityEquipment;
    /**
     * For entity using item.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e56f181853dc858654c9fc909afec417d274473d/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/nametags/NametagRenderState.kt#L90 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/nametags/NametagRenderState.kt:90}
     */
    highlightStackRef: ItemStack | null;
    /**
     * The order of equipment slots
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e56f181853dc858654c9fc909afec417d274473d/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/nametags/NametagRenderState.kt#L80 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/nametags/NametagRenderState.kt:80}
     */
    slotOrder: EquipmentSlot[];
    stacksView: ItemStack[];
    reset(): void;
    update(entity: Entity): void;
}