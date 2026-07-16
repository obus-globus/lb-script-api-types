import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class MinecraftEventing_POIBlockInteractionType extends Enum<MinecraftEventing_POIBlockInteractionType> {
    static AddDye: MinecraftEventing_POIBlockInteractionType;
    static BookOpened: MinecraftEventing_POIBlockInteractionType;
    static BookPlaced: MinecraftEventing_POIBlockInteractionType;
    static ClearItem: MinecraftEventing_POIBlockInteractionType;
    static Clone: MinecraftEventing_POIBlockInteractionType;
    static CompostItemPlaced: MinecraftEventing_POIBlockInteractionType;
    static Cooking: MinecraftEventing_POIBlockInteractionType;
    static Create: MinecraftEventing_POIBlockInteractionType;
    static CreateLocator: MinecraftEventing_POIBlockInteractionType;
    static Disenchant: MinecraftEventing_POIBlockInteractionType;
    static DisenchantAndRepair: MinecraftEventing_POIBlockInteractionType;
    static Dousing: MinecraftEventing_POIBlockInteractionType;
    static DyeItem: MinecraftEventing_POIBlockInteractionType;
    static Emptied: MinecraftEventing_POIBlockInteractionType;
    static EnchantArrow: MinecraftEventing_POIBlockInteractionType;
    static Extend: MinecraftEventing_POIBlockInteractionType;
    static Filled: MinecraftEventing_POIBlockInteractionType;
    static Haystack: MinecraftEventing_POIBlockInteractionType;
    static ItemPlaced: MinecraftEventing_POIBlockInteractionType;
    static ItemRemoved: MinecraftEventing_POIBlockInteractionType;
    static Lighting: MinecraftEventing_POIBlockInteractionType;
    static Lock: MinecraftEventing_POIBlockInteractionType;
    static None: MinecraftEventing_POIBlockInteractionType;
    static RecoveredBonemeal: MinecraftEventing_POIBlockInteractionType;
    static Rename: MinecraftEventing_POIBlockInteractionType;
    static Repair: MinecraftEventing_POIBlockInteractionType;
    static getByName(paramarg0: string): MinecraftEventing_POIBlockInteractionType;
    static getByName(paramarg0: string, paramarg1: MinecraftEventing_POIBlockInteractionType): MinecraftEventing_POIBlockInteractionType;
    static getByValue(paramarg0: number): MinecraftEventing_POIBlockInteractionType;
    static getByValue(paramarg0: number, paramarg1: MinecraftEventing_POIBlockInteractionType): MinecraftEventing_POIBlockInteractionType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): MinecraftEventing_POIBlockInteractionType;
    static values(): MinecraftEventing_POIBlockInteractionType[];
    private constructor(arg2: number)
    private constructor(arg2: MinecraftEventing_POIBlockInteractionType)
    readonly value: number;
    getValue(): number;
    name(): "None" | "Extend" | "Clone" | "Lock" | "Create" | "CreateLocator" | "Rename" | "ItemPlaced" | "ItemRemoved" | "Cooking" | "Dousing" | "Lighting" | "Haystack" | "Filled" | "Emptied" | "AddDye" | "DyeItem" | "ClearItem" | "EnchantArrow" | "CompostItemPlaced" | "RecoveredBonemeal" | "BookPlaced" | "BookOpened" | "Disenchant" | "Repair" | "DisenchantAndRepair";
}