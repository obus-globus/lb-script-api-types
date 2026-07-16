import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class ItemUseInventoryTransaction_PredictedResult extends Enum<ItemUseInventoryTransaction_PredictedResult> {
    static Failure: ItemUseInventoryTransaction_PredictedResult;
    static Success: ItemUseInventoryTransaction_PredictedResult;
    static getByName(paramarg0: string): ItemUseInventoryTransaction_PredictedResult;
    static getByName(paramarg0: string, paramarg1: ItemUseInventoryTransaction_PredictedResult): ItemUseInventoryTransaction_PredictedResult;
    static getByValue(paramarg0: number): ItemUseInventoryTransaction_PredictedResult;
    static getByValue(paramarg0: number, paramarg1: ItemUseInventoryTransaction_PredictedResult): ItemUseInventoryTransaction_PredictedResult;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ItemUseInventoryTransaction_PredictedResult;
    static values(): ItemUseInventoryTransaction_PredictedResult[];
    private constructor(arg2: number)
    private constructor(arg2: ItemUseInventoryTransaction_PredictedResult)
    readonly value: number;
    getValue(): number;
    name(): "Failure" | "Success";
}