import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class InventoryLeftTabIndex extends Enum<InventoryLeftTabIndex> {
    static None: InventoryLeftTabIndex;
    static RecipeConstruction: InventoryLeftTabIndex;
    static RecipeEquipment: InventoryLeftTabIndex;
    static RecipeItems: InventoryLeftTabIndex;
    static RecipeNature: InventoryLeftTabIndex;
    static RecipeSearch: InventoryLeftTabIndex;
    static Survival: InventoryLeftTabIndex;
    static getByName(paramarg0: string): InventoryLeftTabIndex;
    static getByName(paramarg0: string, paramarg1: InventoryLeftTabIndex): InventoryLeftTabIndex;
    static getByValue(paramarg0: number): InventoryLeftTabIndex;
    static getByValue(paramarg0: number, paramarg1: InventoryLeftTabIndex): InventoryLeftTabIndex;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): InventoryLeftTabIndex;
    static values(): InventoryLeftTabIndex[];
    private constructor(arg2: number)
    private constructor(arg2: InventoryLeftTabIndex)
    readonly value: number;
    getValue(): number;
    name(): "None" | "RecipeConstruction" | "RecipeEquipment" | "RecipeItems" | "RecipeNature" | "RecipeSearch" | "Survival";
}