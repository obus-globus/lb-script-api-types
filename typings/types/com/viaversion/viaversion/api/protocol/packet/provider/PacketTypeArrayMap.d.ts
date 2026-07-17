import type { PacketType } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketType.d.ts'
import type { PacketTypeMap } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/provider/PacketTypeMap.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class PacketTypeArrayMap<P extends PacketType> extends Object implements PacketTypeMap<P> {
    constructor(arg0: { [key: string]: P }, arg1: P[])
    // private packets: P[];
    // private packetsByName: { [key: string]: P };
    typeById(arg0: number): P;
    typeByName(arg0: string): P;
    types(): P[];
}