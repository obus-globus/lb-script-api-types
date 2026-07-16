import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class ItemUseInventoryTransaction_ActionType extends Enum<ItemUseInventoryTransaction_ActionType> {
    static Destroy: ItemUseInventoryTransaction_ActionType;
    static Place: ItemUseInventoryTransaction_ActionType;
    static Use: ItemUseInventoryTransaction_ActionType;
    static UseAsAttack: ItemUseInventoryTransaction_ActionType;
    static getByName(paramarg0: string): ItemUseInventoryTransaction_ActionType;
    static getByName(paramarg0: string, paramarg1: ItemUseInventoryTransaction_ActionType): ItemUseInventoryTransaction_ActionType;
    static getByValue(paramarg0: number): ItemUseInventoryTransaction_ActionType;
    static getByValue(paramarg0: number, paramarg1: ItemUseInventoryTransaction_ActionType): ItemUseInventoryTransaction_ActionType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ItemUseInventoryTransaction_ActionType;
    static values(): ItemUseInventoryTransaction_ActionType[];
    private constructor(arg2: number)
    private constructor(arg2: ItemUseInventoryTransaction_ActionType)
    readonly value: number;
    getValue(): number;
    name(): "Place" | "Use" | "Destroy" | "UseAsAttack";
}