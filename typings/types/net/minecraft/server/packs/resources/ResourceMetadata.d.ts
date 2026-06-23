import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MetadataSectionType } from '../../../../../net/minecraft/server/packs/metadata/MetadataSectionType.d.ts'
import type { MetadataSectionType$WithValue } from '../../../../../net/minecraft/server/packs/metadata/MetadataSectionType$WithValue.d.ts'
export interface ResourceMetadata extends Object{
    getSection<T extends unknown>(serializer: MetadataSectionType<T>): Optional<T>;
    getTypedSection<T extends unknown>(type: MetadataSectionType<T>): Optional<MetadataSectionType$WithValue<T>>;
    getTypedSections(types: MetadataSectionType<Object>[]): MetadataSectionType$WithValue<Object>[];
}