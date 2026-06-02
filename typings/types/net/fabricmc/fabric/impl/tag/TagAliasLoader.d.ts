import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SimpleReloadListener } from '../../../../../net/fabricmc/fabric/api/resource/v1/reloader/SimpleReloadListener.d.ts'
import type { TagAliasLoader$Data } from '../../../../../net/fabricmc/fabric/impl/tag/TagAliasLoader$Data.d.ts'
import type { LayeredRegistryAccess } from '../../../../../net/minecraft/core/LayeredRegistryAccess.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { PreparableReloadListener$SharedState } from '../../../../../net/minecraft/server/packs/resources/PreparableReloadListener$SharedState.d.ts'
export class TagAliasLoader extends SimpleReloadListener<Map<ResourceKey<Object[]>, TagAliasLoader$Data[]>> {
    static ID: Identifier;
    static applyToDynamicRegistries(paramarg0: LayeredRegistryAccess<Object>, paramarg1: Object | null): void;
    constructor()
    apply(arg0: Map<ResourceKey<(Object | null)[]>, TagAliasLoader$Data[]>, arg1: PreparableReloadListener$SharedState): void;
    prepare(arg0: PreparableReloadListener$SharedState): Map<ResourceKey<(Object | null)[]>, TagAliasLoader$Data[]>;
}