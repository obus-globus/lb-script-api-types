import type { Ops } from '../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { Type } from '../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { BlockProperties } from '../../../../../../net/raphimc/viabedrock/protocol/model/BlockProperties.d.ts'
export class BlockPropertiesType extends Type<BlockProperties> {
    constructor()
    read(arg0: ByteBuf): BlockProperties;
    write(arg0: Ops, arg1: BlockProperties): void;
    write(arg0: ByteBuf, arg1: BlockProperties): void;
}