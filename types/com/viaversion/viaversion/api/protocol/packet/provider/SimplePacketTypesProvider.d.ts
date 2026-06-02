import type { ClientboundPacketType } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { ServerboundPacketType } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/ServerboundPacketType.d.ts'
import type { State } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/State.d.ts'
import type { PacketTypeMap } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/provider/PacketTypeMap.d.ts'
import type { PacketTypesProvider } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/provider/PacketTypesProvider.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class SimplePacketTypesProvider<CU extends ClientboundPacketType, CM extends ClientboundPacketType, SM extends ServerboundPacketType, SU extends ServerboundPacketType> extends Record implements PacketTypesProvider<CU, CM, SM, SU> {
    constructor(unmappedClientboundPacketTypes: { [key in State]: PacketTypeMap<CU> }, mappedClientboundPacketTypes: { [key in State]: PacketTypeMap<CM> }, mappedServerboundPacketTypes: { [key in State]: PacketTypeMap<SM> }, unmappedServerboundPacketTypes: { [key in State]: PacketTypeMap<SU> })
    // private mappedClientboundPacketTypes: { [key in State]: PacketTypeMap<CM> };
    // private mappedServerboundPacketTypes: { [key in State]: PacketTypeMap<SM> };
    // private unmappedClientboundPacketTypes: { [key in State]: PacketTypeMap<CU> };
    // private unmappedServerboundPacketTypes: { [key in State]: PacketTypeMap<SU> };
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    mappedClientboundPacketTypes(): { [key in State]: PacketTypeMap<CM> };
    mappedClientboundType(arg0: State, arg1: string): CM;
    mappedServerboundPacketTypes(): { [key in State]: PacketTypeMap<SM> };
    toString(): string;
    unmappedClientboundPacketTypes(): { [key in State]: PacketTypeMap<CU> };
    unmappedClientboundType(arg0: State, arg1: number): CU;
    unmappedClientboundType(arg0: State, arg1: string): CU;
    unmappedServerboundPacketTypes(): { [key in State]: PacketTypeMap<SU> };
    unmappedServerboundType(arg0: State, arg1: number): SU;
    unmappedServerboundType(arg0: State, arg1: string): SU;
}