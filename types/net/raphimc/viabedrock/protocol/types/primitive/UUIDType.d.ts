import type { Type } from '../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { UUID } from '../../../../../../java/util/UUID.d.ts'
export class UUIDType extends Type<UUID> {
    constructor()
    read(arg0: ByteBuf): UUID;
    write(arg0: ByteBuf, arg1: UUID): void;
}