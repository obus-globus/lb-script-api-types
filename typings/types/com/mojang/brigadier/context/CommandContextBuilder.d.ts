import type { Command } from '../../../../com/mojang/brigadier/Command.d.ts'
import type { CommandDispatcher } from '../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { RedirectModifier } from '../../../../com/mojang/brigadier/RedirectModifier.d.ts'
import type { CommandContext } from '../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { ParsedArgument } from '../../../../com/mojang/brigadier/context/ParsedArgument.d.ts'
import type { ParsedCommandNode } from '../../../../com/mojang/brigadier/context/ParsedCommandNode.d.ts'
import type { StringRange } from '../../../../com/mojang/brigadier/context/StringRange.d.ts'
import type { SuggestionContext } from '../../../../com/mojang/brigadier/context/SuggestionContext.d.ts'
import type { CommandNode } from '../../../../com/mojang/brigadier/tree/CommandNode.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CommandContextBuilder<S extends unknown> extends Object {
    constructor(arg0: CommandDispatcher<S>, arg1: S, arg2: CommandNode<S>, arg3: number)
    readonly arguments: { [key: string]: ParsedArgument<S, Object> };
    readonly child: CommandContextBuilder<S>;
    readonly command: (param0: CommandContext<S>) => number;
    readonly dispatcher: CommandDispatcher<S>;
    // private forks: boolean;
    // private modifier: (param0: CommandContext<S>) => S[];
    readonly nodes: ParsedCommandNode<S>[];
    readonly range: StringRange;
    readonly rootNode: CommandNode<S>;
    readonly source: S;
    build(arg0: string): CommandContext<S>;
    copy(): CommandContextBuilder<S>;
    findSuggestionContext(arg0: number): SuggestionContext<S>;
    getArguments(): { [key: string]: ParsedArgument<S, Object> };
    getChild(): CommandContextBuilder<S>;
    getCommand(): (param0: CommandContext<S>) => number;
    getDispatcher(): CommandDispatcher<S>;
    getLastChild(): CommandContextBuilder<S>;
    getNodes(): ParsedCommandNode<S>[];
    getRange(): StringRange;
    getRootNode(): CommandNode<S>;
    getSource(): S;
    withArgument(arg0: string, arg1: ParsedArgument<S, Object>): CommandContextBuilder<S>;
    withChild(arg0: CommandContextBuilder<S>): CommandContextBuilder<S>;
    withCommand(arg0: (param0: CommandContext<S>) => number): CommandContextBuilder<S>;
    withNode(arg0: CommandNode<S>, arg1: StringRange): CommandContextBuilder<S>;
    withSource(arg0: S): CommandContextBuilder<S>;
}