import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { PackResources } from '../../../../../net/minecraft/server/packs/PackResources.d.ts'
import type { FallbackResourceManager$ResourceWithSource } from '../../../../../net/minecraft/server/packs/resources/FallbackResourceManager$ResourceWithSource.d.ts'
import type { IoSupplier } from '../../../../../net/minecraft/server/packs/resources/IoSupplier.d.ts'
export class FallbackResourceManager$EntryStack extends Record {
    constructor(fileLocation: Identifier)
    private constructor(fileLocation: Identifier, metadataLocation: Identifier, fileSources: FallbackResourceManager$ResourceWithSource[], metaSources: Map<PackResources, () => InputStream>)
    // private fileLocation: Identifier;
    // private fileSources: FallbackResourceManager$ResourceWithSource[];
    // private metaSources: Map<PackResources, () => InputStream>;
    // private metadataLocation: Identifier;
    equals(o: Object | null): boolean;
    fileLocation(): Identifier;
    fileSources(): FallbackResourceManager$ResourceWithSource[];
    hashCode(): number;
    metaSources(): Map<PackResources, () => InputStream>;
    metadataLocation(): Identifier;
    toString(): string;
}