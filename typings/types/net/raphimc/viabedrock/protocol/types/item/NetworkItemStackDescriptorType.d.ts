import type { Ops } from '../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { Type } from '../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { BedrockItem } from '../../../../../../net/raphimc/viabedrock/protocol/model/BedrockItem.d.ts'
export class NetworkItemStackDescriptorType extends Type<BedrockItem> {
    constructor(arg0: number, arg1: { [key: string]: any }, arg2: boolean)
    // private blockItemValidBlockStates: { [key: string]: any };
    // private blockingId: number;
    // private writeItemNetId: boolean;
    read(arg0: ByteBuf): BedrockItem;
    write(arg0: Ops, arg1: BedrockItem): void;
    write(arg0: ByteBuf, arg1: BedrockItem): void;
}