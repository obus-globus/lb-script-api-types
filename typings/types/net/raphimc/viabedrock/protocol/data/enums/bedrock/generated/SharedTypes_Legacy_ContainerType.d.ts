import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class SharedTypes_Legacy_ContainerType extends Enum<SharedTypes_Legacy_ContainerType> {
    static ANVIL: SharedTypes_Legacy_ContainerType;
    static ARMOR: SharedTypes_Legacy_ContainerType;
    static BEACON: SharedTypes_Legacy_ContainerType;
    static BLAST_FURNACE: SharedTypes_Legacy_ContainerType;
    static BREWING_STAND: SharedTypes_Legacy_ContainerType;
    static CARTOGRAPHY: SharedTypes_Legacy_ContainerType;
    static CAULDRON: SharedTypes_Legacy_ContainerType;
    static CHEST_BOAT: SharedTypes_Legacy_ContainerType;
    static COMMAND_BLOCK: SharedTypes_Legacy_ContainerType;
    static COMPOUND_CREATOR: SharedTypes_Legacy_ContainerType;
    static CONTAINER: SharedTypes_Legacy_ContainerType;
    static CRAFTER: SharedTypes_Legacy_ContainerType;
    static DECORATED_POT: SharedTypes_Legacy_ContainerType;
    static DISPENSER: SharedTypes_Legacy_ContainerType;
    static DROPPER: SharedTypes_Legacy_ContainerType;
    static ELEMENT_CONSTRUCTOR: SharedTypes_Legacy_ContainerType;
    static ENCHANTMENT: SharedTypes_Legacy_ContainerType;
    static FURNACE: SharedTypes_Legacy_ContainerType;
    static GRINDSTONE: SharedTypes_Legacy_ContainerType;
    static HAND: SharedTypes_Legacy_ContainerType;
    static HOPPER: SharedTypes_Legacy_ContainerType;
    static HORSE: SharedTypes_Legacy_ContainerType;
    static HUD: SharedTypes_Legacy_ContainerType;
    static INVENTORY: SharedTypes_Legacy_ContainerType;
    static JIGSAW_EDITOR: SharedTypes_Legacy_ContainerType;
    static JUKEBOX: SharedTypes_Legacy_ContainerType;
    static LAB_TABLE: SharedTypes_Legacy_ContainerType;
    static LECTERN: SharedTypes_Legacy_ContainerType;
    static LOOM: SharedTypes_Legacy_ContainerType;
    static MATERIAL_REDUCER: SharedTypes_Legacy_ContainerType;
    static MINECART_CHEST: SharedTypes_Legacy_ContainerType;
    static MINECART_HOPPER: SharedTypes_Legacy_ContainerType;
    static NONE: SharedTypes_Legacy_ContainerType;
    static SMITHING_TABLE: SharedTypes_Legacy_ContainerType;
    static SMOKER: SharedTypes_Legacy_ContainerType;
    static STONECUTTER: SharedTypes_Legacy_ContainerType;
    static STRUCTURE_EDITOR: SharedTypes_Legacy_ContainerType;
    static TRADE: SharedTypes_Legacy_ContainerType;
    static WORKBENCH: SharedTypes_Legacy_ContainerType;
    static getByName(paramarg0: string): SharedTypes_Legacy_ContainerType;
    static getByName(paramarg0: string, paramarg1: SharedTypes_Legacy_ContainerType): SharedTypes_Legacy_ContainerType;
    static getByValue(paramarg0: number): SharedTypes_Legacy_ContainerType;
    static getByValue(paramarg0: number, paramarg1: SharedTypes_Legacy_ContainerType): SharedTypes_Legacy_ContainerType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): SharedTypes_Legacy_ContainerType;
    static values(): SharedTypes_Legacy_ContainerType[];
    private constructor(arg2: number)
    private constructor(arg2: SharedTypes_Legacy_ContainerType)
    readonly value: number;
    getValue(): number;
    name(): "NONE" | "INVENTORY" | "CONTAINER" | "WORKBENCH" | "FURNACE" | "ENCHANTMENT" | "BREWING_STAND" | "ANVIL" | "DISPENSER" | "DROPPER" | "HOPPER" | "CAULDRON" | "MINECART_CHEST" | "MINECART_HOPPER" | "HORSE" | "BEACON" | "STRUCTURE_EDITOR" | "TRADE" | "COMMAND_BLOCK" | "JUKEBOX" | "ARMOR" | "HAND" | "COMPOUND_CREATOR" | "ELEMENT_CONSTRUCTOR" | "MATERIAL_REDUCER" | "LAB_TABLE" | "LOOM" | "LECTERN" | "GRINDSTONE" | "BLAST_FURNACE" | "SMOKER" | "STONECUTTER" | "CARTOGRAPHY" | "HUD" | "JIGSAW_EDITOR" | "SMITHING_TABLE" | "CHEST_BOAT" | "DECORATED_POT" | "CRAFTER";
}