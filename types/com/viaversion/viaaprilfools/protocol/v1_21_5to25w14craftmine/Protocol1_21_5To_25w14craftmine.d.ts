import type { ClientboundPacket25w14craftmine } from '../../../../../com/viaversion/viaaprilfools/protocol/v1_21_5to25w14craftmine/packet/ClientboundPacket25w14craftmine.d.ts'
import type { ServerboundPacket25w14craftmine } from '../../../../../com/viaversion/viaaprilfools/protocol/v1_21_5to25w14craftmine/packet/ServerboundPacket25w14craftmine.d.ts'
import type { BlockItemPacketRewriter25w14craftmine } from '../../../../../com/viaversion/viaaprilfools/protocol/v1_21_5to25w14craftmine/rewriter/BlockItemPacketRewriter25w14craftmine.d.ts'
import type { EntityPacketRewriter25w14craftmine } from '../../../../../com/viaversion/viaaprilfools/protocol/v1_21_5to25w14craftmine/rewriter/EntityPacketRewriter25w14craftmine.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { MappingData } from '../../../../../com/viaversion/viaversion/api/data/MappingData.d.ts'
import type { AbstractProtocol } from '../../../../../com/viaversion/viaversion/api/protocol/AbstractProtocol.d.ts'
import type { PacketTypesProvider } from '../../../../../com/viaversion/viaversion/api/protocol/packet/provider/PacketTypesProvider.d.ts'
import type { VersionedTypesHolder } from '../../../../../com/viaversion/viaversion/api/type/types/version/VersionedTypesHolder.d.ts'
import type { ClientboundPacket1_21_5 } from '../../../../../com/viaversion/viaversion/protocols/v1_21_4to1_21_5/packet/ClientboundPacket1_21_5.d.ts'
import type { ServerboundPacket1_21_5 } from '../../../../../com/viaversion/viaversion/protocols/v1_21_4to1_21_5/packet/ServerboundPacket1_21_5.d.ts'
import type { ParticleRewriter } from '../../../../../com/viaversion/viaversion/rewriter/ParticleRewriter.d.ts'
import type { RegistryDataRewriter } from '../../../../../com/viaversion/viaversion/rewriter/RegistryDataRewriter.d.ts'
import type { TagRewriter } from '../../../../../com/viaversion/viaversion/rewriter/TagRewriter.d.ts'
import type { NBTComponentRewriter } from '../../../../../com/viaversion/viaversion/rewriter/text/NBTComponentRewriter.d.ts'
export class Protocol1_21_5To_25w14craftmine extends AbstractProtocol<ClientboundPacket1_21_5, ClientboundPacket25w14craftmine, ServerboundPacket1_21_5, ServerboundPacket25w14craftmine> {
    static MAPPINGS: MappingData;
    constructor()
    readonly componentRewriter: NBTComponentRewriter<ClientboundPacket1_21_5>;
    readonly entityRewriter: EntityPacketRewriter25w14craftmine;
    readonly itemRewriter: BlockItemPacketRewriter25w14craftmine;
    readonly particleRewriter: ParticleRewriter<ClientboundPacket1_21_5>;
    readonly registryDataRewriter: RegistryDataRewriter;
    readonly tagRewriter: TagRewriter<ClientboundPacket1_21_5>;
    applySharedRegistrations(): void;
    createPacketTypesProvider(): PacketTypesProvider<ClientboundPacket1_21_5, ClientboundPacket25w14craftmine, ServerboundPacket1_21_5, ServerboundPacket25w14craftmine>;
    getComponentRewriter(): NBTComponentRewriter<ClientboundPacket1_21_5>;
    getEntityRewriter(): EntityPacketRewriter25w14craftmine;
    getItemRewriter(): BlockItemPacketRewriter25w14craftmine;
    getMappingData(): MappingData;
    getParticleRewriter(): ParticleRewriter<ClientboundPacket1_21_5>;
    getRegistryDataRewriter(): RegistryDataRewriter;
    getTagRewriter(): TagRewriter<ClientboundPacket1_21_5>;
    init(arg0: UserConnection): void;
    mappedTypes(): VersionedTypesHolder;
    onMappingDataLoaded(): void;
    registerPackets(): void;
    types(): VersionedTypesHolder;
}