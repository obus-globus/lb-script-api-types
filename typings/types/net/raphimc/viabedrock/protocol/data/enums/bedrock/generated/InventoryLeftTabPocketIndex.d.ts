import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class InventoryLeftTabPocketIndex extends Enum<InventoryLeftTabPocketIndex> {
    static None: InventoryLeftTabPocketIndex;
    static RecipeConstruction: InventoryLeftTabPocketIndex;
    static RecipeEquipment: InventoryLeftTabPocketIndex;
    static RecipeItems: InventoryLeftTabPocketIndex;
    static RecipeNature: InventoryLeftTabPocketIndex;
    static RecipeSearch: InventoryLeftTabPocketIndex;
    static Survival: InventoryLeftTabPocketIndex;
    static getByName(paramarg0: string): InventoryLeftTabPocketIndex;
    static getByName(paramarg0: string, paramarg1: InventoryLeftTabPocketIndex): InventoryLeftTabPocketIndex;
    static getByValue(paramarg0: number): InventoryLeftTabPocketIndex;
    static getByValue(paramarg0: number, paramarg1: InventoryLeftTabPocketIndex): InventoryLeftTabPocketIndex;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): InventoryLeftTabPocketIndex;
    static values(): InventoryLeftTabPocketIndex[];
    private constructor(arg2: number)
    private constructor(arg2: InventoryLeftTabPocketIndex)
    readonly value: number;
    getValue(): number;
    name(): "None" | "Survival" | "RecipeNature" | "RecipeItems" | "RecipeEquipment" | "RecipeConstruction" | "RecipeSearch";
}