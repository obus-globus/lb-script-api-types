import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ItemVariant } from '../../../../../../net/fabricmc/fabric/api/transfer/v1/item/ItemVariant.d.ts'
export class PlayerInventoryStorageImpl$DroppedStacks$Entry extends Record {
    // private amount: number;
    // private key: ItemVariant;
    // private retainOwnership: boolean;
    // private throwRandomly: boolean;
    amount(): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    key(): ItemVariant;
    retainOwnership(): boolean;
    throwRandomly(): boolean;
    toString(): string;
}