import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { ArmorItemSlot$Companion } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/ArmorItemSlot$Companion.d.ts'
import type { ItemSlot } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot.d.ts'
import type { ItemSlot$Companion } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot$Companion.d.ts'
import type { ItemSlot$Type } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot$Type.d.ts'
import type { AbstractContainerScreen } from '../../../../../net/minecraft/client/gui/screens/inventory/AbstractContainerScreen.d.ts'
import type { EquipmentSlot } from '../../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class ArmorItemSlot extends Enum<ArmorItemSlot> implements ItemSlot {
    static CHEST: ArmorItemSlot;
    static Companion: ArmorItemSlot$Companion;
    static Companion: ItemSlot$Companion;
    static FEET: ArmorItemSlot;
    static HEAD: ArmorItemSlot;
    static LEGS: ArmorItemSlot;
    static PREFER_FEWER_ITEM: (param0: Object) => boolean;
    static PREFER_MORE_ITEM: (param0: Object) => boolean;
    static PREFER_NEARBY: (param0: Object) => boolean;
    static getEntries(): ArmorItemSlot[];
    static of(paramarg0: EquipmentSlot): ArmorItemSlot;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ArmorItemSlot;
    static values(): (Object | null)[];
    private constructor(equipmentSlot: EquipmentSlot)
    equipmentSlot: EquipmentSlot;
    readonly itemStack: ItemStack;
    readonly slotType: ItemSlot$Type;
    getIdForServer(screen: AbstractContainerScreen<Object> | null): number | null;
    getIdForServerWithCurrentScreen(): number | null;
    name(): "FEET" | "LEGS" | "CHEST" | "HEAD";
}