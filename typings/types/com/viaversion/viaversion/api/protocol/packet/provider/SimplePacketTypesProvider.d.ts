import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { ClientboundPacketType } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { ServerboundPacketType } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/ServerboundPacketType.d.ts'
import type { State } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/State.d.ts'
import type { PacketTypeMap } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/provider/PacketTypeMap.d.ts'
import type { PacketTypesProvider } from '../../../../../../../com/viaversion/viaversion/api/protocol/packet/provider/PacketTypesProvider.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class SimplePacketTypesProvider<CU extends ClientboundPacketType, CM extends ClientboundPacketType, SM extends ServerboundPacketType, SU extends ServerboundPacketType> extends Record implements PacketTypesProvider<CU, CM, SM, SU> {
    constructor(unmappedClientboundPacketTypes: JavaMap<State, PacketTypeMap<CU>>, mappedClientboundPacketTypes: JavaMap<State, PacketTypeMap<CM>>, mappedServerboundPacketTypes: JavaMap<State, PacketTypeMap<SM>>, unmappedServerboundPacketTypes: JavaMap<State, PacketTypeMap<SU>>)
    // private mappedClientboundPacketTypes: JavaMap<State, PacketTypeMap<CM>>;
    // private mappedServerboundPacketTypes: JavaMap<State, PacketTypeMap<SM>>;
    // private unmappedClientboundPacketTypes: JavaMap<State, PacketTypeMap<CU>>;
    // private unmappedServerboundPacketTypes: JavaMap<State, PacketTypeMap<SU>>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    mappedClientboundPacketTypes(): JavaMap<State, PacketTypeMap<CM>>;
    mappedClientboundType(arg0: State, arg1: string): CM;
    mappedServerboundPacketTypes(): JavaMap<State, PacketTypeMap<SM>>;
    toString(): string;
    unmappedClientboundPacketTypes(): JavaMap<State, PacketTypeMap<CU>>;
    unmappedClientboundType(arg0: State, arg1: number): CU;
    unmappedClientboundType(arg0: State, arg1: string): CU;
    unmappedServerboundPacketTypes(): JavaMap<State, PacketTypeMap<SU>>;
    unmappedServerboundType(arg0: State, arg1: number): SU;
    unmappedServerboundType(arg0: State, arg1: string): SU;
}