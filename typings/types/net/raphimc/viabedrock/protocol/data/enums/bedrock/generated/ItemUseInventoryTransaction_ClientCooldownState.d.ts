import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class ItemUseInventoryTransaction_ClientCooldownState extends Enum<ItemUseInventoryTransaction_ClientCooldownState> {
    static Off: ItemUseInventoryTransaction_ClientCooldownState;
    static On: ItemUseInventoryTransaction_ClientCooldownState;
    static getByName(paramarg0: string): ItemUseInventoryTransaction_ClientCooldownState;
    static getByName(paramarg0: string, paramarg1: ItemUseInventoryTransaction_ClientCooldownState): ItemUseInventoryTransaction_ClientCooldownState;
    static getByValue(paramarg0: number): ItemUseInventoryTransaction_ClientCooldownState;
    static getByValue(paramarg0: number, paramarg1: ItemUseInventoryTransaction_ClientCooldownState): ItemUseInventoryTransaction_ClientCooldownState;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ItemUseInventoryTransaction_ClientCooldownState;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    private constructor(arg2: ItemUseInventoryTransaction_ClientCooldownState)
    readonly value: number;
    getValue(): number;
    name(): "Off" | "On";
}