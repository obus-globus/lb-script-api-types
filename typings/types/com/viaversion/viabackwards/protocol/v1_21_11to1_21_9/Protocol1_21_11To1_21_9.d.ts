import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { BackwardsProtocol } from '../../../../../com/viaversion/viabackwards/api/BackwardsProtocol.d.ts'
import type { BackwardsMappingData } from '../../../../../com/viaversion/viabackwards/api/data/BackwardsMappingData.d.ts'
import type { BackwardsRegistryRewriter } from '../../../../../com/viaversion/viabackwards/api/rewriters/BackwardsRegistryRewriter.d.ts'
import type { NBTComponentRewriter } from '../../../../../com/viaversion/viabackwards/api/rewriters/text/NBTComponentRewriter.d.ts'
import type { BlockItemPacketRewriter1_21_11 } from '../../../../../com/viaversion/viabackwards/protocol/v1_21_11to1_21_9/rewriter/BlockItemPacketRewriter1_21_11.d.ts'
import type { EntityPacketRewriter1_21_11 } from '../../../../../com/viaversion/viabackwards/protocol/v1_21_11to1_21_9/rewriter/EntityPacketRewriter1_21_11.d.ts'
import type { ProtocolStorables1_21_11 } from '../../../../../com/viaversion/viabackwards/protocol/v1_21_11to1_21_9/storage/ProtocolStorables1_21_11.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { PacketTypesProvider } from '../../../../../com/viaversion/viaversion/api/protocol/packet/provider/PacketTypesProvider.d.ts'
import type { VersionedTypesHolder } from '../../../../../com/viaversion/viaversion/api/type/types/version/VersionedTypesHolder.d.ts'
import type { ClientboundPacket1_21_9 } from '../../../../../com/viaversion/viaversion/protocols/v1_21_7to1_21_9/packet/ClientboundPacket1_21_9.d.ts'
import type { ServerboundPacket1_21_9 } from '../../../../../com/viaversion/viaversion/protocols/v1_21_7to1_21_9/packet/ServerboundPacket1_21_9.d.ts'
import type { ClientboundPacket1_21_11 } from '../../../../../com/viaversion/viaversion/protocols/v1_21_9to1_21_11/packet/ClientboundPacket1_21_11.d.ts'
import type { BlockRewriter } from '../../../../../com/viaversion/viaversion/rewriter/BlockRewriter.d.ts'
import type { ParticleRewriter } from '../../../../../com/viaversion/viaversion/rewriter/ParticleRewriter.d.ts'
import type { RecipeDisplayRewriter } from '../../../../../com/viaversion/viaversion/rewriter/RecipeDisplayRewriter.d.ts'
import type { TagRewriter } from '../../../../../com/viaversion/viaversion/rewriter/TagRewriter.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Protocol1_21_11To1_21_9 extends BackwardsProtocol<ClientboundPacket1_21_11, ClientboundPacket1_21_9, ServerboundPacket1_21_9, ServerboundPacket1_21_9> {
    static MAPPINGS: BackwardsMappingData;
    constructor()
    readonly blockRewriter: BlockRewriter<ClientboundPacket1_21_11>;
    readonly entityRewriter: EntityPacketRewriter1_21_11;
    readonly itemRewriter: BlockItemPacketRewriter1_21_11;
    readonly particleRewriter: ParticleRewriter<ClientboundPacket1_21_11>;
    readonly recipeRewriter: RecipeDisplayRewriter<ClientboundPacket1_21_11>;
    readonly registryDataRewriter: BackwardsRegistryRewriter;
    readonly tagRewriter: TagRewriter<ClientboundPacket1_21_11>;
    // private translatableRewriter: NBTComponentRewriter<ClientboundPacket1_21_11>;
    createPacketTypesProvider(): PacketTypesProvider<ClientboundPacket1_21_11, ClientboundPacket1_21_9, ServerboundPacket1_21_9, ServerboundPacket1_21_9>;
    createStorables(): ProtocolStorables1_21_11;
    // private floatsToARGB(arg0: number, arg1: number, arg2: number): number;
    getBlockRewriter(): BlockRewriter<ClientboundPacket1_21_11>;
    getComponentRewriter(): NBTComponentRewriter<ClientboundPacket1_21_11>;
    getEntityRewriter(): EntityPacketRewriter1_21_11;
    getItemRewriter(): BlockItemPacketRewriter1_21_11;
    getMappingData(): BackwardsMappingData;
    getParticleRewriter(): ParticleRewriter<ClientboundPacket1_21_11>;
    getRecipeRewriter(): RecipeDisplayRewriter<ClientboundPacket1_21_11>;
    getRegistryDataRewriter(): BackwardsRegistryRewriter;
    getTagRewriter(): TagRewriter<ClientboundPacket1_21_11>;
    init(arg0: UserConnection): void;
    // private mapColor(arg0: Tag): Tag;
    mappedTypes(): VersionedTypesHolder;
    // private moveAttribute(arg0: Map$Entry<string, Tag>[], arg1: Map$Entry<string, Tag>[], arg2: string, arg3: string, arg4: (param0: Tag) => Tag, arg5: Tag): void;
    registerPackets(): void;
    types(): VersionedTypesHolder;
}