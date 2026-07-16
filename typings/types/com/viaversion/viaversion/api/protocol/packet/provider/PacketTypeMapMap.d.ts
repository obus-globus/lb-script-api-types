import type { PacketType } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketType.d.ts'
import type { PacketTypeMap } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/provider/PacketTypeMap.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class PacketTypeMapMap<P extends PacketType> extends Object implements PacketTypeMap<P> {
    static of<T extends PacketType, E extends T>(paramarg0: Class<E>): PacketTypeMap<T>;
    static of<T extends PacketType>(paramarg0: { [key: string]: T }, paramarg1: T[]): PacketTypeMap<T>;
    static of<T extends PacketType>(paramarg0: { [key: string]: T }, paramarg1: { [key: string]: any }): PacketTypeMap<T>;
    static ofUnsequenced<T extends PacketType, E extends T>(paramarg0: Class<E>): PacketTypeMap<T>;
    constructor(arg0: { [key: string]: P }, arg1: { [key: string]: any })
    // private packetsById: { [key: string]: any };
    // private packetsByName: { [key: string]: P };
    typeById(arg0: number): P;
    typeByName(arg0: string): P;
    types(): P[];
}