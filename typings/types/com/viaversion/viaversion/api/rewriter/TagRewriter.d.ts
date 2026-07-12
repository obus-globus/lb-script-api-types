import type { RegistryType } from '../../../../../com/viaversion/viaversion/api/minecraft/RegistryType.d.ts'
import type { TagData } from '../../../../../com/viaversion/viaversion/api/minecraft/TagData.d.ts'
import type { EntityType } from '../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { MappingDataListener } from '../../../../../com/viaversion/viaversion/api/rewriter/MappingDataListener.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface TagRewriter extends MappingDataListener, Object{
    addEmptyTag(arg0: RegistryType, arg1: string): void;
    addEmptyTags(arg0: RegistryType, ...arg1: string[]): void;
    addEntityTag(arg0: string, ...arg1: EntityType[]): void;
    addTag(arg0: RegistryType, arg1: string, ...arg2: number[]): void;
    addTagRaw(arg0: RegistryType, arg1: string, ...arg2: number[]): void;
    getNewTags(arg0: RegistryType): TagData[];
    getOrComputeNewTags(arg0: RegistryType): TagData[];
    onMappingDataLoaded(): void;
    removeTag(arg0: RegistryType, arg1: string): void;
    removeTags(arg0: string): void;
    renameTag(arg0: RegistryType, arg1: string, arg2: string): void;
}