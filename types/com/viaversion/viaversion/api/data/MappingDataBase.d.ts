import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { BiMappings } from '../../../../../com/viaversion/viaversion/api/data/BiMappings.d.ts'
import type { FullMappings } from '../../../../../com/viaversion/viaversion/api/data/FullMappings.d.ts'
import type { MappingData } from '../../../../../com/viaversion/viaversion/api/data/MappingData.d.ts'
import type { MappingData$MappingType } from '../../../../../com/viaversion/viaversion/api/data/MappingData$MappingType.d.ts'
import type { MappingDataLoader$IdentifiersPair } from '../../../../../com/viaversion/viaversion/api/data/MappingDataLoader$IdentifiersPair.d.ts'
import type { Mappings } from '../../../../../com/viaversion/viaversion/api/data/Mappings.d.ts'
import type { ParticleMappings } from '../../../../../com/viaversion/viaversion/api/data/ParticleMappings.d.ts'
import type { RegistryType } from '../../../../../com/viaversion/viaversion/api/minecraft/RegistryType.d.ts'
import type { TagData } from '../../../../../com/viaversion/viaversion/api/minecraft/TagData.d.ts'
import type { Logger } from '../../../../../java/util/logging/Logger.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class MappingDataBase extends Object implements MappingData {
    constructor(arg0: string, arg1: string)
    argumentTypeMappings: FullMappings;
    attributeMappings: FullMappings;
    blockEntityMappings: FullMappings;
    blockMappings: BiMappings;
    blockStateMappings: Mappings;
    // private changedBlocks: (Object | null)[];
    enchantmentMappings: Mappings;
    entityMappings: FullMappings;
    // private itemDataSerializerMappings: FullMappings;
    itemMappings: BiMappings;
    // private mappedVersion: string;
    menuMappings: Mappings;
    paintingMappings: Mappings;
    particleMappings: ParticleMappings;
    recipeSerializerMappings: FullMappings;
    slotDisplayMappings: FullMappings;
    soundMappings: Mappings;
    statisticsMappings: Mappings;
    // private tags: { [key in RegistryType]: TagData[] };
    // private unmappedVersion: string;
    changedBlocks(): (Object | null)[];
    checkValidity(arg0: number, arg1: number, arg2: string): number;
    getArgumentTypeMappings(): FullMappings;
    getAttributeMappings(): FullMappings;
    getBlockEntityMappings(): FullMappings;
    getBlockMappings(): Mappings;
    getBlockStateMappings(): Mappings;
    getDataComponentSerializerMappings(): FullMappings;
    getEnchantmentMappings(): Mappings;
    getEntityMappings(): FullMappings;
    getFullBlockMappings(): FullMappings;
    getFullItemMappings(): FullMappings;
    getFullMappings(arg0: MappingData$MappingType): FullMappings;
    getFullSoundMappings(): FullMappings;
    getItemMappings(): BiMappings;
    getLogger(): Logger;
    getMenuMappings(): Mappings;
    getNewAttributeId(arg0: number): number;
    getNewBlockId(arg0: number): number;
    getNewBlockStateId(arg0: number): number;
    getNewItemId(arg0: number): number;
    getNewParticleId(arg0: number): number;
    getNewSoundId(arg0: number): number;
    getOldBlockId(arg0: number): number;
    getOldItemId(arg0: number): number;
    getOldSoundId(arg0: number): number;
    getPaintingMappings(): Mappings;
    getParticleMappings(): ParticleMappings;
    getRecipeSerializerMappings(): FullMappings;
    getSlotDisplayMappings(): FullMappings;
    getSoundMappings(): Mappings;
    getStatisticsMappings(): Mappings;
    getTags(arg0: RegistryType): TagData[];
    identifiersFromGlobalIds(arg0: Map$Entry<string, Tag>[], arg1: Map$Entry<string, Tag>[], arg2: string): MappingDataLoader$IdentifiersPair;
    identifiersFromGlobalIds(arg0: Map$Entry<string, Tag>[], arg1: string): string[];
    load(): void;
    loadBiMappings(arg0: Map$Entry<string, Tag>[], arg1: string): BiMappings;
    loadExtras(arg0: Map$Entry<string, Tag>[]): void;
    loadFullMappings(arg0: Map$Entry<string, Tag>[], arg1: Map$Entry<string, Tag>[], arg2: Map$Entry<string, Tag>[], arg3: string): FullMappings;
    loadFullOrBiMappings(arg0: Map$Entry<string, Tag>[], arg1: Map$Entry<string, Tag>[], arg2: Map$Entry<string, Tag>[], arg3: string): BiMappings;
    loadMappings(arg0: Map$Entry<string, Tag>[], arg1: string): Mappings;
    // private loadTags(arg0: RegistryType, arg1: Map$Entry<string, Tag>[]): void;
    readMappedIdentifiersFile(arg0: string): Map$Entry<string, Tag>[];
    readMappingsFile(arg0: string): Map$Entry<string, Tag>[];
    readUnmappedIdentifiersFile(arg0: string): Map$Entry<string, Tag>[];
}