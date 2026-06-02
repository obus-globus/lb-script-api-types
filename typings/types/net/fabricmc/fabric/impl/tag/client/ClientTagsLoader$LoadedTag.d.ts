import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { TagKey } from '../../../../../../net/minecraft/tags/TagKey.d.ts'
export class ClientTagsLoader$LoadedTag extends Record {
    constructor(completeIds: Identifier[], removeIds: Identifier[], immediateChildTags: TagKey<Object>[], immediateChildIds: Identifier[])
    // private completeIds: Identifier[];
    // private immediateChildIds: Identifier[];
    // private immediateChildTags: TagKey<Object>[];
    // private removeIds: Identifier[];
    completeIds(): Identifier[];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    immediateChildIds(): Identifier[];
    immediateChildTags(): TagKey<Object>[];
    removeIds(): Identifier[];
    toString(): string;
}