import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { MappingData } from '../../../../../com/viaversion/viaversion/api/data/MappingData.d.ts'
import type { AbstractProtocol } from '../../../../../com/viaversion/viaversion/api/protocol/AbstractProtocol.d.ts'
import type { PacketWrapper } from '../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { PacketTypesProvider } from '../../../../../com/viaversion/viaversion/api/protocol/packet/provider/PacketTypesProvider.d.ts'
import type { VersionedTypesHolder } from '../../../../../com/viaversion/viaversion/api/type/types/version/VersionedTypesHolder.d.ts'
import type { ServerboundPacket1_20_5 } from '../../../../../com/viaversion/viaversion/protocols/v1_20_3to1_20_5/packet/ServerboundPacket1_20_5.d.ts'
import type { ClientboundPacket1_21 } from '../../../../../com/viaversion/viaversion/protocols/v1_20_5to1_21/packet/ClientboundPacket1_21.d.ts'
import type { ClientboundPacket1_21_2 } from '../../../../../com/viaversion/viaversion/protocols/v1_21to1_21_2/packet/ClientboundPacket1_21_2.d.ts'
import type { ServerboundPacket1_21_2 } from '../../../../../com/viaversion/viaversion/protocols/v1_21to1_21_2/packet/ServerboundPacket1_21_2.d.ts'
import type { BlockItemPacketRewriter1_21_2 } from '../../../../../com/viaversion/viaversion/protocols/v1_21to1_21_2/rewriter/BlockItemPacketRewriter1_21_2.d.ts'
import type { ComponentRewriter1_21_2 } from '../../../../../com/viaversion/viaversion/protocols/v1_21to1_21_2/rewriter/ComponentRewriter1_21_2.d.ts'
import type { EntityPacketRewriter1_21_2 } from '../../../../../com/viaversion/viaversion/protocols/v1_21to1_21_2/rewriter/EntityPacketRewriter1_21_2.d.ts'
import type { ParticleRewriter1_21_2 } from '../../../../../com/viaversion/viaversion/protocols/v1_21to1_21_2/rewriter/ParticleRewriter1_21_2.d.ts'
import type { ProtocolStorables1_21_2 } from '../../../../../com/viaversion/viaversion/protocols/v1_21to1_21_2/storage/ProtocolStorables1_21_2.d.ts'
import type { BlockRewriter } from '../../../../../com/viaversion/viaversion/rewriter/BlockRewriter.d.ts'
import type { RegistryDataRewriter } from '../../../../../com/viaversion/viaversion/rewriter/RegistryDataRewriter.d.ts'
import type { SoundRewriter } from '../../../../../com/viaversion/viaversion/rewriter/SoundRewriter.d.ts'
import type { TagRewriter } from '../../../../../com/viaversion/viaversion/rewriter/TagRewriter.d.ts'
export class Protocol1_21To1_21_2 extends AbstractProtocol<ClientboundPacket1_21, ClientboundPacket1_21_2, ServerboundPacket1_20_5, ServerboundPacket1_21_2> {
    static MAPPINGS: MappingData;
    constructor()
    readonly blockRewriter: BlockRewriter<ClientboundPacket1_21>;
    readonly componentRewriter: ComponentRewriter1_21_2;
    readonly entityRewriter: EntityPacketRewriter1_21_2;
    readonly itemRewriter: BlockItemPacketRewriter1_21_2;
    readonly particleRewriter: ParticleRewriter1_21_2;
    readonly registryDataRewriter: RegistryDataRewriter;
    readonly soundRewriter: SoundRewriter<ClientboundPacket1_21>;
    readonly tagRewriter: TagRewriter<ClientboundPacket1_21>;
    // private clientInformation(arg0: PacketWrapper): void;
    createPacketTypesProvider(): PacketTypesProvider<ClientboundPacket1_21, ClientboundPacket1_21_2, ServerboundPacket1_20_5, ServerboundPacket1_21_2>;
    createStorables(): ProtocolStorables1_21_2;
    getBlockRewriter(): BlockRewriter<ClientboundPacket1_21>;
    getComponentRewriter(): ComponentRewriter1_21_2;
    getEntityRewriter(): EntityPacketRewriter1_21_2;
    getItemRewriter(): BlockItemPacketRewriter1_21_2;
    getMappingData(): MappingData;
    getParticleRewriter(): ParticleRewriter1_21_2;
    getRegistryDataRewriter(): RegistryDataRewriter;
    getSoundRewriter(): SoundRewriter<ClientboundPacket1_21>;
    getTagRewriter(): TagRewriter<ClientboundPacket1_21>;
    init(arg0: UserConnection): void;
    mappedTypes(): VersionedTypesHolder;
    onMappingDataLoaded(): void;
    registerPackets(): void;
    // private registryDataRewriter(): RegistryDataRewriter;
    types(): VersionedTypesHolder;
}