import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { State } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/State.d.ts'
import type { PacketTypeMap } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/provider/PacketTypeMap.d.ts'
import type { PacketTypesProvider } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/provider/PacketTypesProvider.d.ts'
import type { BaseClientboundPacket } from '../../../../../../com/viaversion/viaversion/protocols/base/packet/BaseClientboundPacket.d.ts'
import type { BaseServerboundPacket } from '../../../../../../com/viaversion/viaversion/protocols/base/packet/BaseServerboundPacket.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class BasePacketTypesProvider extends Object implements PacketTypesProvider<BaseClientboundPacket, BaseClientboundPacket, BaseServerboundPacket, BaseServerboundPacket> {
    static INSTANCE: PacketTypesProvider<BaseClientboundPacket, BaseClientboundPacket, BaseServerboundPacket, BaseServerboundPacket>;
    private constructor()
    // private clientboundPacketTypes: JavaMap<State, PacketTypeMap<BaseClientboundPacket>>;
    // private serverboundPacketTypes: JavaMap<State, PacketTypeMap<BaseServerboundPacket>>;
    mappedClientboundPacketTypes(): JavaMap<State, PacketTypeMap<BaseClientboundPacket>>;
    mappedClientboundType(arg0: State, arg1: string): BaseClientboundPacket;
    mappedServerboundPacketTypes(): JavaMap<State, PacketTypeMap<BaseServerboundPacket>>;
    unmappedClientboundPacketTypes(): JavaMap<State, PacketTypeMap<BaseClientboundPacket>>;
    unmappedClientboundType(arg0: State, arg1: number): BaseClientboundPacket;
    unmappedClientboundType(arg0: State, arg1: string): BaseClientboundPacket;
    unmappedServerboundPacketTypes(): JavaMap<State, PacketTypeMap<BaseServerboundPacket>>;
    unmappedServerboundType(arg0: State, arg1: number): BaseServerboundPacket;
    unmappedServerboundType(arg0: State, arg1: string): BaseServerboundPacket;
}