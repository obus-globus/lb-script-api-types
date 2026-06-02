import type { Type } from '../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { CommandOriginData } from '../../../../../../net/raphimc/viabedrock/protocol/model/CommandOriginData.d.ts'
export class CommandOriginDataType extends Type<CommandOriginData> {
    constructor()
    read(arg0: ByteBuf): CommandOriginData;
    write(arg0: ByteBuf, arg1: CommandOriginData): void;
}