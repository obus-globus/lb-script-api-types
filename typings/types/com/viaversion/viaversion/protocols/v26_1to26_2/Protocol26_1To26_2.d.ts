import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { MappingData } from '../../../../../com/viaversion/viaversion/api/data/MappingData.d.ts'
import type { StructuredDataKeys1_21_11 } from '../../../../../com/viaversion/viaversion/api/minecraft/data/version/StructuredDataKeys1_21_11.d.ts'
import type { StructuredDataKeys26_2 } from '../../../../../com/viaversion/viaversion/api/minecraft/data/version/StructuredDataKeys26_2.d.ts'
import type { EntityDataTypes26_1 } from '../../../../../com/viaversion/viaversion/api/minecraft/entitydata/types/EntityDataTypes26_1.d.ts'
import type { AbstractProtocol } from '../../../../../com/viaversion/viaversion/api/protocol/AbstractProtocol.d.ts'
import type { PacketTypesProvider } from '../../../../../com/viaversion/viaversion/api/protocol/packet/provider/PacketTypesProvider.d.ts'
import type { Types1_20_5 } from '../../../../../com/viaversion/viaversion/api/type/types/version/Types1_20_5.d.ts'
import type { ProtocolStorablesBase } from '../../../../../com/viaversion/viaversion/connection/ProtocolStorablesBase.d.ts'
import type { ClientboundPacket26_1 } from '../../../../../com/viaversion/viaversion/protocols/v1_21_11to26_1/packet/ClientboundPacket26_1.d.ts'
import type { ServerboundPacket26_1 } from '../../../../../com/viaversion/viaversion/protocols/v1_21_11to26_1/packet/ServerboundPacket26_1.d.ts'
import type { RecipeDisplayRewriter1_21_5 } from '../../../../../com/viaversion/viaversion/protocols/v1_21_4to1_21_5/rewriter/RecipeDisplayRewriter1_21_5.d.ts'
import type { BlockItemPacketRewriter26_2 } from '../../../../../com/viaversion/viaversion/protocols/v26_1to26_2/rewriter/BlockItemPacketRewriter26_2.d.ts'
import type { EntityPacketRewriter26_2 } from '../../../../../com/viaversion/viaversion/protocols/v26_1to26_2/rewriter/EntityPacketRewriter26_2.d.ts'
import type { BlockRewriter } from '../../../../../com/viaversion/viaversion/rewriter/BlockRewriter.d.ts'
import type { ParticleRewriter } from '../../../../../com/viaversion/viaversion/rewriter/ParticleRewriter.d.ts'
import type { RecipeDisplayRewriter } from '../../../../../com/viaversion/viaversion/rewriter/RecipeDisplayRewriter.d.ts'
import type { RegistryDataRewriter } from '../../../../../com/viaversion/viaversion/rewriter/RegistryDataRewriter.d.ts'
import type { TagRewriter } from '../../../../../com/viaversion/viaversion/rewriter/TagRewriter.d.ts'
import type { NBTComponentRewriter } from '../../../../../com/viaversion/viaversion/rewriter/text/NBTComponentRewriter.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
export class Protocol26_1To26_2 extends AbstractProtocol<ClientboundPacket26_1, ClientboundPacket26_1, ServerboundPacket26_1, ServerboundPacket26_1> {
    static MAPPINGS: MappingData;
    constructor()
    readonly blockRewriter: BlockRewriter<ClientboundPacket26_1>;
    readonly componentRewriter: NBTComponentRewriter<ClientboundPacket26_1>;
    readonly entityRewriter: EntityPacketRewriter26_2;
    readonly itemRewriter: BlockItemPacketRewriter26_2;
    readonly particleRewriter: ParticleRewriter<ClientboundPacket26_1>;
    readonly recipeRewriter: RecipeDisplayRewriter1_21_5<ClientboundPacket26_1>;
    readonly registryDataRewriter: RegistryDataRewriter;
    // private sessionId: UUID;
    readonly tagRewriter: TagRewriter<ClientboundPacket26_1>;
    createPacketTypesProvider(): PacketTypesProvider<ClientboundPacket26_1, ClientboundPacket26_1, ServerboundPacket26_1, ServerboundPacket26_1>;
    createStorables(): ProtocolStorablesBase;
    getBlockRewriter(): BlockRewriter<ClientboundPacket26_1>;
    getComponentRewriter(): NBTComponentRewriter<ClientboundPacket26_1>;
    getEntityRewriter(): EntityPacketRewriter26_2;
    getItemRewriter(): BlockItemPacketRewriter26_2;
    getMappingData(): MappingData;
    getParticleRewriter(): ParticleRewriter<ClientboundPacket26_1>;
    getRecipeRewriter(): RecipeDisplayRewriter<ClientboundPacket26_1>;
    getRegistryDataRewriter(): RegistryDataRewriter;
    getTagRewriter(): TagRewriter<ClientboundPacket26_1>;
    init(arg0: UserConnection): void;
    mappedTypes(): Types1_20_5<StructuredDataKeys26_2, EntityDataTypes26_1>;
    onMappingDataLoaded(): void;
    registerPackets(): void;
    types(): Types1_20_5<StructuredDataKeys1_21_11, EntityDataTypes26_1>;
}