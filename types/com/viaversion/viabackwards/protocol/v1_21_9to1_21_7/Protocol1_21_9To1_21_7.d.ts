import type { BackwardsProtocol } from '../../../../../com/viaversion/viabackwards/api/BackwardsProtocol.d.ts'
import type { BackwardsMappingData } from '../../../../../com/viaversion/viabackwards/api/data/BackwardsMappingData.d.ts'
import type { BackwardsRegistryRewriter } from '../../../../../com/viaversion/viabackwards/api/rewriters/BackwardsRegistryRewriter.d.ts'
import type { NBTComponentRewriter } from '../../../../../com/viaversion/viabackwards/api/rewriters/text/NBTComponentRewriter.d.ts'
import type { BlockItemPacketRewriter1_21_9 } from '../../../../../com/viaversion/viabackwards/protocol/v1_21_9to1_21_7/rewriter/BlockItemPacketRewriter1_21_9.d.ts'
import type { EntityPacketRewriter1_21_9 } from '../../../../../com/viaversion/viabackwards/protocol/v1_21_9to1_21_7/rewriter/EntityPacketRewriter1_21_9.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { StructuredDataKeys1_21_5 } from '../../../../../com/viaversion/viaversion/api/minecraft/data/version/StructuredDataKeys1_21_5.d.ts'
import type { EntityDataTypes1_21_5 } from '../../../../../com/viaversion/viaversion/api/minecraft/entitydata/types/EntityDataTypes1_21_5.d.ts'
import type { PacketTypesProvider } from '../../../../../com/viaversion/viaversion/api/protocol/packet/provider/PacketTypesProvider.d.ts'
import type { Types1_20_5 } from '../../../../../com/viaversion/viaversion/api/type/types/version/Types1_20_5.d.ts'
import type { VersionedTypesHolder } from '../../../../../com/viaversion/viaversion/api/type/types/version/VersionedTypesHolder.d.ts'
import type { ClientboundPacket1_21_6 } from '../../../../../com/viaversion/viaversion/protocols/v1_21_5to1_21_6/packet/ClientboundPacket1_21_6.d.ts'
import type { ServerboundPacket1_21_6 } from '../../../../../com/viaversion/viaversion/protocols/v1_21_5to1_21_6/packet/ServerboundPacket1_21_6.d.ts'
import type { ClientboundPacket1_21_9 } from '../../../../../com/viaversion/viaversion/protocols/v1_21_7to1_21_9/packet/ClientboundPacket1_21_9.d.ts'
import type { ServerboundPacket1_21_9 } from '../../../../../com/viaversion/viaversion/protocols/v1_21_7to1_21_9/packet/ServerboundPacket1_21_9.d.ts'
import type { BlockRewriter } from '../../../../../com/viaversion/viaversion/rewriter/BlockRewriter.d.ts'
import type { ParticleRewriter } from '../../../../../com/viaversion/viaversion/rewriter/ParticleRewriter.d.ts'
import type { RecipeDisplayRewriter } from '../../../../../com/viaversion/viaversion/rewriter/RecipeDisplayRewriter.d.ts'
import type { TagRewriter } from '../../../../../com/viaversion/viaversion/rewriter/TagRewriter.d.ts'
export class Protocol1_21_9To1_21_7 extends BackwardsProtocol<ClientboundPacket1_21_9, ClientboundPacket1_21_6, ServerboundPacket1_21_9, ServerboundPacket1_21_6> {
    static MAPPINGS: BackwardsMappingData;
    constructor()
    readonly blockRewriter: BlockRewriter<ClientboundPacket1_21_9>;
    readonly entityRewriter: EntityPacketRewriter1_21_9;
    readonly itemRewriter: BlockItemPacketRewriter1_21_9;
    readonly particleRewriter: ParticleRewriter<ClientboundPacket1_21_9>;
    readonly recipeRewriter: RecipeDisplayRewriter<ClientboundPacket1_21_9>;
    readonly registryDataRewriter: BackwardsRegistryRewriter;
    readonly tagRewriter: TagRewriter<ClientboundPacket1_21_9>;
    // private translatableRewriter: NBTComponentRewriter<ClientboundPacket1_21_9>;
    createPacketTypesProvider(): PacketTypesProvider<ClientboundPacket1_21_9, ClientboundPacket1_21_6, ServerboundPacket1_21_9, ServerboundPacket1_21_6>;
    getBlockRewriter(): BlockRewriter<ClientboundPacket1_21_9>;
    getComponentRewriter(): NBTComponentRewriter<ClientboundPacket1_21_9>;
    getEntityRewriter(): EntityPacketRewriter1_21_9;
    getItemRewriter(): BlockItemPacketRewriter1_21_9;
    getMappingData(): BackwardsMappingData;
    getParticleRewriter(): ParticleRewriter<ClientboundPacket1_21_9>;
    getRecipeRewriter(): RecipeDisplayRewriter<ClientboundPacket1_21_9>;
    getRegistryDataRewriter(): BackwardsRegistryRewriter;
    getTagRewriter(): TagRewriter<ClientboundPacket1_21_9>;
    init(arg0: UserConnection): void;
    mappedTypes(): Types1_20_5<StructuredDataKeys1_21_5, EntityDataTypes1_21_5>;
    registerPackets(): void;
    types(): VersionedTypesHolder;
}