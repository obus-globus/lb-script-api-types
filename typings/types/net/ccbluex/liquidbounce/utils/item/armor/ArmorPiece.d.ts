import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ItemSlot } from '../../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot.d.ts'
import type { EquipmentSlot } from '../../../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
/**
 * @see net.minecraft.world.item.equipment.ArmorMaterial.createAttributes
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/3bc82a3329f49d9150e48b299ce4a5e8571a038d/src/main/kotlin/net/ccbluex/liquidbounce/utils/item/armor/ArmorPiece.kt#L31 | src/main/kotlin/net/ccbluex/liquidbounce/utils/item/armor/ArmorPiece.kt:31}
 */
export class ArmorPiece extends Object {
// (invalid TS: name contains '-')     static box-impl(paramarg0: ItemSlot): ArmorPiece;
// (invalid TS: name contains '-')     static constructor-impl(paramarg0: ItemSlot): ItemSlot;
// (invalid TS: name contains '-')     static equals-impl(paramarg0: ItemSlot, paramarg1: Object): boolean;
// (invalid TS: name contains '-')     static equals-impl0(paramarg0: ItemSlot, paramarg1: ItemSlot): boolean;
// (invalid TS: name contains '-')     static getDefensePoints-impl(paramarg0: ItemSlot): number;
// (invalid TS: name contains '-')     static getEntitySlotId-impl(paramarg0: ItemSlot): number;
// (invalid TS: name contains '-')     static getInventorySlot-impl(paramarg0: ItemSlot): number;
// (invalid TS: name contains '-')     static getKnockbackResistance-impl(paramarg0: ItemSlot): number;
// (invalid TS: name contains '-')     static getSlotType-impl(paramarg0: ItemSlot): EquipmentSlot;
// (invalid TS: name contains '-')     static getToughness-impl(paramarg0: ItemSlot): number;
// (invalid TS: name contains '-')     static hashCode-impl(paramarg0: ItemSlot): number;
// (invalid TS: name contains '-')     static isAlreadyEquipped-impl(paramarg0: ItemSlot): boolean;
// (invalid TS: name contains '-')     static isReachableByHand-impl(paramarg0: ItemSlot): boolean;
// (invalid TS: name contains '-')     static toString-impl(paramarg0: ItemSlot): string;
    constructor(itemSlot: ItemSlot)
// (invalid TS: name contains '-')     /*not mapped: */ getDefensePoints-impl(): number;
// (invalid TS: name contains '-')     /*not mapped: */ getEntitySlotId-impl(): number;
// (invalid TS: name contains '-')     /*not mapped: */ getInventorySlot-impl(): number;
// (invalid TS: name contains '-')     /*not mapped: */ isAlreadyEquipped-impl(): boolean;
// (invalid TS: name contains '-')     /*not mapped: */ isReachableByHand-impl(): boolean;
    readonly itemSlot: ItemSlot;
// (invalid TS: name contains '-')     /*not mapped: */ getKnockbackResistance-impl(): number;
// (invalid TS: name contains '-')     /*not mapped: */ getSlotType-impl(): EquipmentSlot;
// (invalid TS: name contains '-')     /*not mapped: */ getToughness-impl(): number;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}