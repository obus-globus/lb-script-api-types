import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface ValueWriter<T extends Object | number | string | boolean> extends Object{
    write(arg0: PacketWrapper, arg1: T): void;
}