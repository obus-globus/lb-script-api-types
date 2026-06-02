import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { AbstractProtocol } from '../../../../../com/viaversion/viaversion/api/protocol/AbstractProtocol.d.ts'
import type { PacketWrapper } from '../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { PacketTypesProvider } from '../../../../../com/viaversion/viaversion/api/protocol/packet/provider/PacketTypesProvider.d.ts'
import type { ClientboundPacket1_20_3 } from '../../../../../com/viaversion/viaversion/protocols/v1_20_2to1_20_3/packet/ClientboundPacket1_20_3.d.ts'
import type { ServerboundPacket1_20_3 } from '../../../../../com/viaversion/viaversion/protocols/v1_20_2to1_20_3/packet/ServerboundPacket1_20_3.d.ts'
import type { MappingData1_20_5 } from '../../../../../com/viaversion/viaversion/protocols/v1_20_3to1_20_5/data/MappingData1_20_5.d.ts'
import type { ClientboundPacket1_20_5 } from '../../../../../com/viaversion/viaversion/protocols/v1_20_3to1_20_5/packet/ClientboundPacket1_20_5.d.ts'
import type { ServerboundPacket1_20_5 } from '../../../../../com/viaversion/viaversion/protocols/v1_20_3to1_20_5/packet/ServerboundPacket1_20_5.d.ts'
import type { BlockItemPacketRewriter1_20_5 } from '../../../../../com/viaversion/viaversion/protocols/v1_20_3to1_20_5/rewriter/BlockItemPacketRewriter1_20_5.d.ts'
import type { ComponentRewriter1_20_5 } from '../../../../../com/viaversion/viaversion/protocols/v1_20_3to1_20_5/rewriter/ComponentRewriter1_20_5.d.ts'
import type { EntityPacketRewriter1_20_5 } from '../../../../../com/viaversion/viaversion/protocols/v1_20_3to1_20_5/rewriter/EntityPacketRewriter1_20_5.d.ts'
import type { ParticleRewriter1_20_5 } from '../../../../../com/viaversion/viaversion/protocols/v1_20_3to1_20_5/rewriter/ParticleRewriter1_20_5.d.ts'
import type { AcknowledgedMessagesStorage } from '../../../../../com/viaversion/viaversion/protocols/v1_20_3to1_20_5/storage/AcknowledgedMessagesStorage.d.ts'
import type { BlockRewriter } from '../../../../../com/viaversion/viaversion/rewriter/BlockRewriter.d.ts'
import type { TagRewriter } from '../../../../../com/viaversion/viaversion/rewriter/TagRewriter.d.ts'
import type { JsonNBTComponentRewriter } from '../../../../../com/viaversion/viaversion/rewriter/text/JsonNBTComponentRewriter.d.ts'
import type { ProtocolLogger } from '../../../../../com/viaversion/viaversion/util/ProtocolLogger.d.ts'
export class Protocol1_20_3To1_20_5 extends AbstractProtocol<ClientboundPacket1_20_3, ClientboundPacket1_20_5, ServerboundPacket1_20_3, ServerboundPacket1_20_5> {
    static LOGGER: ProtocolLogger;
    static MAPPINGS: MappingData1_20_5;
    static strictErrorHandling: boolean;
    constructor()
    readonly blockRewriter: BlockRewriter<ClientboundPacket1_20_3>;
    readonly componentRewriter: ComponentRewriter1_20_5<ClientboundPacket1_20_3>;
    readonly entityRewriter: EntityPacketRewriter1_20_5;
    readonly itemRewriter: BlockItemPacketRewriter1_20_5;
    readonly particleRewriter: ParticleRewriter1_20_5;
    readonly tagRewriter: TagRewriter<ClientboundPacket1_20_3>;
    createPacketTypesProvider(): PacketTypesProvider<ClientboundPacket1_20_3, ClientboundPacket1_20_5, ServerboundPacket1_20_3, ServerboundPacket1_20_5>;
    // private fixChatAck(arg0: PacketWrapper, arg1: AcknowledgedMessagesStorage): void;
    getBlockRewriter(): BlockRewriter<ClientboundPacket1_20_3>;
    getComponentRewriter(): JsonNBTComponentRewriter<ClientboundPacket1_20_3>;
    getEntityRewriter(): EntityPacketRewriter1_20_5;
    getItemRewriter(): BlockItemPacketRewriter1_20_5;
    getLogger(): ProtocolLogger;
    getMappingData(): MappingData1_20_5;
    getParticleRewriter(): ParticleRewriter1_20_5;
    getTagRewriter(): TagRewriter<ClientboundPacket1_20_3>;
    init(arg0: UserConnection): void;
    onMappingDataLoaded(): void;
    registerPackets(): void;
    // private writeSpoofedChatAck(arg0: PacketWrapper, arg1: AcknowledgedMessagesStorage): void;
}