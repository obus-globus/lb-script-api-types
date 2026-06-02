import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Type } from '../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { InventoryActionData } from '../../../../../../net/raphimc/viabedrock/experimental/model/inventory/InventoryActionData.d.ts'
export class InventoryActionDataType extends Type<InventoryActionData> {
    constructor(arg0: UserConnection)
    // private user: UserConnection;
    read(arg0: ByteBuf): InventoryActionData;
    write(arg0: ByteBuf, arg1: InventoryActionData): void;
}