import type { StringReader } from '../../../../com/mojang/brigadier/StringReader.d.ts'
import type { ArgumentBuilder } from '../../../../com/mojang/brigadier/builder/ArgumentBuilder.d.ts'
import type { CommandContext } from '../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { CommandContextBuilder } from '../../../../com/mojang/brigadier/context/CommandContextBuilder.d.ts'
import type { Suggestions } from '../../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { SuggestionsBuilder } from '../../../../com/mojang/brigadier/suggestion/SuggestionsBuilder.d.ts'
import type { CommandNode } from '../../../../com/mojang/brigadier/tree/CommandNode.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RootCommandNode<S extends Object | number | string | boolean> extends CommandNode<S> {
    constructor()
    createBuilder(): ArgumentBuilder<S, any>;
    equals(arg0: Object | null): boolean;
    getExamples(): string[];
    getName(): string;
    getSortedKey(): string;
    getUsageText(): string;
    isValidInput(arg0: string): boolean;
    listSuggestions(arg0: CommandContext<S>, arg1: SuggestionsBuilder): CompletableFuture<Suggestions>;
    parse(arg0: StringReader, arg1: CommandContextBuilder<S>): void;
    toString(): string;
}