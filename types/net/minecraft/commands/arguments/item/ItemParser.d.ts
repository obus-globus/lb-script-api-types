import type { StringReader } from '../../../../../com/mojang/brigadier/StringReader.d.ts'
import type { Suggestions } from '../../../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { SuggestionsBuilder } from '../../../../../com/mojang/brigadier/suggestion/SuggestionsBuilder.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ItemInput } from '../../../../../net/minecraft/commands/arguments/item/ItemInput.d.ts'
import type { ItemParser$Visitor } from '../../../../../net/minecraft/commands/arguments/item/ItemParser$Visitor.d.ts'
import type { HolderLookup$Provider } from '../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { HolderLookup$RegistryLookup } from '../../../../../net/minecraft/core/HolderLookup$RegistryLookup.d.ts'
import type { Tag } from '../../../../../net/minecraft/nbt/Tag.d.ts'
import type { TagParser } from '../../../../../net/minecraft/nbt/TagParser.d.ts'
import type { RegistryOps } from '../../../../../net/minecraft/resources/RegistryOps.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
export class ItemParser extends Object {
    static SYNTAX_COMPONENT_ASSIGNMENT: string;
    static SYNTAX_COMPONENT_SEPARATOR: string;
    static SYNTAX_END_COMPONENTS: string;
    static SYNTAX_REMOVED_COMPONENT: string;
    static SYNTAX_START_COMPONENTS: string;
    constructor(registries: HolderLookup$Provider)
    // private items: HolderLookup$RegistryLookup<Item>;
    // private registryOps: RegistryOps<Tag>;
    // private tagParser: TagParser<Tag>;
    fillSuggestions(builder: SuggestionsBuilder): CompletableFuture<Suggestions>;
    parse(reader: StringReader): ItemInput;
    parse(reader: StringReader, visitor: ItemParser$Visitor): void;
}