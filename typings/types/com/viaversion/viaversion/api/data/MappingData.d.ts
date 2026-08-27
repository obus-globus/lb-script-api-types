import type { BiMappings } from '../../../../../com/viaversion/viaversion/api/data/BiMappings.d.ts'
import type { FullMappings } from '../../../../../com/viaversion/viaversion/api/data/FullMappings.d.ts'
import type { MappingData$MappingType } from '../../../../../com/viaversion/viaversion/api/data/MappingData$MappingType.d.ts'
import type { Mappings } from '../../../../../com/viaversion/viaversion/api/data/Mappings.d.ts'
import type { ParticleMappings } from '../../../../../com/viaversion/viaversion/api/data/ParticleMappings.d.ts'
import type { RegistryType } from '../../../../../com/viaversion/viaversion/api/minecraft/RegistryType.d.ts'
import type { TagData } from '../../../../../com/viaversion/viaversion/api/minecraft/TagData.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface MappingData extends Object{
    changedBlocks(): (Object | null)[];
    changedEnvironmentAttributes(): string[];
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
    load(): void;
}