import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface PacketHandler extends Object {
    handle(arg0: PacketWrapper): void;
    then(arg0: (param0: PacketWrapper) => void): (param0: PacketWrapper) => void;
}