import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { MappingData } from '../../../../../com/viaversion/viaversion/api/data/MappingData.d.ts'
import type { AbstractProtocol } from '../../../../../com/viaversion/viaversion/api/protocol/AbstractProtocol.d.ts'
import type { PacketTypesProvider } from '../../../../../com/viaversion/viaversion/api/protocol/packet/provider/PacketTypesProvider.d.ts'
import type { VersionedTypesHolder } from '../../../../../com/viaversion/viaversion/api/type/types/version/VersionedTypesHolder.d.ts'
import type { ClientboundPacket1_21_5 } from '../../../../../com/viaversion/viaversion/protocols/v1_21_4to1_21_5/packet/ClientboundPacket1_21_5.d.ts'
import type { ServerboundPacket1_21_5 } from '../../../../../com/viaversion/viaversion/protocols/v1_21_4to1_21_5/packet/ServerboundPacket1_21_5.d.ts'
import type { ClientboundPacket1_21_6 } from '../../../../../com/viaversion/viaversion/protocols/v1_21_5to1_21_6/packet/ClientboundPacket1_21_6.d.ts'
import type { ServerboundPacket1_21_6 } from '../../../../../com/viaversion/viaversion/protocols/v1_21_5to1_21_6/packet/ServerboundPacket1_21_6.d.ts'
import type { BlockItemPacketRewriter1_21_6 } from '../../../../../com/viaversion/viaversion/protocols/v1_21_5to1_21_6/rewriter/BlockItemPacketRewriter1_21_6.d.ts'
import type { EntityPacketRewriter1_21_6 } from '../../../../../com/viaversion/viaversion/protocols/v1_21_5to1_21_6/rewriter/EntityPacketRewriter1_21_6.d.ts'
import type { BlockRewriter } from '../../../../../com/viaversion/viaversion/rewriter/BlockRewriter.d.ts'
import type { ParticleRewriter } from '../../../../../com/viaversion/viaversion/rewriter/ParticleRewriter.d.ts'
import type { RecipeDisplayRewriter } from '../../../../../com/viaversion/viaversion/rewriter/RecipeDisplayRewriter.d.ts'
import type { RegistryDataRewriter } from '../../../../../com/viaversion/viaversion/rewriter/RegistryDataRewriter.d.ts'
import type { TagRewriter } from '../../../../../com/viaversion/viaversion/rewriter/TagRewriter.d.ts'
import type { NBTComponentRewriter } from '../../../../../com/viaversion/viaversion/rewriter/text/NBTComponentRewriter.d.ts'
export class Protocol1_21_5To1_21_6 extends AbstractProtocol<ClientboundPacket1_21_5, ClientboundPacket1_21_6, ServerboundPacket1_21_5, ServerboundPacket1_21_6> {
    static MAPPINGS: MappingData;
    constructor()
    readonly blockRewriter: BlockRewriter<ClientboundPacket1_21_5>;
    readonly componentRewriter: NBTComponentRewriter<ClientboundPacket1_21_5>;
    readonly entityRewriter: EntityPacketRewriter1_21_6;
    readonly itemRewriter: BlockItemPacketRewriter1_21_6;
    readonly particleRewriter: ParticleRewriter<ClientboundPacket1_21_5>;
    readonly recipeRewriter: RecipeDisplayRewriter<ClientboundPacket1_21_5>;
    readonly registryDataRewriter: RegistryDataRewriter;
    readonly tagRewriter: TagRewriter<ClientboundPacket1_21_5>;
    createPacketTypesProvider(): PacketTypesProvider<ClientboundPacket1_21_5, ClientboundPacket1_21_6, ServerboundPacket1_21_5, ServerboundPacket1_21_6>;
    getBlockRewriter(): BlockRewriter<ClientboundPacket1_21_5>;
    getComponentRewriter(): NBTComponentRewriter<ClientboundPacket1_21_5>;
    getEntityRewriter(): EntityPacketRewriter1_21_6;
    getItemRewriter(): BlockItemPacketRewriter1_21_6;
    getMappingData(): MappingData;
    getParticleRewriter(): ParticleRewriter<ClientboundPacket1_21_5>;
    getRecipeRewriter(): RecipeDisplayRewriter<ClientboundPacket1_21_5>;
    getRegistryDataRewriter(): RegistryDataRewriter;
    getTagRewriter(): TagRewriter<ClientboundPacket1_21_5>;
    init(arg0: UserConnection): void;
    mappedTypes(): VersionedTypesHolder;
    onMappingDataLoaded(): void;
    registerPackets(): void;
    types(): VersionedTypesHolder;
}