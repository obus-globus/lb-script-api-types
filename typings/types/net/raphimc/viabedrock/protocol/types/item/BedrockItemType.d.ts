import type { Type } from '../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BedrockItem } from '../../../../../../net/raphimc/viabedrock/protocol/model/BedrockItem.d.ts'
export class BedrockItemType extends Type<BedrockItem> {
    constructor(arg0: number, arg1: Int2ObjectMap<(Object | null)[]>, arg2: boolean)
    // private blockItemValidBlockStates: Int2ObjectMap<(Object | null)[]>;
    // private blockingId: number;
    // private writeItemNetId: boolean;
    read(arg0: ByteBuf): BedrockItem;
    write(arg0: ByteBuf, arg1: BedrockItem): void;
}