import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { InventorySource } from '../../../../../../net/raphimc/viabedrock/experimental/model/inventory/InventorySource.d.ts'
import type { BedrockItem } from '../../../../../../net/raphimc/viabedrock/protocol/model/BedrockItem.d.ts'
export class InventoryActionData extends Record {
    constructor(source: InventorySource, slot: number, fromItem: BedrockItem, toItem: BedrockItem)
    // private fromItem: BedrockItem;
    // private slot: number;
    // private source: InventorySource;
    // private toItem: BedrockItem;
    equals(arg0: Object | null): boolean;
    fromItem(): BedrockItem;
    hashCode(): number;
    slot(): number;
    source(): InventorySource;
    toItem(): BedrockItem;
    toString(): string;
}