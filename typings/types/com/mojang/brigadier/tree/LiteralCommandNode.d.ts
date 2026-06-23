import type { Command } from '../../../../com/mojang/brigadier/Command.d.ts'
import type { RedirectModifier } from '../../../../com/mojang/brigadier/RedirectModifier.d.ts'
import type { StringReader } from '../../../../com/mojang/brigadier/StringReader.d.ts'
import type { LiteralArgumentBuilder } from '../../../../com/mojang/brigadier/builder/LiteralArgumentBuilder.d.ts'
import type { CommandContext } from '../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { CommandContextBuilder } from '../../../../com/mojang/brigadier/context/CommandContextBuilder.d.ts'
import type { Suggestions } from '../../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { SuggestionsBuilder } from '../../../../com/mojang/brigadier/suggestion/SuggestionsBuilder.d.ts'
import type { CommandNode } from '../../../../com/mojang/brigadier/tree/CommandNode.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class LiteralCommandNode<S extends unknown> extends CommandNode<S> {
    constructor(arg0: string, arg1: (param0: CommandContext<S>) => number, arg2: (param0: S) => boolean, arg3: CommandNode<S>, arg4: (param0: CommandContext<S>) => S[], arg5: boolean)
    readonly literal: string;
    // private literalLowerCase: string;
    createBuilder(): LiteralArgumentBuilder<S>;
    equals(arg0: Object | null): boolean;
    getExamples(): string[];
    getLiteral(): string;
    getName(): string;
    getSortedKey(): string;
    getUsageText(): string;
    hashCode(): number;
    isValidInput(arg0: string): boolean;
    listSuggestions(arg0: CommandContext<S>, arg1: SuggestionsBuilder): CompletableFuture<Suggestions>;
    // private parse(arg0: StringReader): number;
    parse(arg0: StringReader, arg1: CommandContextBuilder<S>): void;
    toString(): string;
}