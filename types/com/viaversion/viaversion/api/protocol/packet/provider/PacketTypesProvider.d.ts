import type { ClientboundPacketType } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { ServerboundPacketType } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/ServerboundPacketType.d.ts'
import type { State } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/State.d.ts'
import type { PacketTypeMap } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/provider/PacketTypeMap.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface PacketTypesProvider<CU extends ClientboundPacketType, CM extends ClientboundPacketType, SM extends ServerboundPacketType, SU extends ServerboundPacketType> extends Object{
    mappedClientboundPacketTypes(): { [key in State]: PacketTypeMap<CM> };
    mappedClientboundType(arg0: State, arg1: string): CM;
    mappedServerboundPacketTypes(): { [key in State]: PacketTypeMap<SM> };
    unmappedClientboundPacketTypes(): { [key in State]: PacketTypeMap<CU> };
    unmappedClientboundType(arg0: State, arg1: number): CU;
    unmappedClientboundType(arg0: State, arg1: string): CU;
    unmappedServerboundPacketTypes(): { [key in State]: PacketTypeMap<SU> };
    unmappedServerboundType(arg0: State, arg1: number): SU;
    unmappedServerboundType(arg0: State, arg1: string): SU;
}