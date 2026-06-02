import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PackResources } from '../../../../../net/minecraft/server/packs/PackResources.d.ts'
import type { IoSupplier } from '../../../../../net/minecraft/server/packs/resources/IoSupplier.d.ts'
export class FallbackResourceManager$ResourceWithSource extends Record {
    private constructor(source: PackResources, resource: () => InputStream)
    // private resource: () => InputStream;
    // private source: PackResources;
    equals(o: Object | null): boolean;
    hashCode(): number;
    resource(): () => InputStream;
    source(): PackResources;
    toString(): string;
}