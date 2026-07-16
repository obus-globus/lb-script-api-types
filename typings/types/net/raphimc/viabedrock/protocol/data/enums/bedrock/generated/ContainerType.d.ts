import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class ContainerType extends Enum<ContainerType> {
    static ANVIL: ContainerType;
    static ARMOR: ContainerType;
    static BEACON: ContainerType;
    static BLAST_FURNACE: ContainerType;
    static BREWING_STAND: ContainerType;
    static CARTOGRAPHY: ContainerType;
    static CAULDRON: ContainerType;
    static CHEST_BOAT: ContainerType;
    static COMMAND_BLOCK: ContainerType;
    static COMPOUND_CREATOR: ContainerType;
    static CONTAINER: ContainerType;
    static CRAFTER: ContainerType;
    static DECORATED_POT: ContainerType;
    static DISPENSER: ContainerType;
    static DROPPER: ContainerType;
    static ELEMENT_CONSTRUCTOR: ContainerType;
    static ENCHANTMENT: ContainerType;
    static FURNACE: ContainerType;
    static GRINDSTONE: ContainerType;
    static HAND: ContainerType;
    static HOPPER: ContainerType;
    static HORSE: ContainerType;
    static HUD: ContainerType;
    static INVENTORY: ContainerType;
    static JIGSAW_EDITOR: ContainerType;
    static JUKEBOX: ContainerType;
    static LAB_TABLE: ContainerType;
    static LECTERN: ContainerType;
    static LOOM: ContainerType;
    static MATERIAL_REDUCER: ContainerType;
    static MINECART_CHEST: ContainerType;
    static MINECART_HOPPER: ContainerType;
    static NONE: ContainerType;
    static SMITHING_TABLE: ContainerType;
    static SMOKER: ContainerType;
    static STONECUTTER: ContainerType;
    static STRUCTURE_EDITOR: ContainerType;
    static TRADE: ContainerType;
    static WORKBENCH: ContainerType;
    static getByName(paramarg0: string): ContainerType;
    static getByName(paramarg0: string, paramarg1: ContainerType): ContainerType;
    static getByValue(paramarg0: number): ContainerType;
    static getByValue(paramarg0: number, paramarg1: ContainerType): ContainerType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ContainerType;
    static values(): ContainerType[];
    private constructor(arg2: number)
    private constructor(arg2: ContainerType)
    readonly value: number;
    getValue(): number;
    name(): "NONE" | "INVENTORY" | "CONTAINER" | "WORKBENCH" | "FURNACE" | "ENCHANTMENT" | "BREWING_STAND" | "ANVIL" | "DISPENSER" | "DROPPER" | "HOPPER" | "CAULDRON" | "MINECART_CHEST" | "MINECART_HOPPER" | "HORSE" | "BEACON" | "STRUCTURE_EDITOR" | "TRADE" | "COMMAND_BLOCK" | "JUKEBOX" | "ARMOR" | "HAND" | "COMPOUND_CREATOR" | "ELEMENT_CONSTRUCTOR" | "MATERIAL_REDUCER" | "LAB_TABLE" | "LOOM" | "LECTERN" | "GRINDSTONE" | "BLAST_FURNACE" | "SMOKER" | "STONECUTTER" | "CARTOGRAPHY" | "HUD" | "JIGSAW_EDITOR" | "SMITHING_TABLE" | "CHEST_BOAT" | "DECORATED_POT" | "CRAFTER";
}