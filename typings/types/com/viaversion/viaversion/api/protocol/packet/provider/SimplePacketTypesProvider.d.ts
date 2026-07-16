import type { ClientboundPacketType } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { ServerboundPacketType } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/ServerboundPacketType.d.ts'
import type { State } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/State.d.ts'
import type { PacketTypeMap } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/provider/PacketTypeMap.d.ts'
import type { PacketTypesProvider } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/provider/PacketTypesProvider.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class SimplePacketTypesProvider<CU extends ClientboundPacketType, CM extends ClientboundPacketType, SM extends ServerboundPacketType, SU extends ServerboundPacketType> extends Record implements PacketTypesProvider<CU, CM, SM, SU> {
    constructor(unmappedClientboundPacketTypes: Map<State, PacketTypeMap<CU>>, mappedClientboundPacketTypes: Map<State, PacketTypeMap<CM>>, mappedServerboundPacketTypes: Map<State, PacketTypeMap<SM>>, unmappedServerboundPacketTypes: Map<State, PacketTypeMap<SU>>)
    // private mappedClientboundPacketTypes: Map<State, PacketTypeMap<CM>>;
    // private mappedServerboundPacketTypes: Map<State, PacketTypeMap<SM>>;
    // private unmappedClientboundPacketTypes: Map<State, PacketTypeMap<CU>>;
    // private unmappedServerboundPacketTypes: Map<State, PacketTypeMap<SU>>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    mappedClientboundPacketTypes(): Map<State, PacketTypeMap<CM>>;
    mappedClientboundType(arg0: State, arg1: string): CM;
    mappedServerboundPacketTypes(): Map<State, PacketTypeMap<SM>>;
    toString(): string;
    unmappedClientboundPacketTypes(): Map<State, PacketTypeMap<CU>>;
    unmappedClientboundType(arg0: State, arg1: number): CU;
    unmappedClientboundType(arg0: State, arg1: string): CU;
    unmappedServerboundPacketTypes(): Map<State, PacketTypeMap<SU>>;
    unmappedServerboundType(arg0: State, arg1: number): SU;
    unmappedServerboundType(arg0: State, arg1: string): SU;
}