import type { BackwardsProtocol } from '../../../../../com/viaversion/viabackwards/api/BackwardsProtocol.d.ts'
import type { BackwardsMappingData } from '../../../../../com/viaversion/viabackwards/api/data/BackwardsMappingData.d.ts'
import type { BackwardsRegistryRewriter } from '../../../../../com/viaversion/viabackwards/api/rewriters/BackwardsRegistryRewriter.d.ts'
import type { NBTComponentRewriter } from '../../../../../com/viaversion/viabackwards/api/rewriters/text/NBTComponentRewriter.d.ts'
import type { BlockItemPacketRewriter1_21_6 } from '../../../../../com/viaversion/viabackwards/protocol/v1_21_6to1_21_5/rewriter/BlockItemPacketRewriter1_21_6.d.ts'
import type { EntityPacketRewriter1_21_6 } from '../../../../../com/viaversion/viabackwards/protocol/v1_21_6to1_21_5/rewriter/EntityPacketRewriter1_21_6.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ViaProviders } from '../../../../../com/viaversion/viaversion/api/platform/providers/ViaProviders.d.ts'
import type { PacketWrapper } from '../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { PacketTypesProvider } from '../../../../../com/viaversion/viaversion/api/protocol/packet/provider/PacketTypesProvider.d.ts'
import type { VersionedTypesHolder } from '../../../../../com/viaversion/viaversion/api/type/types/version/VersionedTypesHolder.d.ts'
import type { ClientboundPacket1_21_5 } from '../../../../../com/viaversion/viaversion/protocols/v1_21_4to1_21_5/packet/ClientboundPacket1_21_5.d.ts'
import type { ServerboundPacket1_21_5 } from '../../../../../com/viaversion/viaversion/protocols/v1_21_4to1_21_5/packet/ServerboundPacket1_21_5.d.ts'
import type { ClientboundPacket1_21_6 } from '../../../../../com/viaversion/viaversion/protocols/v1_21_5to1_21_6/packet/ClientboundPacket1_21_6.d.ts'
import type { ServerboundPacket1_21_6 } from '../../../../../com/viaversion/viaversion/protocols/v1_21_5to1_21_6/packet/ServerboundPacket1_21_6.d.ts'
import type { BlockRewriter } from '../../../../../com/viaversion/viaversion/rewriter/BlockRewriter.d.ts'
import type { ParticleRewriter } from '../../../../../com/viaversion/viaversion/rewriter/ParticleRewriter.d.ts'
import type { RecipeDisplayRewriter } from '../../../../../com/viaversion/viaversion/rewriter/RecipeDisplayRewriter.d.ts'
import type { TagRewriter } from '../../../../../com/viaversion/viaversion/rewriter/TagRewriter.d.ts'
export class Protocol1_21_6To1_21_5 extends BackwardsProtocol<ClientboundPacket1_21_6, ClientboundPacket1_21_5, ServerboundPacket1_21_6, ServerboundPacket1_21_5> {
    static MAPPINGS: BackwardsMappingData;
    constructor()
    readonly blockRewriter: BlockRewriter<ClientboundPacket1_21_6>;
    readonly entityRewriter: EntityPacketRewriter1_21_6;
    readonly itemRewriter: BlockItemPacketRewriter1_21_6;
    readonly particleRewriter: ParticleRewriter<ClientboundPacket1_21_6>;
    readonly recipeRewriter: RecipeDisplayRewriter<ClientboundPacket1_21_6>;
    readonly registryDataRewriter: BackwardsRegistryRewriter;
    readonly tagRewriter: TagRewriter<ClientboundPacket1_21_6>;
    // private translatableRewriter: NBTComponentRewriter<ClientboundPacket1_21_6>;
    // private clearDialog(arg0: PacketWrapper): void;
    createPacketTypesProvider(): PacketTypesProvider<ClientboundPacket1_21_6, ClientboundPacket1_21_5, ServerboundPacket1_21_6, ServerboundPacket1_21_5>;
    // private fixSoundSource(arg0: PacketWrapper): void;
    getBlockRewriter(): BlockRewriter<ClientboundPacket1_21_6>;
    getComponentRewriter(): NBTComponentRewriter<ClientboundPacket1_21_6>;
    getEntityRewriter(): EntityPacketRewriter1_21_6;
    getItemRewriter(): BlockItemPacketRewriter1_21_6;
    getMappingData(): BackwardsMappingData;
    getParticleRewriter(): ParticleRewriter<ClientboundPacket1_21_6>;
    getRecipeRewriter(): RecipeDisplayRewriter<ClientboundPacket1_21_6>;
    getRegistryDataRewriter(): BackwardsRegistryRewriter;
    getTagRewriter(): TagRewriter<ClientboundPacket1_21_6>;
    // private handleClickEvents(arg0: PacketWrapper): void;
    init(arg0: UserConnection): void;
    mappedTypes(): VersionedTypesHolder;
    register(arg0: ViaProviders): void;
    registerPackets(): void;
    // private storeServerLinks(arg0: PacketWrapper): void;
    types(): VersionedTypesHolder;
    // private updateTags(arg0: PacketWrapper): void;
}