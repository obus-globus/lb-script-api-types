import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ViaProviders } from '../../../../../com/viaversion/viaversion/api/platform/providers/ViaProviders.d.ts'
import type { AbstractProtocol } from '../../../../../com/viaversion/viaversion/api/protocol/AbstractProtocol.d.ts'
import type { ClientboundPacketType } from '../../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { PacketWrapper } from '../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { PacketHandler } from '../../../../../com/viaversion/viaversion/api/protocol/remapper/PacketHandler.d.ts'
import type { MappingData1_13 } from '../../../../../com/viaversion/viaversion/protocols/v1_12_2to1_13/data/MappingData1_13.d.ts'
import type { ClientboundPackets1_13 } from '../../../../../com/viaversion/viaversion/protocols/v1_12_2to1_13/packet/ClientboundPackets1_13.d.ts'
import type { ServerboundPackets1_13 } from '../../../../../com/viaversion/viaversion/protocols/v1_12_2to1_13/packet/ServerboundPackets1_13.d.ts'
import type { ComponentRewriter1_13 } from '../../../../../com/viaversion/viaversion/protocols/v1_12_2to1_13/rewriter/ComponentRewriter1_13.d.ts'
import type { EntityPacketRewriter1_13 } from '../../../../../com/viaversion/viaversion/protocols/v1_12_2to1_13/rewriter/EntityPacketRewriter1_13.d.ts'
import type { ItemPacketRewriter1_13 } from '../../../../../com/viaversion/viaversion/protocols/v1_12_2to1_13/rewriter/ItemPacketRewriter1_13.d.ts'
import type { ProtocolStorables1_13 } from '../../../../../com/viaversion/viaversion/protocols/v1_12_2to1_13/storage/ProtocolStorables1_13.d.ts'
import type { ClientboundPackets1_12_1 } from '../../../../../com/viaversion/viaversion/protocols/v1_12to1_12_1/packet/ClientboundPackets1_12_1.d.ts'
import type { ServerboundPackets1_12_1 } from '../../../../../com/viaversion/viaversion/protocols/v1_12to1_12_1/packet/ServerboundPackets1_12_1.d.ts'
import type { ProtocolLogger } from '../../../../../com/viaversion/viaversion/util/ProtocolLogger.d.ts'
export class Protocol1_12_2To1_13 extends AbstractProtocol<ClientboundPackets1_12_1, ClientboundPackets1_13, ServerboundPackets1_12_1, ServerboundPackets1_13> {
    static LOGGER: ProtocolLogger;
    static MAPPINGS: MappingData1_13;
    static POS_TO_3_INT: (param0: PacketWrapper) => void;
    static SEND_DECLARE_COMMANDS_AND_TAGS: (param0: PacketWrapper) => void;
    constructor()
    readonly componentRewriter: ComponentRewriter1_13<ClientboundPackets1_12_1>;
    readonly entityRewriter: EntityPacketRewriter1_13;
    readonly itemRewriter: ItemPacketRewriter1_13;
    createStorables(): ProtocolStorables1_13;
    getComponentRewriter(): ComponentRewriter1_13<ClientboundPacketType>;
    getEntityRewriter(): EntityPacketRewriter1_13;
    getItemRewriter(): ItemPacketRewriter1_13;
    getLastColorChar(arg0: string): string;
    getLogger(): ProtocolLogger;
    getMappingData(): MappingData1_13;
    init(arg0: UserConnection): void;
    onMappingDataLoaded(): void;
    register(arg0: ViaProviders): void;
    registerPackets(): void;
    rewriteTeamMemberName(arg0: string): string;
    // private writeDeclareRecipes(arg0: PacketWrapper): void;
}