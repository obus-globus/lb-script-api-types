import type { BlockPosition } from '../../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { InventoryTransactionData } from '../../../../../../net/raphimc/viabedrock/experimental/model/inventory/InventoryTransactionData.d.ts'
import type { ItemUseInventoryTransaction_TriggerType } from '../../../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/ItemUseInventoryTransaction_TriggerType.d.ts'
import type { ItemUseInventoryTransaction_ActionType } from '../../../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/generated/ItemUseInventoryTransaction_ActionType.d.ts'
import type { ItemUseInventoryTransaction_ClientCooldownState } from '../../../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/generated/ItemUseInventoryTransaction_ClientCooldownState.d.ts'
import type { ItemUseInventoryTransaction_PredictedResult } from '../../../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/generated/ItemUseInventoryTransaction_PredictedResult.d.ts'
import type { BedrockItem } from '../../../../../../net/raphimc/viabedrock/protocol/model/BedrockItem.d.ts'
import type { Position3f } from '../../../../../../net/raphimc/viabedrock/protocol/model/Position3f.d.ts'
export class InventoryTransactionData$UseItemTransactionData extends Record implements InventoryTransactionData {
    constructor(actionType: ItemUseInventoryTransaction_ActionType, triggerType: ItemUseInventoryTransaction_TriggerType, blockPosition: BlockPosition, face: number, hotbarSlot: number, itemInHand: BedrockItem, playerPosition: Position3f, clickPosition: Position3f, blockRuntimeId: number, predictedResult: ItemUseInventoryTransaction_PredictedResult, clientCooldownState: ItemUseInventoryTransaction_ClientCooldownState)
    // private actionType: ItemUseInventoryTransaction_ActionType;
    // private blockPosition: BlockPosition;
    // private blockRuntimeId: number;
    // private clickPosition: Position3f;
    // private clientCooldownState: ItemUseInventoryTransaction_ClientCooldownState;
    // private face: number;
    // private hotbarSlot: number;
    // private itemInHand: BedrockItem;
    // private playerPosition: Position3f;
    // private predictedResult: ItemUseInventoryTransaction_PredictedResult;
    // private triggerType: ItemUseInventoryTransaction_TriggerType;
    actionType(): ItemUseInventoryTransaction_ActionType;
    blockPosition(): BlockPosition;
    blockRuntimeId(): number;
    clickPosition(): Position3f;
    clientCooldownState(): ItemUseInventoryTransaction_ClientCooldownState;
    equals(arg0: Object | null): boolean;
    face(): number;
    hashCode(): number;
    hotbarSlot(): number;
    itemInHand(): BedrockItem;
    playerPosition(): Position3f;
    predictedResult(): ItemUseInventoryTransaction_PredictedResult;
    toString(): string;
    triggerType(): ItemUseInventoryTransaction_TriggerType;
}