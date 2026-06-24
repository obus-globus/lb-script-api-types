import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { InventoryTransactionData } from '../../../../../../net/raphimc/viabedrock/experimental/model/inventory/InventoryTransactionData.d.ts'
import type { ItemUseOnActorInventoryTransaction_ActionType } from '../../../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/generated/ItemUseOnActorInventoryTransaction_ActionType.d.ts'
import type { BedrockItem } from '../../../../../../net/raphimc/viabedrock/protocol/model/BedrockItem.d.ts'
import type { Position3f } from '../../../../../../net/raphimc/viabedrock/protocol/model/Position3f.d.ts'
export class InventoryTransactionData$UseItemOnEntityTransactionData extends Record implements InventoryTransactionData {
    constructor(entityRuntimeId: number, actionType: ItemUseOnActorInventoryTransaction_ActionType, hotbarSlot: number, itemInHand: BedrockItem, playerPosition: Position3f, clickPosition: Position3f)
    // private actionType: ItemUseOnActorInventoryTransaction_ActionType;
    // private clickPosition: Position3f;
    // private entityRuntimeId: number;
    // private hotbarSlot: number;
    // private itemInHand: BedrockItem;
    // private playerPosition: Position3f;
    actionType(): ItemUseOnActorInventoryTransaction_ActionType;
    clickPosition(): Position3f;
    entityRuntimeId(): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    hotbarSlot(): number;
    itemInHand(): BedrockItem;
    playerPosition(): Position3f;
    toString(): string;
}