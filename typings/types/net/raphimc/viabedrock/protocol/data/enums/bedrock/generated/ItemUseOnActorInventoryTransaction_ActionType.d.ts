import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class ItemUseOnActorInventoryTransaction_ActionType extends Enum<ItemUseOnActorInventoryTransaction_ActionType> {
    static Attack: ItemUseOnActorInventoryTransaction_ActionType;
    static Interact: ItemUseOnActorInventoryTransaction_ActionType;
    static ItemInteract: ItemUseOnActorInventoryTransaction_ActionType;
    static getByName(paramarg0: string): ItemUseOnActorInventoryTransaction_ActionType;
    static getByName(paramarg0: string, paramarg1: ItemUseOnActorInventoryTransaction_ActionType): ItemUseOnActorInventoryTransaction_ActionType;
    static getByValue(paramarg0: number): ItemUseOnActorInventoryTransaction_ActionType;
    static getByValue(paramarg0: number, paramarg1: ItemUseOnActorInventoryTransaction_ActionType): ItemUseOnActorInventoryTransaction_ActionType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ItemUseOnActorInventoryTransaction_ActionType;
    static values(): ItemUseOnActorInventoryTransaction_ActionType[];
    private constructor(arg2: number)
    private constructor(arg2: ItemUseOnActorInventoryTransaction_ActionType)
    readonly value: number;
    getValue(): number;
    name(): "Interact" | "Attack" | "ItemInteract";
}