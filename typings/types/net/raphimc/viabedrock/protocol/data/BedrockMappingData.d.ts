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
    readonly bedrockBiomes: { [key: string]: number };
    readonly bedrockBlockItems: string[];
    readonly bedrockBlockSounds: { [key: string]: string };
    readonly bedrockBlockStateUpgrader: BlockStateUpgrader;
    readonly bedrockBlockStates: BedrockBlockState[];
    readonly bedrockBlockTraits: { [key: string]: { [key: string]: { [key: string]: string[] } } };
    readonly bedrockCustomBlockTags: { [key: string]: string };
    readonly bedrockCustomItemTags: { [key: string]: string };
    readonly bedrockEffects: { [key: string]: number };
    readonly bedrockEntities: { [key: string]: number };
    readonly bedrockEntityDataTypes: { [key in ActorDataIDs]: DataItemType };
    readonly bedrockEntityFlagMoLangQueries: { [key in ActorFlags]: string };
    readonly bedrockGameRules: { [key: string]: Object };
    readonly bedrockItemTags: { [key: string]: string[] };
    readonly bedrockItemUpgrader: ItemUpgrader;
    readonly bedrockLegacyBlockStates: { [key: string]: any };
    readonly bedrockLegacyBlocks: { [key: string]: number };
    readonly bedrockLevelSoundEvents: { [key: string]: { [key: string]: SoundDefinitions$ConfiguredSound } };
    readonly bedrockMetaItems: string[];
    readonly bedrockNoteBlockInstrumentSounds: { [key in NoteBlockInstrument]: string };
    readonly bedrockResourcePacks: Map<ResourcePack$Key, ResourcePack>;
    readonly bedrockSkinPacks: Map<ResourcePack$Key, ResourcePack>;
    readonly bedrockToJavaBannerPatterns: { [key: string]: string };
    readonly bedrockToJavaBiomeExtraData: { [key: string]: { [key: string]: Object } };
    readonly bedrockToJavaBlockItems: { [key: string]: Map<BlockState, BedrockMappingData$JavaItemMapping> };
    readonly bedrockToJavaBlockStates: Map<BlockState, BlockState>;
    readonly bedrockToJavaContainers: { [key in ContainerType]: number };
    readonly bedrockToJavaDamageCauses: { [key in SharedTypes_Legacy_ActorDamageCause]: string };
    readonly bedrockToJavaEffects: { [key: string]: string };
    readonly bedrockToJavaEnchantments: { [key in Enchant_Type]: string };
    readonly bedrockToJavaEntities: { [key: string]: EntityTypes26_2 };
    readonly bedrockToJavaExperimentalFeatures: { [key: string]: string };
    readonly bedrockToJavaLevelEventParticles: { [key in ParticleType]: BedrockMappingData$JavaParticle };
    readonly bedrockToJavaLevelEvents: { [key in LevelEvent]: BedrockMappingData$LevelEventMapping };
    readonly bedrockToJavaMetaItems: { [key: string]: { [key: number]: BedrockMappingData$JavaItemMapping } };
    readonly bedrockToJavaPaintings: { [key: string]: string };
    readonly bedrockToJavaParticles: { [key: string]: BedrockMappingData$JavaParticle };
    readonly bedrockToJavaSounds: { [key: string]: BedrockMappingData$JavaSound };
    readonly bedrockVanillaResourcePacks: ResourcePack[];
    readonly javaBiomes: { [key: string]: number };
    readonly javaBlockEntities: { [key: string]: number };
    readonly javaBlockStates: Map<BlockState, number>;
    readonly javaBlocks: { [key: string]: number };
    readonly javaCommandArgumentTypes: { [key: string]: number };
    readonly javaEffects: { [key: string]: number };
    readonly javaEntityAttributes: { [key: string]: number };
    readonly javaEntityDataFields: { [key in EntityTypes26_2]: string[] };
    readonly javaFluidBlockStates: (Object | null)[];
    readonly javaHeightMapBlockStates: { [key: string]: (Object | null)[] };
    readonly javaItems: { [key: string]: number };
    readonly javaParticles: { [key: string]: number };
    readonly javaPottedBlockStates: { [key: string]: any };
    readonly javaPreWaterloggedBlockStates: (Object | null)[];
    readonly javaRegistries: Map$Entry<string, Tag>[];
    readonly javaSounds: { [key: string]: number };
    readonly javaTags: Map$Entry<string, Tag>[];
    // private buildLegacyBlockStateMappings(): void;
    getBedrockBiomeDefinitions(): Map$Entry<string, Tag>[];
    getBedrockBiomes(): { [key: string]: number };
    getBedrockBlockItems(): string[];
    getBedrockBlockSounds(): { [key: string]: string };
    getBedrockBlockStateUpgrader(): BlockStateUpgrader;
    getBedrockBlockStates(): BedrockBlockState[];
    getBedrockBlockTraits(): { [key: string]: { [key: string]: { [key: string]: string[] } } };
    getBedrockCustomBlockTags(): { [key: string]: string };
    getBedrockCustomItemTags(): { [key: string]: string };
    getBedrockEffects(): { [key: string]: number };
    getBedrockEntities(): { [key: string]: number };
    getBedrockEntityDataTypes(): { [key in ActorDataIDs]: DataItemType };
    getBedrockEntityFlagMoLangQueries(): { [key in ActorFlags]: string };
    getBedrockGameRules(): { [key: string]: Object };
    getBedrockItemTags(): { [key: string]: string[] };
    getBedrockItemUpgrader(): ItemUpgrader;
    getBedrockLegacyBlockStates(): { [key: string]: any };
    getBedrockLegacyBlocks(): { [key: string]: number };
    getBedrockLevelSoundEvents(): { [key: string]: { [key: string]: SoundDefinitions$ConfiguredSound } };
    getBedrockMetaItems(): string[];
    getBedrockNoteBlockInstrumentSounds(): { [key in NoteBlockInstrument]: string };
    getBedrockResourcePacks(): Map<ResourcePack$Key, ResourcePack>;
    getBedrockSkinPacks(): Map<ResourcePack$Key, ResourcePack>;
    getBedrockToJavaBannerPatterns(): { [key: string]: string };
    getBedrockToJavaBiomeExtraData(): { [key: string]: { [key: string]: Object } };
    getBedrockToJavaBlockItems(): { [key: string]: Map<BlockState, BedrockMappingData$JavaItemMapping> };
    getBedrockToJavaBlockStates(): Map<BlockState, BlockState>;
    getBedrockToJavaContainers(): { [key in ContainerType]: number };
    getBedrockToJavaDamageCauses(): { [key in SharedTypes_Legacy_ActorDamageCause]: string };
    getBedrockToJavaEffects(): { [key: string]: string };
    getBedrockToJavaEnchantments(): { [key in Enchant_Type]: string };
    getBedrockToJavaEntities(): { [key: string]: EntityTypes26_2 };
    getBedrockToJavaExperimentalFeatures(): { [key: string]: string };
    getBedrockToJavaLevelEventParticles(): { [key in ParticleType]: BedrockMappingData$JavaParticle };
    getBedrockToJavaLevelEvents(): { [key in LevelEvent]: BedrockMappingData$LevelEventMapping };
    getBedrockToJavaMetaItems(): { [key: string]: { [key: number]: BedrockMappingData$JavaItemMapping } };
    getBedrockToJavaPaintings(): { [key: string]: string };
    getBedrockToJavaParticles(): { [key: string]: BedrockMappingData$JavaParticle };
    getBedrockToJavaSounds(): { [key: string]: BedrockMappingData$JavaSound };
    getBedrockVanillaResourcePacks(): ResourcePack[];
    getJavaBiomes(): { [key: string]: number };
    getJavaBlockEntities(): { [key: string]: number };
    getJavaBlockStates(): Map<BlockState, number>;
    getJavaBlocks(): { [key: string]: number };
    getJavaCommandArgumentTypes(): { [key: string]: number };
    getJavaEffects(): { [key: string]: number };
    getJavaEntityAttributes(): { [key: string]: number };
    getJavaEntityDataFields(): { [key in EntityTypes26_2]: string[] };
    getJavaFluidBlockStates(): (Object | null)[];
    getJavaHeightMapBlockStates(): { [key: string]: (Object | null)[] };
    getJavaItems(): { [key: string]: number };
    getJavaParticles(): { [key: string]: number };
    getJavaPottedBlockStates(): { [key: string]: any };
    getJavaPreWaterloggedBlockStates(): (Object | null)[];
    getJavaRegistries(): Map$Entry<string, Tag>[];
    getJavaSounds(): { [key: string]: number };
    getJavaTags(): Map$Entry<string, Tag>[];
    getLogger(): Logger;
    load(): void;
    // private parseJavaItemData(arg0: JsonObject): BedrockMappingData$JavaItemMapping;
    // private parseJavaParticle(arg0: JsonObject): BedrockMappingData$JavaParticle;
    // private readJson(arg0: string): JsonObject;
    // private readJson<T extends unknown>(arg0: string, arg1: Class<T>): T;
    // private readNBT(arg0: string): Map$Entry<string, Tag>[];
}