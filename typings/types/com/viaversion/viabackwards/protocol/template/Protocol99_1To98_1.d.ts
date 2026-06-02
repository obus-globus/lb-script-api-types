import type { BackwardsProtocol } from '../../../../../com/viaversion/viabackwards/api/BackwardsProtocol.d.ts'
import type { BackwardsMappingData } from '../../../../../com/viaversion/viabackwards/api/data/BackwardsMappingData.d.ts'
import type { BackwardsRegistryRewriter } from '../../../../../com/viaversion/viabackwards/api/rewriters/BackwardsRegistryRewriter.d.ts'
import type { NBTComponentRewriter } from '../../../../../com/viaversion/viabackwards/api/rewriters/text/NBTComponentRewriter.d.ts'
import type { BlockItemPacketRewriter99_1 } from '../../../../../com/viaversion/viabackwards/protocol/template/BlockItemPacketRewriter99_1.d.ts'
import type { EntityPacketRewriter99_1 } from '../../../../../com/viaversion/viabackwards/protocol/template/EntityPacketRewriter99_1.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { PacketTypesProvider } from '../../../../../com/viaversion/viaversion/api/protocol/packet/provider/PacketTypesProvider.d.ts'
import type { VersionedTypesHolder } from '../../../../../com/viaversion/viaversion/api/type/types/version/VersionedTypesHolder.d.ts'
import type { ClientboundPacket26_1 } from '../../../../../com/viaversion/viaversion/protocols/v1_21_11to26_1/packet/ClientboundPacket26_1.d.ts'
import type { ServerboundPacket1_21_9 } from '../../../../../com/viaversion/viaversion/protocols/v1_21_7to1_21_9/packet/ServerboundPacket1_21_9.d.ts'
import type { BlockRewriter } from '../../../../../com/viaversion/viaversion/rewriter/BlockRewriter.d.ts'
import type { ParticleRewriter } from '../../../../../com/viaversion/viaversion/rewriter/ParticleRewriter.d.ts'
import type { RecipeDisplayRewriter } from '../../../../../com/viaversion/viaversion/rewriter/RecipeDisplayRewriter.d.ts'
import type { TagRewriter } from '../../../../../com/viaversion/viaversion/rewriter/TagRewriter.d.ts'
export class Protocol99_1To98_1 extends BackwardsProtocol<ClientboundPacket26_1, ClientboundPacket26_1, ServerboundPacket1_21_9, ServerboundPacket1_21_9> {
    static MAPPINGS: BackwardsMappingData;
    constructor()
    readonly blockRewriter: BlockRewriter<ClientboundPacket26_1>;
    readonly entityRewriter: EntityPacketRewriter99_1;
    readonly itemRewriter: BlockItemPacketRewriter99_1;
    readonly particleRewriter: ParticleRewriter<ClientboundPacket26_1>;
    readonly recipeRewriter: RecipeDisplayRewriter<ClientboundPacket26_1>;
    readonly registryDataRewriter: BackwardsRegistryRewriter;
    readonly tagRewriter: TagRewriter<ClientboundPacket26_1>;
    // private translatableRewriter: NBTComponentRewriter<ClientboundPacket26_1>;
    createPacketTypesProvider(): PacketTypesProvider<ClientboundPacket26_1, ClientboundPacket26_1, ServerboundPacket1_21_9, ServerboundPacket1_21_9>;
    getBlockRewriter(): BlockRewriter<ClientboundPacket26_1>;
    getComponentRewriter(): NBTComponentRewriter<ClientboundPacket26_1>;
    getEntityRewriter(): EntityPacketRewriter99_1;
    getItemRewriter(): BlockItemPacketRewriter99_1;
    getMappingData(): BackwardsMappingData;
    getParticleRewriter(): ParticleRewriter<ClientboundPacket26_1>;
    getRecipeRewriter(): RecipeDisplayRewriter<ClientboundPacket26_1>;
    getRegistryDataRewriter(): BackwardsRegistryRewriter;
    getTagRewriter(): TagRewriter<ClientboundPacket26_1>;
    init(arg0: UserConnection): void;
    mappedTypes(): VersionedTypesHolder;
    registerPackets(): void;
    types(): VersionedTypesHolder;
}