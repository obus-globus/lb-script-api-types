import type { BackwardsProtocol } from '../../../../../com/viaversion/viabackwards/api/BackwardsProtocol.d.ts'
import type { BackwardsMappingData } from '../../../../../com/viaversion/viabackwards/api/data/BackwardsMappingData.d.ts'
import type { BackwardsRegistryRewriter } from '../../../../../com/viaversion/viabackwards/api/rewriters/BackwardsRegistryRewriter.d.ts'
import type { JsonNBTComponentRewriter } from '../../../../../com/viaversion/viabackwards/api/rewriters/text/JsonNBTComponentRewriter.d.ts'
import type { BlockItemPacketRewriter1_21_4 } from '../../../../../com/viaversion/viabackwards/protocol/v1_21_4to1_21_2/rewriter/BlockItemPacketRewriter1_21_4.d.ts'
import type { EntityPacketRewriter1_21_4 } from '../../../../../com/viaversion/viabackwards/protocol/v1_21_4to1_21_2/rewriter/EntityPacketRewriter1_21_4.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { PacketTypesProvider } from '../../../../../com/viaversion/viaversion/api/protocol/packet/provider/PacketTypesProvider.d.ts'
import type { VersionedTypesHolder } from '../../../../../com/viaversion/viaversion/api/type/types/version/VersionedTypesHolder.d.ts'
import type { ServerboundPacket1_21_4 } from '../../../../../com/viaversion/viaversion/protocols/v1_21_2to1_21_4/packet/ServerboundPacket1_21_4.d.ts'
import type { ClientboundPacket1_21_2 } from '../../../../../com/viaversion/viaversion/protocols/v1_21to1_21_2/packet/ClientboundPacket1_21_2.d.ts'
import type { ServerboundPacket1_21_2 } from '../../../../../com/viaversion/viaversion/protocols/v1_21to1_21_2/packet/ServerboundPacket1_21_2.d.ts'
import type { BlockRewriter } from '../../../../../com/viaversion/viaversion/rewriter/BlockRewriter.d.ts'
import type { ParticleRewriter } from '../../../../../com/viaversion/viaversion/rewriter/ParticleRewriter.d.ts'
import type { RecipeDisplayRewriter } from '../../../../../com/viaversion/viaversion/rewriter/RecipeDisplayRewriter.d.ts'
import type { TagRewriter } from '../../../../../com/viaversion/viaversion/rewriter/TagRewriter.d.ts'
export class Protocol1_21_4To1_21_2 extends BackwardsProtocol<ClientboundPacket1_21_2, ClientboundPacket1_21_2, ServerboundPacket1_21_4, ServerboundPacket1_21_2> {
    static MAPPINGS: BackwardsMappingData;
    constructor()
    readonly blockRewriter: BlockRewriter<ClientboundPacket1_21_2>;
    readonly entityRewriter: EntityPacketRewriter1_21_4;
    readonly itemRewriter: BlockItemPacketRewriter1_21_4;
    readonly particleRewriter: ParticleRewriter<ClientboundPacket1_21_2>;
    readonly recipeRewriter: RecipeDisplayRewriter<ClientboundPacket1_21_2>;
    readonly registryDataRewriter: BackwardsRegistryRewriter;
    readonly tagRewriter: TagRewriter<ClientboundPacket1_21_2>;
    // private translatableRewriter: JsonNBTComponentRewriter<ClientboundPacket1_21_2>;
    createPacketTypesProvider(): PacketTypesProvider<ClientboundPacket1_21_2, ClientboundPacket1_21_2, ServerboundPacket1_21_4, ServerboundPacket1_21_2>;
    getBlockRewriter(): BlockRewriter<ClientboundPacket1_21_2>;
    getComponentRewriter(): JsonNBTComponentRewriter<ClientboundPacket1_21_2>;
    getEntityRewriter(): EntityPacketRewriter1_21_4;
    getItemRewriter(): BlockItemPacketRewriter1_21_4;
    getMappingData(): BackwardsMappingData;
    getParticleRewriter(): ParticleRewriter<ClientboundPacket1_21_2>;
    getRecipeRewriter(): RecipeDisplayRewriter<ClientboundPacket1_21_2>;
    getRegistryDataRewriter(): BackwardsRegistryRewriter;
    getTagRewriter(): TagRewriter<ClientboundPacket1_21_2>;
    init(arg0: UserConnection): void;
    // private itemModelIndex(arg0: string): number;
    mappedTypes(): VersionedTypesHolder;
    onMappingDataLoaded(): void;
    registerPackets(): void;
    types(): VersionedTypesHolder;
}