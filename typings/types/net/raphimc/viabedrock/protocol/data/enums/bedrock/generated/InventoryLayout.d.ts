import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class InventoryLayout extends Enum<InventoryLayout> {
    static Default: InventoryLayout;
    static InventoryOnly: InventoryLayout;
    static None: InventoryLayout;
    static RecipeBookOnly: InventoryLayout;
    static getByName(paramarg0: string): InventoryLayout;
    static getByName(paramarg0: string, paramarg1: InventoryLayout): InventoryLayout;
    static getByValue(paramarg0: number): InventoryLayout;
    static getByValue(paramarg0: number, paramarg1: InventoryLayout): InventoryLayout;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): InventoryLayout;
    static values(): InventoryLayout[];
    private constructor(arg2: number)
    private constructor(arg2: InventoryLayout)
    readonly value: number;
    getValue(): number;
    name(): "None" | "InventoryOnly" | "Default" | "RecipeBookOnly";
}