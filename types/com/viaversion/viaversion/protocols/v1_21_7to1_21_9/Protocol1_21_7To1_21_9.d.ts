import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { MappingData } from '../../../../../com/viaversion/viaversion/api/data/MappingData.d.ts'
import type { StructuredDataKeys1_21_5 } from '../../../../../com/viaversion/viaversion/api/minecraft/data/version/StructuredDataKeys1_21_5.d.ts'
import type { EntityDataTypes1_21_5 } from '../../../../../com/viaversion/viaversion/api/minecraft/entitydata/types/EntityDataTypes1_21_5.d.ts'
import type { EntityDataTypes1_21_9 } from '../../../../../com/viaversion/viaversion/api/minecraft/entitydata/types/EntityDataTypes1_21_9.d.ts'
import type { AbstractProtocol } from '../../../../../com/viaversion/viaversion/api/protocol/AbstractProtocol.d.ts'
import type { PacketTypesProvider } from '../../../../../com/viaversion/viaversion/api/protocol/packet/provider/PacketTypesProvider.d.ts'
import type { Types1_20_5 } from '../../../../../com/viaversion/viaversion/api/type/types/version/Types1_20_5.d.ts'
import type { ClientboundPacket1_21_6 } from '../../../../../com/viaversion/viaversion/protocols/v1_21_5to1_21_6/packet/ClientboundPacket1_21_6.d.ts'
import type { ServerboundPacket1_21_6 } from '../../../../../com/viaversion/viaversion/protocols/v1_21_5to1_21_6/packet/ServerboundPacket1_21_6.d.ts'
import type { ClientboundPacket1_21_9 } from '../../../../../com/viaversion/viaversion/protocols/v1_21_7to1_21_9/packet/ClientboundPacket1_21_9.d.ts'
import type { ServerboundPacket1_21_9 } from '../../../../../com/viaversion/viaversion/protocols/v1_21_7to1_21_9/packet/ServerboundPacket1_21_9.d.ts'
import type { BlockItemPacketRewriter1_21_9 } from '../../../../../com/viaversion/viaversion/protocols/v1_21_7to1_21_9/rewriter/BlockItemPacketRewriter1_21_9.d.ts'
import type { EntityPacketRewriter1_21_9 } from '../../../../../com/viaversion/viaversion/protocols/v1_21_7to1_21_9/rewriter/EntityPacketRewriter1_21_9.d.ts'
import type { BlockRewriter } from '../../../../../com/viaversion/viaversion/rewriter/BlockRewriter.d.ts'
import type { ParticleRewriter } from '../../../../../com/viaversion/viaversion/rewriter/ParticleRewriter.d.ts'
import type { RecipeDisplayRewriter } from '../../../../../com/viaversion/viaversion/rewriter/RecipeDisplayRewriter.d.ts'
import type { RegistryDataRewriter } from '../../../../../com/viaversion/viaversion/rewriter/RegistryDataRewriter.d.ts'
import type { TagRewriter } from '../../../../../com/viaversion/viaversion/rewriter/TagRewriter.d.ts'
import type { NBTComponentRewriter } from '../../../../../com/viaversion/viaversion/rewriter/text/NBTComponentRewriter.d.ts'
export class Protocol1_21_7To1_21_9 extends AbstractProtocol<ClientboundPacket1_21_6, ClientboundPacket1_21_9, ServerboundPacket1_21_6, ServerboundPacket1_21_9> {
    static MAPPINGS: MappingData;
    constructor()
    readonly blockRewriter: BlockRewriter<ClientboundPacket1_21_6>;
    readonly componentRewriter: NBTComponentRewriter<ClientboundPacket1_21_6>;
    readonly entityRewriter: EntityPacketRewriter1_21_9;
    readonly itemRewriter: BlockItemPacketRewriter1_21_9;
    readonly particleRewriter: ParticleRewriter<ClientboundPacket1_21_6>;
    readonly recipeRewriter: RecipeDisplayRewriter<ClientboundPacket1_21_6>;
    readonly registryDataRewriter: RegistryDataRewriter;
    readonly tagRewriter: TagRewriter<ClientboundPacket1_21_6>;
    createPacketTypesProvider(): PacketTypesProvider<ClientboundPacket1_21_6, ClientboundPacket1_21_9, ServerboundPacket1_21_6, ServerboundPacket1_21_9>;
    getBlockRewriter(): BlockRewriter<ClientboundPacket1_21_6>;
    getComponentRewriter(): NBTComponentRewriter<ClientboundPacket1_21_6>;
    getEntityRewriter(): EntityPacketRewriter1_21_9;
    getItemRewriter(): BlockItemPacketRewriter1_21_9;
    getMappingData(): MappingData;
    getParticleRewriter(): ParticleRewriter<ClientboundPacket1_21_6>;
    getRecipeRewriter(): RecipeDisplayRewriter<ClientboundPacket1_21_6>;
    getRegistryDataRewriter(): RegistryDataRewriter;
    getTagRewriter(): TagRewriter<ClientboundPacket1_21_6>;
    init(arg0: UserConnection): void;
    mappedTypes(): Types1_20_5<StructuredDataKeys1_21_5, EntityDataTypes1_21_9>;
    onMappingDataLoaded(): void;
    registerPackets(): void;
    types(): Types1_20_5<StructuredDataKeys1_21_5, EntityDataTypes1_21_5>;
}