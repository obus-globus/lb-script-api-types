import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FabricTagsProvider } from '../../../../../../../net/fabricmc/fabric/api/datagen/v1/provider/FabricTagsProvider.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { TagKey } from '../../../../../../../net/minecraft/tags/TagKey.d.ts'
export class FabricTagsProvider$AliasGroupBuilder extends Object {
    private constructor(null_: FabricTagsProvider<T>)
    readonly tags: TagKey<T>[];
    add<T extends unknown>(arg0: Identifier[]): FabricTagsProvider$AliasGroupBuilder;
    add<T extends unknown>(arg0: TagKey<T>[]): FabricTagsProvider$AliasGroupBuilder;
    add<T extends unknown>(arg0: Identifier): FabricTagsProvider$AliasGroupBuilder;
    add<T extends unknown>(arg0: TagKey<T>): FabricTagsProvider$AliasGroupBuilder;
    getTags<T extends unknown>(): TagKey<T>[];
}