import type { PacketType } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketType.d.ts'
import type { State } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/State.d.ts'
import type { PacketMapping } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/mapping/PacketMapping.d.ts'
import type { PacketMappings } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/mapping/PacketMappings.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class PacketArrayMappings extends Object implements PacketMappings {
    static arrayMappings(): PacketMappings;
    constructor()
    // private packets: PacketMapping[][];
    addMapping(arg0: PacketType, arg1: PacketMapping): void;
    addMapping(arg0: State, arg1: number, arg2: PacketMapping): void;
    hasMapping(arg0: PacketType): boolean;
    hasMapping(arg0: State, arg1: number): boolean;
    mappedPacket(arg0: State, arg1: number): PacketMapping;
}