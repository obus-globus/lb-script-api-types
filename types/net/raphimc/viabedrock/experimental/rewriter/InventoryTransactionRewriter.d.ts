import type { StoredObject } from '../../../../../com/viaversion/viaversion/api/connection/StoredObject.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Type } from '../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { BedrockInventoryTransaction } from '../../../../../net/raphimc/viabedrock/experimental/model/inventory/BedrockInventoryTransaction.d.ts'
import type { InventoryActionData } from '../../../../../net/raphimc/viabedrock/experimental/model/inventory/InventoryActionData.d.ts'
export class InventoryTransactionRewriter extends StoredObject {
    constructor(arg0: UserConnection)
    readonly inventoryActionDataType: Type<InventoryActionData[]>;
    readonly inventoryTransactionType: Type<BedrockInventoryTransaction>;
    getInventoryActionDataType(): Type<InventoryActionData[]>;
    getInventoryTransactionType(): Type<BedrockInventoryTransaction>;
}