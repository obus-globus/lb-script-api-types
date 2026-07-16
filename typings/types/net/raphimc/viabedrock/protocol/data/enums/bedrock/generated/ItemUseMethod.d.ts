import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class ItemUseMethod extends Enum<ItemUseMethod> {
    static Attack: ItemUseMethod;
    static BrushingCompleted: ItemUseMethod;
    static Consume: ItemUseMethod;
    static Dyed: ItemUseMethod;
    static Eat: ItemUseMethod;
    static EquipArmor: ItemUseMethod;
    static FillBottle: ItemUseMethod;
    static FillBucket: ItemUseMethod;
    static Interact: ItemUseMethod;
    static OpenedVault: ItemUseMethod;
    static Place: ItemUseMethod;
    static PourBucket: ItemUseMethod;
    static Retrieved: ItemUseMethod;
    static Shoot: ItemUseMethod;
    static Throw: ItemUseMethod;
    static Traded: ItemUseMethod;
    static Unknown: ItemUseMethod;
    static UseTool: ItemUseMethod;
    static getByName(paramarg0: string): ItemUseMethod;
    static getByName(paramarg0: string, paramarg1: ItemUseMethod): ItemUseMethod;
    static getByValue(paramarg0: number): ItemUseMethod;
    static getByValue(paramarg0: number, paramarg1: ItemUseMethod): ItemUseMethod;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ItemUseMethod;
    static values(): ItemUseMethod[];
    private constructor(arg2: number)
    private constructor(arg2: ItemUseMethod)
    readonly value: number;
    getValue(): number;
    name(): "Unknown" | "EquipArmor" | "Eat" | "Attack" | "Consume" | "Throw" | "Shoot" | "Place" | "FillBottle" | "FillBucket" | "PourBucket" | "UseTool" | "Interact" | "Retrieved" | "Dyed" | "Traded" | "BrushingCompleted" | "OpenedVault";
}