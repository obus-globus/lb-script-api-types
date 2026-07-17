import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { MappingDataBase } from '../../../../../com/viaversion/viaversion/api/data/MappingDataBase.d.ts'
import type { EntityTypes26_2 } from '../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityTypes26_2.d.ts'
import type { JsonObject } from '../../../../../com/viaversion/viaversion/libs/gson/JsonObject.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Logger } from '../../../../../java/util/logging/Logger.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { BlockStateUpgrader } from '../../../../../net/raphimc/viabedrock/api/chunk/blockstate/BlockStateUpgrader.d.ts'
import type { ItemUpgrader } from '../../../../../net/raphimc/viabedrock/api/item/ItemUpgrader.d.ts'
import type { BedrockBlockState } from '../../../../../net/raphimc/viabedrock/api/model/BedrockBlockState.d.ts'
import type { BlockState } from '../../../../../net/raphimc/viabedrock/api/model/BlockState.d.ts'
import type { ResourcePack } from '../../../../../net/raphimc/viabedrock/api/resourcepack/ResourcePack.d.ts'
import type { ResourcePack$Key } from '../../../../../net/raphimc/viabedrock/api/resourcepack/ResourcePack$Key.d.ts'
import type { SoundDefinitions$ConfiguredSound } from '../../../../../net/raphimc/viabedrock/api/resourcepack/definition/SoundDefinitions$ConfiguredSound.d.ts'
import type { BedrockMappingData$JavaItemMapping } from '../../../../../net/raphimc/viabedrock/protocol/data/BedrockMappingData$JavaItemMapping.d.ts'
import type { BedrockMappingData$JavaParticle } from '../../../../../net/raphimc/viabedrock/protocol/data/BedrockMappingData$JavaParticle.d.ts'
import type { BedrockMappingData$JavaSound } from '../../../../../net/raphimc/viabedrock/protocol/data/BedrockMappingData$JavaSound.d.ts'
import type { BedrockMappingData$LevelEventMapping } from '../../../../../net/raphimc/viabedrock/protocol/data/BedrockMappingData$LevelEventMapping.d.ts'
import type { ActorDataIDs } from '../../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/generated/ActorDataIDs.d.ts'
import type { ActorFlags } from '../../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/generated/ActorFlags.d.ts'
import type { ContainerType } from '../../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/generated/ContainerType.d.ts'
import type { DataItemType } from '../../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/generated/DataItemType.d.ts'
import type { Enchant_Type } from '../../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/generated/Enchant_Type.d.ts'
import type { LevelEvent } from '../../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/generated/LevelEvent.d.ts'
import type { NoteBlockInstrument } from '../../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/generated/NoteBlockInstrument.d.ts'
import type { ParticleType } from '../../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/generated/ParticleType.d.ts'
import type { SharedTypes_Legacy_ActorDamageCause } from '../../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/generated/SharedTypes_Legacy_ActorDamageCause.d.ts'
export class BedrockMappingData extends MappingDataBase {
    constructor()
    readonly bedrockBiomeDefinitions: Map$Entry<string, Tag>[];
    readonly bedrockBiomes: JavaMap<string, number>;
    readonly bedrockBlockItems: string[];
    readonly bedrockBlockSounds: JavaMap<string, string>;
    readonly bedrockBlockStateUpgrader: BlockStateUpgrader;
    readonly bedrockBlockStates: BedrockBlockState[];
    readonly bedrockBlockTraits: JavaMap<string, JavaMap<string, JavaMap<string, string[]>>>;
    readonly bedrockCustomBlockTags: JavaMap<string, string>;
    readonly bedrockCustomItemTags: JavaMap<string, string>;
    readonly bedrockEffects: JavaMap<string, number>;
    readonly bedrockEntities: JavaMap<string, number>;
    readonly bedrockEntityDataTypes: JavaMap<ActorDataIDs, DataItemType>;
    readonly bedrockEntityFlagMoLangQueries: JavaMap<ActorFlags, string>;
    readonly bedrockGameRules: JavaMap<string, Object>;
    readonly bedrockItemTags: JavaMap<string, string[]>;
    readonly bedrockItemUpgrader: ItemUpgrader;
    readonly bedrockLegacyBlockStates: JavaMap<any, any>;
    readonly bedrockLegacyBlocks: JavaMap<string, number>;
    readonly bedrockLevelSoundEvents: JavaMap<string, JavaMap<string, SoundDefinitions$ConfiguredSound>>;
    readonly bedrockMetaItems: string[];
    readonly bedrockNoteBlockInstrumentSounds: JavaMap<NoteBlockInstrument, string>;
    readonly bedrockResourcePacks: JavaMap<ResourcePack$Key, ResourcePack>;
    readonly bedrockSkinPacks: JavaMap<ResourcePack$Key, ResourcePack>;
    readonly bedrockToJavaBannerPatterns: JavaMap<string, string>;
    readonly bedrockToJavaBiomeExtraData: JavaMap<string, JavaMap<string, Object>>;
    readonly bedrockToJavaBlockItems: JavaMap<string, JavaMap<BlockState, BedrockMappingData$JavaItemMapping>>;
    readonly bedrockToJavaBlockStates: JavaMap<BlockState, BlockState>;
    readonly bedrockToJavaContainers: JavaMap<ContainerType, number>;
    readonly bedrockToJavaDamageCauses: JavaMap<SharedTypes_Legacy_ActorDamageCause, string>;
    readonly bedrockToJavaEffects: JavaMap<string, string>;
    readonly bedrockToJavaEnchantments: JavaMap<Enchant_Type, string>;
    readonly bedrockToJavaEntities: JavaMap<string, EntityTypes26_2>;
    readonly bedrockToJavaExperimentalFeatures: JavaMap<string, string>;
    readonly bedrockToJavaLevelEventParticles: JavaMap<ParticleType, BedrockMappingData$JavaParticle>;
    readonly bedrockToJavaLevelEvents: JavaMap<LevelEvent, BedrockMappingData$LevelEventMapping>;
    readonly bedrockToJavaMetaItems: JavaMap<string, JavaMap<number, BedrockMappingData$JavaItemMapping>>;
    readonly bedrockToJavaPaintings: JavaMap<string, string>;
    readonly bedrockToJavaParticles: JavaMap<string, BedrockMappingData$JavaParticle>;
    readonly bedrockToJavaSounds: JavaMap<string, BedrockMappingData$JavaSound>;
    readonly bedrockVanillaResourcePacks: ResourcePack[];
    readonly javaBiomes: JavaMap<string, number>;
    readonly javaBlockEntities: JavaMap<string, number>;
    readonly javaBlockStates: JavaMap<BlockState, number>;
    readonly javaBlocks: JavaMap<string, number>;
    readonly javaCommandArgumentTypes: JavaMap<string, number>;
    readonly javaEffects: JavaMap<string, number>;
    readonly javaEntityAttributes: JavaMap<string, number>;
    readonly javaEntityDataFields: JavaMap<EntityTypes26_2, string[]>;
    readonly javaFluidBlockStates: (Object | null)[];
    readonly javaHeightMapBlockStates: JavaMap<string, (Object | null)[]>;
    readonly javaItems: JavaMap<string, number>;
    readonly javaParticles: JavaMap<string, number>;
    readonly javaPottedBlockStates: JavaMap<any, any>;
    readonly javaPreWaterloggedBlockStates: (Object | null)[];
    readonly javaRegistries: Map$Entry<string, Tag>[];
    readonly javaSounds: JavaMap<string, number>;
    readonly javaTags: Map$Entry<string, Tag>[];
    // private buildLegacyBlockStateMappings(): void;
    getBedrockBiomeDefinitions(): Map$Entry<string, Tag>[];
    getBedrockBiomes(): JavaMap<string, number>;
    getBedrockBlockItems(): string[];
    getBedrockBlockSounds(): JavaMap<string, string>;
    getBedrockBlockStateUpgrader(): BlockStateUpgrader;
    getBedrockBlockStates(): BedrockBlockState[];
    getBedrockBlockTraits(): JavaMap<string, JavaMap<string, JavaMap<string, string[]>>>;
    getBedrockCustomBlockTags(): JavaMap<string, string>;
    getBedrockCustomItemTags(): JavaMap<string, string>;
    getBedrockEffects(): JavaMap<string, number>;
    getBedrockEntities(): JavaMap<string, number>;
    getBedrockEntityDataTypes(): JavaMap<ActorDataIDs, DataItemType>;
    getBedrockEntityFlagMoLangQueries(): JavaMap<ActorFlags, string>;
    getBedrockGameRules(): JavaMap<string, Object>;
    getBedrockItemTags(): JavaMap<string, string[]>;
    getBedrockItemUpgrader(): ItemUpgrader;
    getBedrockLegacyBlockStates(): JavaMap<any, any>;
    getBedrockLegacyBlocks(): JavaMap<string, number>;
    getBedrockLevelSoundEvents(): JavaMap<string, JavaMap<string, SoundDefinitions$ConfiguredSound>>;
    getBedrockMetaItems(): string[];
    getBedrockNoteBlockInstrumentSounds(): JavaMap<NoteBlockInstrument, string>;
    getBedrockResourcePacks(): JavaMap<ResourcePack$Key, ResourcePack>;
    getBedrockSkinPacks(): JavaMap<ResourcePack$Key, ResourcePack>;
    getBedrockToJavaBannerPatterns(): JavaMap<string, string>;
    getBedrockToJavaBiomeExtraData(): JavaMap<string, JavaMap<string, Object>>;
    getBedrockToJavaBlockItems(): JavaMap<string, JavaMap<BlockState, BedrockMappingData$JavaItemMapping>>;
    getBedrockToJavaBlockStates(): JavaMap<BlockState, BlockState>;
    getBedrockToJavaContainers(): JavaMap<ContainerType, number>;
    getBedrockToJavaDamageCauses(): JavaMap<SharedTypes_Legacy_ActorDamageCause, string>;
    getBedrockToJavaEffects(): JavaMap<string, string>;
    getBedrockToJavaEnchantments(): JavaMap<Enchant_Type, string>;
    getBedrockToJavaEntities(): JavaMap<string, EntityTypes26_2>;
    getBedrockToJavaExperimentalFeatures(): JavaMap<string, string>;
    getBedrockToJavaLevelEventParticles(): JavaMap<ParticleType, BedrockMappingData$JavaParticle>;
    getBedrockToJavaLevelEvents(): JavaMap<LevelEvent, BedrockMappingData$LevelEventMapping>;
    getBedrockToJavaMetaItems(): JavaMap<string, JavaMap<number, BedrockMappingData$JavaItemMapping>>;
    getBedrockToJavaPaintings(): JavaMap<string, string>;
    getBedrockToJavaParticles(): JavaMap<string, BedrockMappingData$JavaParticle>;
    getBedrockToJavaSounds(): JavaMap<string, BedrockMappingData$JavaSound>;
    getBedrockVanillaResourcePacks(): ResourcePack[];
    getJavaBiomes(): JavaMap<string, number>;
    getJavaBlockEntities(): JavaMap<string, number>;
    getJavaBlockStates(): JavaMap<BlockState, number>;
    getJavaBlocks(): JavaMap<string, number>;
    getJavaCommandArgumentTypes(): JavaMap<string, number>;
    getJavaEffects(): JavaMap<string, number>;
    getJavaEntityAttributes(): JavaMap<string, number>;
    getJavaEntityDataFields(): JavaMap<EntityTypes26_2, string[]>;
    getJavaFluidBlockStates(): (Object | null)[];
    getJavaHeightMapBlockStates(): JavaMap<string, (Object | null)[]>;
    getJavaItems(): JavaMap<string, number>;
    getJavaParticles(): JavaMap<string, number>;
    getJavaPottedBlockStates(): JavaMap<any, any>;
    getJavaPreWaterloggedBlockStates(): (Object | null)[];
    getJavaRegistries(): Map$Entry<string, Tag>[];
    getJavaSounds(): JavaMap<string, number>;
    getJavaTags(): Map$Entry<string, Tag>[];
    getLogger(): Logger;
    load(): void;
    // private parseJavaItemData(arg0: JsonObject): BedrockMappingData$JavaItemMapping;
    // private parseJavaParticle(arg0: JsonObject): BedrockMappingData$JavaParticle;
    // private readJson(arg0: string): JsonObject;
    // private readJson<T extends unknown>(arg0: string, arg1: Class<T>): T;
    // private readNBT(arg0: string): Map$Entry<string, Tag>[];
}