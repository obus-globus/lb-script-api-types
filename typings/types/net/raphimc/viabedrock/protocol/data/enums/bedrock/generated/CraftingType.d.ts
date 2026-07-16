import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class CraftingType extends Enum<CraftingType> {
    static Crafting: CraftingType;
    static Inventory: CraftingType;
    static getByName(paramarg0: string): CraftingType;
    static getByName(paramarg0: string, paramarg1: CraftingType): CraftingType;
    static getByValue(paramarg0: number): CraftingType;
    static getByValue(paramarg0: number, paramarg1: CraftingType): CraftingType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CraftingType;
    static values(): CraftingType[];
    private constructor(arg2: number)
    private constructor(arg2: CraftingType)
    readonly value: number;
    getValue(): number;
    name(): "Inventory" | "Crafting";
}