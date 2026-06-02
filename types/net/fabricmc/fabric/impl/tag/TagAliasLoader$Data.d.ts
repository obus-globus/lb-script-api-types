import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TagAliasGroup } from '../../../../../net/fabricmc/fabric/impl/tag/TagAliasGroup.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class TagAliasLoader$Data extends Record {
    constructor(groupId: Identifier, group: TagAliasGroup<Object>)
    // private group: TagAliasGroup<Object>;
    // private groupId: Identifier;
    equals(arg0: Object | null): boolean;
    group(): TagAliasGroup<Object>;
    groupId(): Identifier;
    hashCode(): number;
    toString(): string;
}