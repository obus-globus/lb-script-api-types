import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MetadataSectionType } from '../../../../../net/minecraft/server/packs/metadata/MetadataSectionType.d.ts'
import type { MetadataSectionType$WithValue } from '../../../../../net/minecraft/server/packs/metadata/MetadataSectionType$WithValue.d.ts'
import type { IoSupplier } from '../../../../../net/minecraft/server/packs/resources/IoSupplier.d.ts'
import type { ResourceMetadata } from '../../../../../net/minecraft/server/packs/resources/ResourceMetadata.d.ts'
export class ResourceMetadata$MapBased extends Object implements ResourceMetadata {
    static EMPTY: ResourceMetadata;
    static EMPTY_SUPPLIER: () => ResourceMetadata;
    static fromJsonStream(paraminputStream: InputStream): ResourceMetadata;
    static of(paramk1: MetadataSectionType<Object>, paramv1: Object | null, paramk2: MetadataSectionType<Object>, paramv2: Object | null): ResourceMetadata;
    static of(paramk: MetadataSectionType<Object>, paramv: Object | null): ResourceMetadata;
    private constructor(values: Map<MetadataSectionType<Object>, Object | null>)
    // private values: Map<MetadataSectionType<Object>, Object | null>;
    getSection<T extends unknown>(serializer: MetadataSectionType<T>): Optional<T>;
    getTypedSection<T extends unknown>(type: MetadataSectionType<T>): Optional<MetadataSectionType$WithValue<T>>;
    getTypedSections(types: MetadataSectionType<Object>[]): MetadataSectionType$WithValue<Object>[];
}