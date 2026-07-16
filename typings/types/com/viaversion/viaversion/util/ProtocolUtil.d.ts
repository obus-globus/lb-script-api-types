import type { Protocol } from '../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { PacketType } from '../../../../com/viaversion/viaversion/api/protocol/packet/PacketType.d.ts'
import type { State } from '../../../../com/viaversion/viaversion/api/protocol/packet/State.d.ts'
import type { PacketTypeMap } from '../../../../com/viaversion/viaversion/api/protocol/packet/provider/PacketTypeMap.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ProtocolUtil extends Object {
    static packetTypeMap(paramarg0: Class<PacketType>, ...paramarg1: Class<PacketType>[]): Map<State, PacketTypeMap<PacketType>>;
    static toNiceHex(paramarg0: number): string;
    static toNiceName(paramarg0: Class<Protocol<any, any, any, any>>): string;
    constructor()
}