import type { Command } from '../../../../com/mojang/brigadier/Command.d.ts'
import type { RedirectModifier } from '../../../../com/mojang/brigadier/RedirectModifier.d.ts'
import type { StringReader } from '../../../../com/mojang/brigadier/StringReader.d.ts'
import type { ArgumentType } from '../../../../com/mojang/brigadier/arguments/ArgumentType.d.ts'
import type { RequiredArgumentBuilder } from '../../../../com/mojang/brigadier/builder/RequiredArgumentBuilder.d.ts'
import type { CommandContext } from '../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { CommandContextBuilder } from '../../../../com/mojang/brigadier/context/CommandContextBuilder.d.ts'
import type { SuggestionProvider } from '../../../../com/mojang/brigadier/suggestion/SuggestionProvider.d.ts'
import type { Suggestions } from '../../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { SuggestionsBuilder } from '../../../../com/mojang/brigadier/suggestion/SuggestionsBuilder.d.ts'
import type { CommandNode } from '../../../../com/mojang/brigadier/tree/CommandNode.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ArgumentCommandNode<S extends Object | number | string | boolean, T extends Object | number | string | boolean> extends CommandNode<S> {
    constructor(arg0: string, arg1: ArgumentType<T>, arg2: (param0: S) => kotlin.Int, arg3: (param0: S) => kotlin.Boolean, arg4: CommandNode<S>, arg5: (param0: S) => kotlin.collections.Collection<unknown>, arg6: boolean, arg7: (param0: S, param1: CommandContext<Object>) => java.util.concurrent.CompletableFuture<com.mojang.brigadier.suggestion.Suggestions>)
    readonly customSuggestions: (param0: S, param1: CommandContext<Object>) => java.util.concurrent.CompletableFuture<com.mojang.brigadier.suggestion.Suggestions>;
    readonly name: string;
    readonly type: ArgumentType<T>;
    createBuilder(): RequiredArgumentBuilder<S, T>;
    equals(arg0: Object | null): boolean;
    getCustomSuggestions(): (param0: S, param1: CommandContext<Object>) => java.util.concurrent.CompletableFuture<com.mojang.brigadier.suggestion.Suggestions>;
    getExamples(): E[];
    getName(): string;
    getSortedKey(): string;
    getType(): ArgumentType<T>;
    getUsageText(): string;
    hashCode(): number;
    isValidInput(arg0: string): boolean;
    listSuggestions(arg0: CommandContext<S>, arg1: SuggestionsBuilder): CompletableFuture<Suggestions>;
    parse(arg0: StringReader, arg1: CommandContextBuilder<S>): void;
    toString(): string;
}