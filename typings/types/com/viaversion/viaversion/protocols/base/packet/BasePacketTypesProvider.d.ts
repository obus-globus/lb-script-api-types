import type { ClientboundPacketType } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { ServerboundPacketType } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/ServerboundPacketType.d.ts'
import type { State } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/State.d.ts'
import type { PacketTypeMap } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/provider/PacketTypeMap.d.ts'
import type { PacketTypesProvider } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/provider/PacketTypesProvider.d.ts'
import type { BaseClientboundPacket } from '../../../../../../com/viaversion/viaversion/protocols/base/packet/BaseClientboundPacket.d.ts'
import type { BaseServerboundPacket } from '../../../../../../com/viaversion/viaversion/protocols/base/packet/BaseServerboundPacket.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class BasePacketTypesProvider extends Object implements PacketTypesProvider<BaseClientboundPacket, BaseClientboundPacket, BaseServerboundPacket, BaseServerboundPacket> {
    static INSTANCE: PacketTypesProvider<BaseClientboundPacket, BaseClientboundPacket, BaseServerboundPacket, BaseServerboundPacket>;
    private constructor()
    // private clientboundPacketTypes: { [key in State]: PacketTypeMap<BaseClientboundPacket> };
    // private serverboundPacketTypes: { [key in State]: PacketTypeMap<BaseServerboundPacket> };
    mappedClientboundPacketTypes(): { [key in State]: PacketTypeMap<BaseClientboundPacket> };
    mappedClientboundType<CM extends ClientboundPacketType>(arg0: State, arg1: string): CM;
    mappedServerboundPacketTypes(): { [key in State]: PacketTypeMap<BaseServerboundPacket> };
    unmappedClientboundPacketTypes(): { [key in State]: PacketTypeMap<BaseClientboundPacket> };
    unmappedClientboundType<CU extends ClientboundPacketType>(arg0: State, arg1: number): CU;
    unmappedClientboundType<CU extends ClientboundPacketType>(arg0: State, arg1: string): CU;
    unmappedServerboundPacketTypes(): { [key in State]: PacketTypeMap<BaseServerboundPacket> };
    unmappedServerboundType<SU extends ServerboundPacketType>(arg0: State, arg1: number): SU;
    unmappedServerboundType<SU extends ServerboundPacketType>(arg0: State, arg1: string): SU;
}