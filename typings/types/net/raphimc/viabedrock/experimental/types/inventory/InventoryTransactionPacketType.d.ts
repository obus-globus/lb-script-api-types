import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Ops } from '../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { Type } from '../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { BedrockInventoryTransaction } from '../../../../../../net/raphimc/viabedrock/experimental/model/inventory/BedrockInventoryTransaction.d.ts'
import type { InventoryActionData } from '../../../../../../net/raphimc/viabedrock/experimental/model/inventory/InventoryActionData.d.ts'
export class InventoryTransactionPacketType extends Type<BedrockInventoryTransaction> {
    constructor(arg0: UserConnection, arg1: Type<InventoryActionData[]>)
    // private inventoryActionDataType: Type<InventoryActionData[]>;
    // private user: UserConnection;
    read(arg0: ByteBuf): BedrockInventoryTransaction;
    write(arg0: Ops, arg1: BedrockInventoryTransaction): void;
    write(arg0: ByteBuf, arg1: BedrockInventoryTransaction): void;
}