import type { StringReader } from '../../../../../com/mojang/brigadier/StringReader.d.ts'
import type { Suggestions } from '../../../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { SuggestionsBuilder } from '../../../../../com/mojang/brigadier/suggestion/SuggestionsBuilder.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ItemParser$Visitor } from '../../../../../net/minecraft/commands/arguments/item/ItemParser$Visitor.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { DataComponentType } from '../../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
export class ItemParser$SuggestionsVisitor extends Object implements ItemParser$Visitor {
    private constructor()
    // private suggestions: (param0: SuggestionsBuilder) => CompletableFuture<Suggestions>;
    resolveSuggestions(builder: SuggestionsBuilder, reader: StringReader): CompletableFuture<Suggestions>;
    visitComponent<T extends Object | number | string | boolean>(type: DataComponentType<T>, value: T): void;
    visitItem(item: Holder<Item>): void;
    visitRemovedComponent(type: DataComponentType<T>): void;
    visitSuggestions(suggestions: (param0: SuggestionsBuilder) => CompletableFuture<Suggestions>): void;
    visitSuggestions(suggestions: (param0: SuggestionsBuilder) => CompletableFuture<Suggestions>): void;
}