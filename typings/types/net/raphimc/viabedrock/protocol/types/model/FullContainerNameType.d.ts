import type { Type } from '../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { FullContainerName } from '../../../../../../net/raphimc/viabedrock/protocol/model/FullContainerName.d.ts'
export class FullContainerNameType extends Type<FullContainerName> {
    constructor()
    read(arg0: ByteBuf): FullContainerName;
    write(arg0: ByteBuf, arg1: FullContainerName): void;
}