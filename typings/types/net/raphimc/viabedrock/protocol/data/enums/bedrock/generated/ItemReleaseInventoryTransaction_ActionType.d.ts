import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class ItemReleaseInventoryTransaction_ActionType extends Enum<ItemReleaseInventoryTransaction_ActionType> {
    static Release: ItemReleaseInventoryTransaction_ActionType;
    static Use: ItemReleaseInventoryTransaction_ActionType;
    static getByName(paramarg0: string): ItemReleaseInventoryTransaction_ActionType;
    static getByName(paramarg0: string, paramarg1: ItemReleaseInventoryTransaction_ActionType): ItemReleaseInventoryTransaction_ActionType;
    static getByValue(paramarg0: number): ItemReleaseInventoryTransaction_ActionType;
    static getByValue(paramarg0: number, paramarg1: ItemReleaseInventoryTransaction_ActionType): ItemReleaseInventoryTransaction_ActionType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ItemReleaseInventoryTransaction_ActionType;
    static values(): ItemReleaseInventoryTransaction_ActionType[];
    private constructor(arg2: number)
    private constructor(arg2: ItemReleaseInventoryTransaction_ActionType)
    readonly value: number;
    getValue(): number;
    name(): "Release" | "Use";
}