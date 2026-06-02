import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MetadataSectionType } from '../../../../../net/minecraft/server/packs/metadata/MetadataSectionType.d.ts'
import type { IdentifierPattern } from '../../../../../net/minecraft/util/IdentifierPattern.d.ts'
export class ResourceFilterSection extends Object {
    static TYPE: MetadataSectionType<ResourceFilterSection>;
    constructor(blockList: IdentifierPattern[])
    // private blockList: IdentifierPattern[];
    isNamespaceFiltered(namespace: string): boolean;
    isPathFiltered(path: string): boolean;
}