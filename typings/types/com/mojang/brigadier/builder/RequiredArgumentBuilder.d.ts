import type { ArgumentType } from '../../../../com/mojang/brigadier/arguments/ArgumentType.d.ts'
import type { ArgumentBuilder } from '../../../../com/mojang/brigadier/builder/ArgumentBuilder.d.ts'
import type { CommandContext } from '../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { SuggestionProvider } from '../../../../com/mojang/brigadier/suggestion/SuggestionProvider.d.ts'
import type { Suggestions } from '../../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { SuggestionsBuilder } from '../../../../com/mojang/brigadier/suggestion/SuggestionsBuilder.d.ts'
import type { ArgumentCommandNode } from '../../../../com/mojang/brigadier/tree/ArgumentCommandNode.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RequiredArgumentBuilder<S extends Object | number | string | boolean, T extends Object | number | string | boolean> extends ArgumentBuilder<S, RequiredArgumentBuilder<S, T>> {
    static argument(paramarg0: string, paramarg1: ArgumentType<Object>): RequiredArgumentBuilder<Object, Object>;
    private constructor(arg0: string, arg1: ArgumentType<T>)
    readonly name: string;
    readonly suggestionsProvider: (param0: CommandContext<S>, param1: SuggestionsBuilder) => CompletableFuture<Suggestions>;
    readonly type: ArgumentType<T>;
    build(): ArgumentCommandNode<S, T>;
    getName(): string;
    getSuggestionsProvider(): (param0: CommandContext<S>, param1: SuggestionsBuilder) => CompletableFuture<Suggestions>;
    getThis(): RequiredArgumentBuilder<S, T>;
    getType(): ArgumentType<T>;
    suggests(arg0: (param0: CommandContext<S>, param1: SuggestionsBuilder) => CompletableFuture<Suggestions>): RequiredArgumentBuilder<S, T>;
}