import type { AmbiguityConsumer } from '../../../../com/mojang/brigadier/AmbiguityConsumer.d.ts'
import type { Command } from '../../../../com/mojang/brigadier/Command.d.ts'
import type { RedirectModifier } from '../../../../com/mojang/brigadier/RedirectModifier.d.ts'
import type { StringReader } from '../../../../com/mojang/brigadier/StringReader.d.ts'
import type { ArgumentBuilder } from '../../../../com/mojang/brigadier/builder/ArgumentBuilder.d.ts'
import type { CommandContext } from '../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { CommandContextBuilder } from '../../../../com/mojang/brigadier/context/CommandContextBuilder.d.ts'
import type { Suggestions } from '../../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { SuggestionsBuilder } from '../../../../com/mojang/brigadier/suggestion/SuggestionsBuilder.d.ts'
import type { ArgumentCommandNode } from '../../../../com/mojang/brigadier/tree/ArgumentCommandNode.d.ts'
import type { LiteralCommandNode } from '../../../../com/mojang/brigadier/tree/LiteralCommandNode.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export abstract class CommandNode<S extends Object | number | string | boolean> extends Object implements Comparable<CommandNode<S>> {
    constructor(arg0: (param0: S) => kotlin.Int, arg1: (param0: S) => kotlin.Boolean, arg2: CommandNode<S>, arg3: (param0: S) => kotlin.collections.Collection<unknown>, arg4: boolean)
    // private arguments: { [key: string]: ArgumentCommandNode<S, Object> };
    readonly children: { [key: string]: CommandNode<S> };
    readonly command: (param0: S) => kotlin.Int;
    // private forks: boolean;
    // private literals: { [key: string]: LiteralCommandNode<S> };
    // private modifier: (param0: S) => kotlin.collections.Collection<unknown>;
    readonly redirect: CommandNode<S>;
    readonly requirement: (param0: S) => kotlin.Boolean;
    addChild(arg0: CommandNode<S>): void;
    canUse(arg0: S): boolean;
    compareTo(arg0: CommandNode<S>): number;
    createBuilder(): ArgumentBuilder<S, Object>;
    equals(arg0: Object | null): boolean;
    findAmbiguities(arg0: (param0: S, param1: CommandNode<Object>, param2: CommandNode<Object>, param3: CommandNode<Object>) => void): void;
    getChild(arg0: string): CommandNode<S>;
    getChildren(): E[];
    getCommand(): (param0: S) => kotlin.Int;
    getExamples(): E[];
    getName(): string;
    getRedirect(): CommandNode<S>;
    getRedirectModifier(): (param0: S) => kotlin.collections.Collection<unknown>;
    getRelevantNodes(arg0: StringReader): E[];
    getRequirement(): (param0: S) => kotlin.Boolean;
    getSortedKey(): string;
    getUsageText(): string;
    hashCode(): number;
    isFork(): boolean;
    isValidInput(arg0: string): boolean;
    listSuggestions(arg0: CommandContext<S>, arg1: SuggestionsBuilder): CompletableFuture<Suggestions>;
    parse(arg0: StringReader, arg1: CommandContextBuilder<S>): void;
}