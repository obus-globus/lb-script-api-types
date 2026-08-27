import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { MappingData } from '../../../../../com/viaversion/viaversion/api/data/MappingData.d.ts'
import type { RegistryEntry } from '../../../../../com/viaversion/viaversion/api/minecraft/RegistryEntry.d.ts'
import type { StructuredDataKeys1_21_11 } from '../../../../../com/viaversion/viaversion/api/minecraft/data/version/StructuredDataKeys1_21_11.d.ts'
import type { EntityDataTypes1_21_11 } from '../../../../../com/viaversion/viaversion/api/minecraft/entitydata/types/EntityDataTypes1_21_11.d.ts'
import type { EntityDataTypes26_1 } from '../../../../../com/viaversion/viaversion/api/minecraft/entitydata/types/EntityDataTypes26_1.d.ts'
import type { AbstractProtocol } from '../../../../../com/viaversion/viaversion/api/protocol/AbstractProtocol.d.ts'
import type { PacketWrapper } from '../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { PacketTypesProvider } from '../../../../../com/viaversion/viaversion/api/protocol/packet/provider/PacketTypesProvider.d.ts'
import type { Types1_20_5 } from '../../../../../com/viaversion/viaversion/api/type/types/version/Types1_20_5.d.ts'
import type { ProtocolStorablesBase } from '../../../../../com/viaversion/viaversion/connection/ProtocolStorablesBase.d.ts'
import type { MappingData26_1 } from '../../../../../com/viaversion/viaversion/protocols/v1_21_11to26_1/data/MappingData26_1.d.ts'
import type { ClientboundPacket26_1 } from '../../../../../com/viaversion/viaversion/protocols/v1_21_11to26_1/packet/ClientboundPacket26_1.d.ts'
import type { ServerboundPacket26_1 } from '../../../../../com/viaversion/viaversion/protocols/v1_21_11to26_1/packet/ServerboundPacket26_1.d.ts'
import type { BlockItemPacketRewriter26_1 } from '../../../../../com/viaversion/viaversion/protocols/v1_21_11to26_1/rewriter/BlockItemPacketRewriter26_1.d.ts'
import type { EntityPacketRewriter26_1 } from '../../../../../com/viaversion/viaversion/protocols/v1_21_11to26_1/rewriter/EntityPacketRewriter26_1.d.ts'
import type { ServerboundPacket1_21_9 } from '../../../../../com/viaversion/viaversion/protocols/v1_21_7to1_21_9/packet/ServerboundPacket1_21_9.d.ts'
import type { ClientboundPacket1_21_11 } from '../../../../../com/viaversion/viaversion/protocols/v1_21_9to1_21_11/packet/ClientboundPacket1_21_11.d.ts'
import type { BlockRewriter } from '../../../../../com/viaversion/viaversion/rewriter/BlockRewriter.d.ts'
import type { ParticleRewriter } from '../../../../../com/viaversion/viaversion/rewriter/ParticleRewriter.d.ts'
import type { RecipeDisplayRewriter } from '../../../../../com/viaversion/viaversion/rewriter/RecipeDisplayRewriter.d.ts'
import type { RegistryDataRewriter } from '../../../../../com/viaversion/viaversion/rewriter/RegistryDataRewriter.d.ts'
import type { TagRewriter } from '../../../../../com/viaversion/viaversion/rewriter/TagRewriter.d.ts'
import type { NBTComponentRewriter } from '../../../../../com/viaversion/viaversion/rewriter/text/NBTComponentRewriter.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Protocol1_21_11To26_1 extends AbstractProtocol<ClientboundPacket1_21_11, ClientboundPacket26_1, ServerboundPacket1_21_9, ServerboundPacket26_1> {
    static MAPPINGS: MappingData26_1;
    static createJukeboxPlayableEntry(paramarg0: string): RegistryEntry;
    constructor()
    readonly blockRewriter: BlockRewriter<ClientboundPacket1_21_11>;
    readonly componentRewriter: NBTComponentRewriter<ClientboundPacket1_21_11>;
    readonly entityRewriter: EntityPacketRewriter26_1;
    readonly itemRewriter: BlockItemPacketRewriter26_1;
    readonly particleRewriter: ParticleRewriter<ClientboundPacket1_21_11>;
    readonly recipeRewriter: RecipeDisplayRewriter<ClientboundPacket1_21_11>;
    readonly registryDataRewriter: RegistryDataRewriter;
    readonly tagRewriter: TagRewriter<ClientboundPacket1_21_11>;
    // private addBabyAssetId(arg0: Map$Entry<string, Tag>[]): void;
    // private addEntityNamePrefix(arg0: string, arg1: Map$Entry<string, Tag>[]): void;
    // private addJukeboxPlayables(...arg0: string[]): void;
    // private addRequiredRegistryEntries(): void;
    // private addTrimMaterials(...arg0: string[]): void;
    // private ambientLightColor(arg0: number): number;
    createPacketTypesProvider(): PacketTypesProvider<ClientboundPacket1_21_11, ClientboundPacket26_1, ServerboundPacket1_21_9, ServerboundPacket26_1>;
    createStorables(): ProtocolStorablesBase;
    getBlockRewriter(): BlockRewriter<ClientboundPacket1_21_11>;
    getComponentRewriter(): NBTComponentRewriter<ClientboundPacket1_21_11>;
    getEntityRewriter(): EntityPacketRewriter26_1;
    getItemRewriter(): BlockItemPacketRewriter26_1;
    getMappingData(): MappingData;
    getParticleRewriter(): ParticleRewriter<ClientboundPacket1_21_11>;
    getRecipeRewriter(): RecipeDisplayRewriter<ClientboundPacket1_21_11>;
    getRegistryDataRewriter(): RegistryDataRewriter;
    getTagRewriter(): TagRewriter<ClientboundPacket1_21_11>;
    // private handleTags(arg0: PacketWrapper): void;
    init(arg0: UserConnection): void;
    mappedTypes(): Types1_20_5<StructuredDataKeys1_21_11, EntityDataTypes26_1>;
    onMappingDataLoaded(): void;
    registerPackets(): void;
    // private sendSoundVariants(arg0: PacketWrapper, arg1: string, arg2: Map$Entry<string, Tag>[]): void;
    // private swapAffixAndAddAssetId(arg0: string, arg1: string): void;
    // private swapEntityNameAffix(arg0: string, arg1: Map$Entry<string, Tag>[]): void;
    types(): Types1_20_5<StructuredDataKeys1_21_11, EntityDataTypes1_21_11>;
}