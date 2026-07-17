import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class Inventory {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static DEFAULT_DISTANCE_BUFFER: number;
    static EQUIPMENT_SLOT_MAPPING: JavaMap<any, any>;
    static INVENTORY_SIZE: number;
    static NOT_FOUND_INDEX: number;
    static POP_TIME_DURATION: number;
    static SELECTION_SIZE: number;
    static SLOT_BODY_ARMOR: number;
    static SLOT_OFFHAND: number;
    static SLOT_SADDLE: number;
    static getSelectionSize(): number;
    static isHotbarSlot(paramslot: number): boolean;
    static isUsableForCrafting(paramitem: ItemStack): boolean;
}