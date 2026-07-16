import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class ItemUseInventoryTransaction_TriggerType extends Enum<ItemUseInventoryTransaction_TriggerType> {
    static PlayerInput: ItemUseInventoryTransaction_TriggerType;
    static SimulationTick: ItemUseInventoryTransaction_TriggerType;
    static Unknown: ItemUseInventoryTransaction_TriggerType;
    static getByName(paramarg0: string): ItemUseInventoryTransaction_TriggerType;
    static getByName(paramarg0: string, paramarg1: ItemUseInventoryTransaction_TriggerType): ItemUseInventoryTransaction_TriggerType;
    static getByValue(paramarg0: number): ItemUseInventoryTransaction_TriggerType;
    static getByValue(paramarg0: number, paramarg1: ItemUseInventoryTransaction_TriggerType): ItemUseInventoryTransaction_TriggerType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ItemUseInventoryTransaction_TriggerType;
    static values(): ItemUseInventoryTransaction_TriggerType[];
    private constructor(arg2: number)
    private constructor(arg2: ItemUseInventoryTransaction_TriggerType)
    readonly value: number;
    getValue(): number;
    name(): "Unknown" | "PlayerInput" | "SimulationTick";
}