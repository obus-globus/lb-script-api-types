import type { StringReader } from '../../../../../com/mojang/brigadier/StringReader.d.ts'
import type { ArgumentType } from '../../../../../com/mojang/brigadier/arguments/ArgumentType.d.ts'
import type { CommandContext } from '../../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { Suggestions } from '../../../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { SuggestionsBuilder } from '../../../../../com/mojang/brigadier/suggestion/SuggestionsBuilder.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CommandBuildContext } from '../../../../../net/minecraft/commands/CommandBuildContext.d.ts'
import type { ItemInput } from '../../../../../net/minecraft/commands/arguments/item/ItemInput.d.ts'
import type { ItemParser } from '../../../../../net/minecraft/commands/arguments/item/ItemParser.d.ts'
export class ItemArgument extends Object implements ArgumentType<ItemInput> {
    static getItem<S extends unknown>(paramcontext: CommandContext<S>, paramname: string): ItemInput;
    static item(paramcontext: CommandBuildContext): ItemArgument;
    constructor(context: CommandBuildContext)
    // private parser: ItemParser;
    getExamples(): string[];
    listSuggestions<S extends unknown>(arg0: CommandContext<S>, arg1: SuggestionsBuilder): CompletableFuture<Suggestions>;
    listSuggestions<S extends unknown>(context: CommandContext<S>, builder: SuggestionsBuilder): CompletableFuture<Suggestions>;
    parse<S extends unknown>(arg0: StringReader, arg1: S): ItemInput;
    parse(reader: StringReader): ItemInput;
}