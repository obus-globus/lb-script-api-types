import type { AmbiguityConsumer } from '../../../com/mojang/brigadier/AmbiguityConsumer.d.ts'
import type { ParseResults } from '../../../com/mojang/brigadier/ParseResults.d.ts'
import type { ResultConsumer } from '../../../com/mojang/brigadier/ResultConsumer.d.ts'
import type { StringReader } from '../../../com/mojang/brigadier/StringReader.d.ts'
import type { LiteralArgumentBuilder } from '../../../com/mojang/brigadier/builder/LiteralArgumentBuilder.d.ts'
import type { CommandContext } from '../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { CommandContextBuilder } from '../../../com/mojang/brigadier/context/CommandContextBuilder.d.ts'
import type { Suggestions } from '../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { CommandNode } from '../../../com/mojang/brigadier/tree/CommandNode.d.ts'
import type { LiteralCommandNode } from '../../../com/mojang/brigadier/tree/LiteralCommandNode.d.ts'
import type { RootCommandNode } from '../../../com/mojang/brigadier/tree/RootCommandNode.d.ts'
import type { CompletableFuture } from '../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Predicate } from '../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class CommandDispatcher<S extends Object | number | string | boolean> extends Object {
    static ARGUMENT_SEPARATOR: string;
    static ARGUMENT_SEPARATOR_CHAR: string;
    constructor()
    constructor(arg0: RootCommandNode<S>)
    readonly consumer: (param0: S, param1: CommandContext<Object>, param2: boolean) => void;
    // private hasCommand: (param0: CommandNode<S>) => kotlin.Boolean;
    readonly root: RootCommandNode<S>;
    // private addPaths(arg0: CommandNode<S>, arg1: CommandNode<S>[][], arg2: CommandNode<S>[]): void;
    execute(arg0: ParseResults<S>): number;
    execute(arg0: StringReader, arg1: S): number;
    execute(arg0: string, arg1: S): number;
    findAmbiguities(arg0: (param0: S, param1: CommandNode<Object>, param2: CommandNode<Object>, param3: CommandNode<Object>) => void): void;
    findNode(arg0: E[]): CommandNode<S>;
    // private getAllUsage(arg0: CommandNode<S>, arg1: S, arg2: string[], arg3: string, arg4: boolean): void;
    getAllUsage(arg0: CommandNode<S>, arg1: S, arg2: boolean): string[];
    getCompletionSuggestions(arg0: ParseResults<S>): CompletableFuture<Suggestions>;
    getCompletionSuggestions(arg0: ParseResults<S>, arg1: number): CompletableFuture<Suggestions>;
    getPath(arg0: CommandNode<S>): E[];
    getRoot(): RootCommandNode<S>;
    getSmartUsage(arg0: CommandNode<S>, arg1: S): Map<CommandNode<S>, string>;
    // private getSmartUsage(arg0: CommandNode<S>, arg1: S, arg2: boolean, arg3: boolean): string;
    parse(arg0: StringReader, arg1: S): ParseResults<S>;
    parse(arg0: string, arg1: S): ParseResults<S>;
    // private parseNodes(arg0: CommandNode<S>, arg1: StringReader, arg2: CommandContextBuilder<S>): ParseResults<S>;
    register(arg0: LiteralArgumentBuilder<S>): LiteralCommandNode<S>;
    setConsumer(arg0: (param0: S, param1: CommandContext<Object>, param2: boolean) => void): void;
}