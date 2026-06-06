import type { PacketType } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketType.d.ts'
import type { PacketWrapper } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { PacketMapping } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/mapping/PacketMapping.d.ts'
import type { PacketHandler } from '../../../../../../../com/viaversion/viaversion/api/protocol/remapper/PacketHandler.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class PacketTypeMapping extends Object implements PacketMapping {
    static of(paramarg0: PacketType, paramarg1: (param0: PacketWrapper) => void): PacketMapping;
    static of(paramarg0: number, paramarg1: (param0: PacketWrapper) => void): PacketMapping;
    constructor(arg0: PacketType, arg1: (param0: PacketWrapper) => void)
    // private mappedPacketType: PacketType;
    appendHandler(arg0: (param0: PacketWrapper) => void): void;
    applyType(arg0: PacketWrapper): void;
    handler(): (param0: PacketWrapper) => void;
    setHandler(arg0: (param0: PacketWrapper) => void): void;
}