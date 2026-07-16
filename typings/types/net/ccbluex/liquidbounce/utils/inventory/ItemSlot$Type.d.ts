import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ItemSlot$Type extends Enum<ItemSlot$Type> {
    static ARMOR: ItemSlot$Type;
    static CONTAINER: ItemSlot$Type;
    static HOTBAR: ItemSlot$Type;
    static INVENTORY: ItemSlot$Type;
    static OFFHAND: ItemSlot$Type;
    static getEntries(): ItemSlot$Type[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ItemSlot$Type;
    static values(): ItemSlot$Type[];
    private constructor()
    name(): "HOTBAR" | "OFFHAND" | "ARMOR" | "INVENTORY" | "CONTAINER";
}