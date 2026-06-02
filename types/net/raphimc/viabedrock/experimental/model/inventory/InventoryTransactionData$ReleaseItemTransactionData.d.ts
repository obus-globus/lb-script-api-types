import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { InventoryTransactionData } from '../../../../../../net/raphimc/viabedrock/experimental/model/inventory/InventoryTransactionData.d.ts'
import type { ItemReleaseInventoryTransaction_ActionType } from '../../../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/generated/ItemReleaseInventoryTransaction_ActionType.d.ts'
import type { BedrockItem } from '../../../../../../net/raphimc/viabedrock/protocol/model/BedrockItem.d.ts'
import type { Position3f } from '../../../../../../net/raphimc/viabedrock/protocol/model/Position3f.d.ts'
export class InventoryTransactionData$ReleaseItemTransactionData extends Record implements InventoryTransactionData {
    // private actionType: ItemReleaseInventoryTransaction_ActionType;
    // private headPosition: Position3f;
    // private hotbarSlot: number;
    // private itemInHand: BedrockItem;
    actionType(): ItemReleaseInventoryTransaction_ActionType;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    headPosition(): Position3f;
    hotbarSlot(): number;
    itemInHand(): BedrockItem;
    toString(): string;
}