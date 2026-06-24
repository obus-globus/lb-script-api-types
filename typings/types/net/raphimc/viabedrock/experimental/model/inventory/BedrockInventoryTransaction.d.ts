import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { InventoryActionData } from '../../../../../../net/raphimc/viabedrock/experimental/model/inventory/InventoryActionData.d.ts'
import type { InventoryTransactionData } from '../../../../../../net/raphimc/viabedrock/experimental/model/inventory/InventoryTransactionData.d.ts'
import type { LegacySetItemSlotData } from '../../../../../../net/raphimc/viabedrock/experimental/model/inventory/LegacySetItemSlotData.d.ts'
import type { ComplexInventoryTransaction_Type } from '../../../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/generated/ComplexInventoryTransaction_Type.d.ts'
export class BedrockInventoryTransaction extends Record {
    constructor(legacyRequestId: number, legacySlots: LegacySetItemSlotData[], actions: InventoryActionData[], transactionType: ComplexInventoryTransaction_Type, transactionData: InventoryTransactionData)
    // private actions: InventoryActionData[];
    // private legacyRequestId: number;
    // private legacySlots: LegacySetItemSlotData[];
    // private transactionData: InventoryTransactionData;
    // private transactionType: ComplexInventoryTransaction_Type;
    actions(): InventoryActionData[];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    legacyRequestId(): number;
    legacySlots(): LegacySetItemSlotData[];
    toString(): string;
    transactionData(): InventoryTransactionData;
    transactionType(): ComplexInventoryTransaction_Type;
}