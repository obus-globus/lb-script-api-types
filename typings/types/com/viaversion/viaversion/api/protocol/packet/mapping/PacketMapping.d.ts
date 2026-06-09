import type { PacketWrapper } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { PacketHandler } from '../../../../../../../com/viaversion/viaversion/api/protocol/remapper/PacketHandler.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface PacketMapping extends Object {
    appendHandler(arg0: (param0: PacketWrapper) => void): void;
    applyType(arg0: PacketWrapper): void;
    handler(): (param0: PacketWrapper) => void;
    setHandler(arg0: (param0: PacketWrapper) => void): void;
}