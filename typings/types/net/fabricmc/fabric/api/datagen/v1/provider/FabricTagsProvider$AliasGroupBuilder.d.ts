import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { TagKey } from '../../../../../../../net/minecraft/tags/TagKey.d.ts'
export class FabricTagsProvider$AliasGroupBuilder extends Object {
    private constructor(null_: FabricTagsProvider$AliasGroupBuilder)
    readonly tags: TagKey<T>[];
    add<T extends Object | number | string | boolean>(arg0: Identifier[]): FabricTagsProvider$AliasGroupBuilder;
    add<T extends Object | number | string | boolean>(arg0: TagKey<T>[]): FabricTagsProvider$AliasGroupBuilder;
    add<T extends Object | number | string | boolean>(arg0: Identifier): FabricTagsProvider$AliasGroupBuilder;
    add<T extends Object | number | string | boolean>(arg0: TagKey<T>): FabricTagsProvider$AliasGroupBuilder;
    getTags<T extends Object | number | string | boolean>(): TagKey<T>[];
}