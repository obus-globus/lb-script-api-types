import type { PacketType } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketType.d.ts'
import type { PacketTypeMap } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/provider/PacketTypeMap.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class PacketTypeArrayMap<P extends PacketType> extends Object implements PacketTypeMap<P> {
    static of(paramarg0: Class<Object>): PacketTypeMap<Object>;
    static of(paramarg0: { [key: string]: Object | null }, paramarg1: Object | null): PacketTypeMap<Object>;
    static of(paramarg0: { [key: string]: Object | null }, paramarg1: Int2ObjectMap<Object>): PacketTypeMap<Object>;
    static ofUnsequenced(paramarg0: Class<Object>): PacketTypeMap<Object>;
    constructor(arg0: { [key: string]: P }, arg1: P[])
    // private packets: P[];
    // private packetsByName: { [key: string]: P };
    typeById(arg0: number): P;
    typeByName(arg0: string): P;
    types(): E[];
}