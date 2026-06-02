import type { Holder } from '../../../../../../../com/viaversion/viaversion/api/minecraft/Holder.d.ts'
import type { HolderType } from '../../../../../../../com/viaversion/viaversion/api/type/types/misc/HolderType.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class HolderType$OptionalHolderType<T extends Object | number | string | boolean> extends HolderType<T> {
    constructor(arg0: HolderType<T>)
    // private type: HolderType<T>;
    read(arg0: ByteBuf): Holder<T>;
    readDirect(arg0: ByteBuf): T;
    write(arg0: ByteBuf, arg1: Holder<T>): void;
    writeDirect(arg0: ByteBuf, arg1: T): void;
}