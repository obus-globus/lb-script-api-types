import type { BackwardsProtocol } from '../../../../../com/viaversion/viabackwards/api/BackwardsProtocol.d.ts'
import type { BackwardsMappingData } from '../../../../../com/viaversion/viabackwards/api/data/BackwardsMappingData.d.ts'
import type { BackwardsRegistryRewriter } from '../../../../../com/viaversion/viabackwards/api/rewriters/BackwardsRegistryRewriter.d.ts'
import type { NBTComponentRewriter } from '../../../../../com/viaversion/viabackwards/api/rewriters/text/NBTComponentRewriter.d.ts'
import type { BlockItemPacketRewriter26_2 } from '../../../../../com/viaversion/viabackwards/protocol/v26_2to26_1/rewriter/BlockItemPacketRewriter26_2.d.ts'
import type { EntityPacketRewriter26_2 } from '../../../../../com/viaversion/viabackwards/protocol/v26_2to26_1/rewriter/EntityPacketRewriter26_2.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { StructuredDataKeys1_21_11 } from '../../../../../com/viaversion/viaversion/api/minecraft/data/version/StructuredDataKeys1_21_11.d.ts'
import type { StructuredDataKeys26_2 } from '../../../../../com/viaversion/viaversion/api/minecraft/data/version/StructuredDataKeys26_2.d.ts'
import type { EntityDataTypes26_1 } from '../../../../../com/viaversion/viaversion/api/minecraft/entitydata/types/EntityDataTypes26_1.d.ts'
import type { PacketTypesProvider } from '../../../../../com/viaversion/viaversion/api/protocol/packet/provider/PacketTypesProvider.d.ts'
import type { Types26_1 } from '../../../../../com/viaversion/viaversion/api/type/types/version/Types26_1.d.ts'
import type { ClientboundPacket26_1 } from '../../../../../com/viaversion/viaversion/protocols/v1_21_11to26_1/packet/ClientboundPacket26_1.d.ts'
import type { ServerboundPacket26_1 } from '../../../../../com/viaversion/viaversion/protocols/v1_21_11to26_1/packet/ServerboundPacket26_1.d.ts'
import type { BlockRewriter } from '../../../../../com/viaversion/viaversion/rewriter/BlockRewriter.d.ts'
import type { ParticleRewriter } from '../../../../../com/viaversion/viaversion/rewriter/ParticleRewriter.d.ts'
import type { RecipeDisplayRewriter } from '../../../../../com/viaversion/viaversion/rewriter/RecipeDisplayRewriter.d.ts'
import type { TagRewriter } from '../../../../../com/viaversion/viaversion/rewriter/TagRewriter.d.ts'
export class Protocol26_2To26_1 extends BackwardsProtocol<ClientboundPacket26_1, ClientboundPacket26_1, ServerboundPacket26_1, ServerboundPacket26_1> {
    static MAPPINGS: BackwardsMappingData;
    constructor()
    readonly blockRewriter: BlockRewriter<ClientboundPacket26_1>;
    readonly entityRewriter: EntityPacketRewriter26_2;
    readonly itemRewriter: BlockItemPacketRewriter26_2;
    readonly particleRewriter: ParticleRewriter<ClientboundPacket26_1>;
    readonly recipeRewriter: RecipeDisplayRewriter<ClientboundPacket26_1>;
    readonly registryDataRewriter: BackwardsRegistryRewriter;
    readonly tagRewriter: TagRewriter<ClientboundPacket26_1>;
    // private translatableRewriter: NBTComponentRewriter<ClientboundPacket26_1>;
    createPacketTypesProvider(): PacketTypesProvider<ClientboundPacket26_1, ClientboundPacket26_1, ServerboundPacket26_1, ServerboundPacket26_1>;
    getBlockRewriter(): BlockRewriter<ClientboundPacket26_1>;
    getComponentRewriter(): NBTComponentRewriter<ClientboundPacket26_1>;
    getEntityRewriter(): EntityPacketRewriter26_2;
    getItemRewriter(): BlockItemPacketRewriter26_2;
    getMappingData(): BackwardsMappingData;
    getParticleRewriter(): ParticleRewriter<ClientboundPacket26_1>;
    getRecipeRewriter(): RecipeDisplayRewriter<ClientboundPacket26_1>;
    getRegistryDataRewriter(): BackwardsRegistryRewriter;
    getTagRewriter(): TagRewriter<ClientboundPacket26_1>;
    init(arg0: UserConnection): void;
    mappedTypes(): Types26_1<StructuredDataKeys1_21_11, EntityDataTypes26_1>;
    registerPackets(): void;
    types(): Types26_1<StructuredDataKeys26_2, EntityDataTypes26_1>;
}