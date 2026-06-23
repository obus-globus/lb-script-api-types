import type { StringReader } from '../../../../../com/mojang/brigadier/StringReader.d.ts'
import type { Suggestions } from '../../../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { SuggestionsBuilder } from '../../../../../com/mojang/brigadier/suggestion/SuggestionsBuilder.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ItemParser$Visitor } from '../../../../../net/minecraft/commands/arguments/item/ItemParser$Visitor.d.ts'
import type { DataComponentType } from '../../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { TagParser } from '../../../../../net/minecraft/nbt/TagParser.d.ts'
import type { RegistryOps } from '../../../../../net/minecraft/resources/RegistryOps.d.ts'
export class ItemParser$State extends Object {
    static readComponentType(paramreader: StringReader): DataComponentType<Object>;
    private constructor(null_: ItemParser$State, reader: StringReader, visitor: ItemParser$Visitor)
    // private reader: StringReader;
    // private visitor: ItemParser$Visitor;
    parse(): void;
    // private readComponent<O extends unknown, T extends unknown>(tagParser: TagParser<O>, registryOps: RegistryOps<O>, componentType: DataComponentType<T>): void;
    // private readComponents(): void;
    // private readItem(): void;
    // private suggestAssignment(builder: SuggestionsBuilder): CompletableFuture<Suggestions>;
    // private suggestComponent(builder: SuggestionsBuilder): CompletableFuture<Suggestions>;
    // private suggestComponent(builder: SuggestionsBuilder, suffix: string): CompletableFuture<Suggestions>;
    // private suggestComponentAssignmentOrRemoval(builder: SuggestionsBuilder): CompletableFuture<Suggestions>;
    // private suggestItem(builder: SuggestionsBuilder): CompletableFuture<Suggestions>;
    // private suggestNextOrEndComponents(builder: SuggestionsBuilder): CompletableFuture<Suggestions>;
    // private suggestStartComponents(builder: SuggestionsBuilder): CompletableFuture<Suggestions>;
}