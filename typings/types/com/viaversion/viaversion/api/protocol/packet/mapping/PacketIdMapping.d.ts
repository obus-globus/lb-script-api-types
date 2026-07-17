import type { PacketWrapper } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { PacketMapping } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/mapping/PacketMapping.d.ts'
import type { PacketHandler } from '../../../../../../../com/viaversion/viaversion/api/protocol/remapper/PacketHandler.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class PacketIdMapping extends Object implements PacketMapping {
    constructor(arg0: number, arg1: (param0: PacketWrapper) => void)
    // private mappedPacketId: number;
    appendHandler(arg0: (param0: PacketWrapper) => void): void;
    applyType(arg0: PacketWrapper): void;
    handler(): (param0: PacketWrapper) => void;
    setHandler(arg0: (param0: PacketWrapper) => void): void;
}