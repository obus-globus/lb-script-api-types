import type { Ops } from '../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { Type } from '../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { CommandData } from '../../../../../../net/raphimc/viabedrock/protocol/model/CommandData.d.ts'
export class CommandDataArrayType extends Type<CommandData[]> {
    constructor()
    read(arg0: ByteBuf): CommandData[];
    write(arg0: Ops, arg1: CommandData[]): void;
    write(arg0: ByteBuf, arg1: CommandData[]): void;
}