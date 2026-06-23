import type { Suggestions } from '../../../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { SuggestionsBuilder } from '../../../../../com/mojang/brigadier/suggestion/SuggestionsBuilder.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { DataComponentType } from '../../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
export interface ItemParser$Visitor extends Object {
    visitComponent<T extends unknown>(type: DataComponentType<T>, value: T): void;
    visitItem(item: Holder<Item>): void;
    visitRemovedComponent<T extends unknown>(type: DataComponentType<T>): void;
    visitSuggestions(suggestions: (param0: SuggestionsBuilder) => CompletableFuture<Suggestions>): void;
}