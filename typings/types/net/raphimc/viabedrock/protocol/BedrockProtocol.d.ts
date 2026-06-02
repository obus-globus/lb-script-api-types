import type { UserConnection } from '../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ViaProviders } from '../../../../com/viaversion/viaversion/api/platform/providers/ViaProviders.d.ts'
import type { Direction } from '../../../../com/viaversion/viaversion/api/protocol/packet/Direction.d.ts'
import type { PacketWrapper } from '../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { State } from '../../../../com/viaversion/viaversion/api/protocol/packet/State.d.ts'
import type { PacketMappings } from '../../../../com/viaversion/viaversion/api/protocol/packet/mapping/PacketMappings.d.ts'
import type { ClientboundPackets26_1 } from '../../../../com/viaversion/viaversion/protocols/v1_21_11to26_1/packet/ClientboundPackets26_1.d.ts'
import type { ServerboundPackets26_1 } from '../../../../com/viaversion/viaversion/protocols/v1_21_11to26_1/packet/ServerboundPackets26_1.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { StatelessTransitionProtocol } from '../../../../net/raphimc/viabedrock/api/protocol/StatelessTransitionProtocol.d.ts'
import type { ClientboundBedrockPackets } from '../../../../net/raphimc/viabedrock/protocol/ClientboundBedrockPackets.d.ts'
import type { ServerboundBedrockPackets } from '../../../../net/raphimc/viabedrock/protocol/ServerboundBedrockPackets.d.ts'
import type { BedrockMappingData } from '../../../../net/raphimc/viabedrock/protocol/data/BedrockMappingData.d.ts'
export class BedrockProtocol extends StatelessTransitionProtocol<ClientboundBedrockPackets, ClientboundPackets26_1, ServerboundBedrockPackets, ServerboundPackets26_1> {
    static MAPPINGS: BedrockMappingData;
    static kickForIllegalState(paramarg0: UserConnection, paramarg1: string): void;
    static kickForIllegalState(paramarg0: UserConnection, paramarg1: string, paramarg2: Throwable): void;
    constructor()
    getClientboundMappings(): PacketMappings;
    getMappingData(): BedrockMappingData;
    getServerboundMappings(): PacketMappings;
    init(arg0: UserConnection): void;
    register(arg0: ViaProviders): void;
    registerPackets(): void;
    transform(arg0: Direction, arg1: State, arg2: PacketWrapper): void;
}