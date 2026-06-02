import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { MappingData } from '../../../../../com/viaversion/viaversion/api/data/MappingData.d.ts'
import type { StructuredDataKeys1_21_11 } from '../../../../../com/viaversion/viaversion/api/minecraft/data/version/StructuredDataKeys1_21_11.d.ts'
import type { EntityDataTypes26_1 } from '../../../../../com/viaversion/viaversion/api/minecraft/entitydata/types/EntityDataTypes26_1.d.ts'
import type { AbstractProtocol } from '../../../../../com/viaversion/viaversion/api/protocol/AbstractProtocol.d.ts'
import type { PacketTypesProvider } from '../../../../../com/viaversion/viaversion/api/protocol/packet/provider/PacketTypesProvider.d.ts'
import type { Types1_20_5 } from '../../../../../com/viaversion/viaversion/api/type/types/version/Types1_20_5.d.ts'
import type { BlockItemPacketRewriter99_1 } from '../../../../../com/viaversion/viaversion/protocols/template/BlockItemPacketRewriter99_1.d.ts'
import type { EntityPacketRewriter99_1 } from '../../../../../com/viaversion/viaversion/protocols/template/EntityPacketRewriter99_1.d.ts'
import type { ClientboundPacket26_1 } from '../../../../../com/viaversion/viaversion/protocols/v1_21_11to26_1/packet/ClientboundPacket26_1.d.ts'
import type { ServerboundPacket1_21_9 } from '../../../../../com/viaversion/viaversion/protocols/v1_21_7to1_21_9/packet/ServerboundPacket1_21_9.d.ts'
import type { BlockRewriter } from '../../../../../com/viaversion/viaversion/rewriter/BlockRewriter.d.ts'
import type { ParticleRewriter } from '../../../../../com/viaversion/viaversion/rewriter/ParticleRewriter.d.ts'
import type { RegistryDataRewriter } from '../../../../../com/viaversion/viaversion/rewriter/RegistryDataRewriter.d.ts'
import type { TagRewriter } from '../../../../../com/viaversion/viaversion/rewriter/TagRewriter.d.ts'
import type { NBTComponentRewriter } from '../../../../../com/viaversion/viaversion/rewriter/text/NBTComponentRewriter.d.ts'
export class Protocol98_1To99_1 extends AbstractProtocol<ClientboundPacket26_1, ClientboundPacket26_1, ServerboundPacket1_21_9, ServerboundPacket1_21_9> {
    static MAPPINGS: MappingData;
    constructor()
    readonly blockRewriter: BlockRewriter<ClientboundPacket26_1>;
    readonly componentRewriter: NBTComponentRewriter<ClientboundPacket26_1>;
    readonly entityRewriter: EntityPacketRewriter99_1;
    readonly itemRewriter: BlockItemPacketRewriter99_1;
    readonly particleRewriter: ParticleRewriter<ClientboundPacket26_1>;
    readonly registryDataRewriter: RegistryDataRewriter;
    readonly tagRewriter: TagRewriter<ClientboundPacket26_1>;
    createPacketTypesProvider(): PacketTypesProvider<ClientboundPacket26_1, ClientboundPacket26_1, ServerboundPacket1_21_9, ServerboundPacket1_21_9>;
    getBlockRewriter(): BlockRewriter<ClientboundPacket26_1>;
    getComponentRewriter(): NBTComponentRewriter<ClientboundPacket26_1>;
    getEntityRewriter(): EntityPacketRewriter99_1;
    getItemRewriter(): BlockItemPacketRewriter99_1;
    getMappingData(): MappingData;
    getParticleRewriter(): ParticleRewriter<ClientboundPacket26_1>;
    getRegistryDataRewriter(): RegistryDataRewriter;
    getTagRewriter(): TagRewriter<ClientboundPacket26_1>;
    init(arg0: UserConnection): void;
    mappedTypes(): Types1_20_5<StructuredDataKeys1_21_11, EntityDataTypes26_1>;
    onMappingDataLoaded(): void;
    registerPackets(): void;
    types(): Types1_20_5<StructuredDataKeys1_21_11, EntityDataTypes26_1>;
}