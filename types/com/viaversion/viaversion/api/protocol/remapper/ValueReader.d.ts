import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface ValueReader<T extends Object | number | string | boolean> extends Object{
    read(arg0: PacketWrapper): T;
}