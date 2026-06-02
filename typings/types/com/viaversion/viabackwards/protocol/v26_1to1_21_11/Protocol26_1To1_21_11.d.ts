import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { BackwardsProtocol } from '../../../../../com/viaversion/viabackwards/api/BackwardsProtocol.d.ts'
import type { BackwardsMappingData } from '../../../../../com/viaversion/viabackwards/api/data/BackwardsMappingData.d.ts'
import type { BackwardsRegistryRewriter } from '../../../../../com/viaversion/viabackwards/api/rewriters/BackwardsRegistryRewriter.d.ts'
import type { NBTComponentRewriter } from '../../../../../com/viaversion/viabackwards/api/rewriters/text/NBTComponentRewriter.d.ts'
import type { BlockItemPacketRewriter26_1 } from '../../../../../com/viaversion/viabackwards/protocol/v26_1to1_21_11/rewriter/BlockItemPacketRewriter26_1.d.ts'
import type { EntityPacketRewriter26_1 } from '../../../../../com/viaversion/viabackwards/protocol/v26_1to1_21_11/rewriter/EntityPacketRewriter26_1.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { StructuredDataKeys1_21_11 } from '../../../../../com/viaversion/viaversion/api/minecraft/data/version/StructuredDataKeys1_21_11.d.ts'
import type { EntityDataTypes1_21_11 } from '../../../../../com/viaversion/viaversion/api/minecraft/entitydata/types/EntityDataTypes1_21_11.d.ts'
import type { EntityDataTypes26_1 } from '../../../../../com/viaversion/viaversion/api/minecraft/entitydata/types/EntityDataTypes26_1.d.ts'
import type { PacketTypesProvider } from '../../../../../com/viaversion/viaversion/api/protocol/packet/provider/PacketTypesProvider.d.ts'
import type { Types1_20_5 } from '../../../../../com/viaversion/viaversion/api/type/types/version/Types1_20_5.d.ts'
import type { Types26_1 } from '../../../../../com/viaversion/viaversion/api/type/types/version/Types26_1.d.ts'
import type { ClientboundPacket26_1 } from '../../../../../com/viaversion/viaversion/protocols/v1_21_11to26_1/packet/ClientboundPacket26_1.d.ts'
import type { ServerboundPacket26_1 } from '../../../../../com/viaversion/viaversion/protocols/v1_21_11to26_1/packet/ServerboundPacket26_1.d.ts'
import type { ServerboundPacket1_21_9 } from '../../../../../com/viaversion/viaversion/protocols/v1_21_7to1_21_9/packet/ServerboundPacket1_21_9.d.ts'
import type { ClientboundPacket1_21_11 } from '../../../../../com/viaversion/viaversion/protocols/v1_21_9to1_21_11/packet/ClientboundPacket1_21_11.d.ts'
import type { BlockRewriter } from '../../../../../com/viaversion/viaversion/rewriter/BlockRewriter.d.ts'
import type { ParticleRewriter } from '../../../../../com/viaversion/viaversion/rewriter/ParticleRewriter.d.ts'
import type { RecipeDisplayRewriter } from '../../../../../com/viaversion/viaversion/rewriter/RecipeDisplayRewriter.d.ts'
import type { TagRewriter } from '../../../../../com/viaversion/viaversion/rewriter/TagRewriter.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Protocol26_1To1_21_11 extends BackwardsProtocol<ClientboundPacket26_1, ClientboundPacket1_21_11, ServerboundPacket26_1, ServerboundPacket1_21_9> {
    static MAPPINGS: BackwardsMappingData;
    constructor()
    readonly blockRewriter: BlockRewriter<ClientboundPacket26_1>;
    readonly entityRewriter: EntityPacketRewriter26_1;
    readonly itemRewriter: BlockItemPacketRewriter26_1;
    readonly particleRewriter: ParticleRewriter<ClientboundPacket26_1>;
    readonly recipeRewriter: RecipeDisplayRewriter<ClientboundPacket26_1>;
    readonly registryDataRewriter: BackwardsRegistryRewriter;
    readonly tagRewriter: TagRewriter<ClientboundPacket26_1>;
    // private translatableRewriter: NBTComponentRewriter<ClientboundPacket26_1>;
    createPacketTypesProvider(): PacketTypesProvider<ClientboundPacket26_1, ClientboundPacket1_21_11, ServerboundPacket26_1, ServerboundPacket1_21_9>;
    getBlockRewriter(): BlockRewriter<ClientboundPacket26_1>;
    getComponentRewriter(): NBTComponentRewriter<ClientboundPacket26_1>;
    getEntityRewriter(): EntityPacketRewriter26_1;
    getItemRewriter(): BlockItemPacketRewriter26_1;
    getMappingData(): BackwardsMappingData;
    getParticleRewriter(): ParticleRewriter<ClientboundPacket26_1>;
    getRecipeRewriter(): RecipeDisplayRewriter<ClientboundPacket26_1>;
    getRegistryDataRewriter(): BackwardsRegistryRewriter;
    getTagRewriter(): TagRewriter<ClientboundPacket26_1>;
    init(arg0: UserConnection): void;
    mappedTypes(): Types1_20_5<StructuredDataKeys1_21_11, EntityDataTypes1_21_11>;
    registerPackets(): void;
    // private removeEntityNamePrefix(arg0: string, arg1: Map$Entry<string, Tag>[]): void;
    // private swapEntityNameAffix(arg0: string, arg1: Map$Entry<string, Tag>[]): void;
    types(): Types26_1<StructuredDataKeys1_21_11, EntityDataTypes26_1>;
}