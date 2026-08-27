import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { AbstractProtocol } from '../../../../../com/viaversion/viaversion/api/protocol/AbstractProtocol.d.ts'
import type { PacketTypesProvider } from '../../../../../com/viaversion/viaversion/api/protocol/packet/provider/PacketTypesProvider.d.ts'
import type { VersionedTypesHolder } from '../../../../../com/viaversion/viaversion/api/type/types/version/VersionedTypesHolder.d.ts'
import type { ProtocolStorablesBase } from '../../../../../com/viaversion/viaversion/connection/ProtocolStorablesBase.d.ts'
import type { ClientboundPacket1_20_5 } from '../../../../../com/viaversion/viaversion/protocols/v1_20_3to1_20_5/packet/ClientboundPacket1_20_5.d.ts'
import type { ServerboundPacket1_20_5 } from '../../../../../com/viaversion/viaversion/protocols/v1_20_3to1_20_5/packet/ServerboundPacket1_20_5.d.ts'
import type { MappingData1_21 } from '../../../../../com/viaversion/viaversion/protocols/v1_20_5to1_21/data/MappingData1_21.d.ts'
import type { ClientboundPacket1_21 } from '../../../../../com/viaversion/viaversion/protocols/v1_20_5to1_21/packet/ClientboundPacket1_21.d.ts'
import type { BlockItemPacketRewriter1_21 } from '../../../../../com/viaversion/viaversion/protocols/v1_20_5to1_21/rewriter/BlockItemPacketRewriter1_21.d.ts'
import type { EntityPacketRewriter1_21 } from '../../../../../com/viaversion/viaversion/protocols/v1_20_5to1_21/rewriter/EntityPacketRewriter1_21.d.ts'
import type { BlockRewriter } from '../../../../../com/viaversion/viaversion/rewriter/BlockRewriter.d.ts'
import type { ParticleRewriter } from '../../../../../com/viaversion/viaversion/rewriter/ParticleRewriter.d.ts'
import type { TagRewriter } from '../../../../../com/viaversion/viaversion/rewriter/TagRewriter.d.ts'
import type { JsonNBTComponentRewriter } from '../../../../../com/viaversion/viaversion/rewriter/text/JsonNBTComponentRewriter.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
export class Protocol1_20_5To1_21 extends AbstractProtocol<ClientboundPacket1_20_5, ClientboundPacket1_21, ServerboundPacket1_20_5, ServerboundPacket1_20_5> {
    static MAPPINGS: MappingData1_21;
    static mapAttributeId(paramarg0: string): UUID;
    static mapAttributeUUID(paramarg0: UUID, paramarg1: string): string;
    constructor()
    readonly blockRewriter: BlockRewriter<ClientboundPacket1_20_5>;
    readonly componentRewriter: JsonNBTComponentRewriter<ClientboundPacket1_20_5>;
    readonly entityRewriter: EntityPacketRewriter1_21;
    readonly itemRewriter: BlockItemPacketRewriter1_21;
    readonly particleRewriter: ParticleRewriter<ClientboundPacket1_20_5>;
    readonly tagRewriter: TagRewriter<ClientboundPacket1_20_5>;
    createPacketTypesProvider(): PacketTypesProvider<ClientboundPacket1_20_5, ClientboundPacket1_21, ServerboundPacket1_20_5, ServerboundPacket1_20_5>;
    createStorables(): ProtocolStorablesBase;
    getBlockRewriter(): BlockRewriter<ClientboundPacket1_20_5>;
    getComponentRewriter(): JsonNBTComponentRewriter<ClientboundPacket1_20_5>;
    getEntityRewriter(): EntityPacketRewriter1_21;
    getItemRewriter(): BlockItemPacketRewriter1_21;
    getMappingData(): MappingData1_21;
    getParticleRewriter(): ParticleRewriter<ClientboundPacket1_20_5>;
    getTagRewriter(): TagRewriter<ClientboundPacket1_20_5>;
    init(arg0: UserConnection): void;
    mappedTypes(): VersionedTypesHolder;
    onMappingDataLoaded(): void;
    registerPackets(): void;
    types(): VersionedTypesHolder;
}