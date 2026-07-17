import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Command } from '../../../../com/mojang/brigadier/Command.d.ts'
import type { RedirectModifier } from '../../../../com/mojang/brigadier/RedirectModifier.d.ts'
import type { ParsedArgument } from '../../../../com/mojang/brigadier/context/ParsedArgument.d.ts'
import type { ParsedCommandNode } from '../../../../com/mojang/brigadier/context/ParsedCommandNode.d.ts'
import type { StringRange } from '../../../../com/mojang/brigadier/context/StringRange.d.ts'
import type { CommandNode } from '../../../../com/mojang/brigadier/tree/CommandNode.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CommandContext<S extends unknown> extends Object {
    constructor(arg0: S, arg1: string, arg2: JavaMap<string, ParsedArgument<S, Object>>, arg3: (param0: CommandContext<S>) => number, arg4: CommandNode<S>, arg5: ParsedCommandNode<S>[], arg6: StringRange, arg7: CommandContext<S>, arg8: (param0: CommandContext<S>) => S[], arg9: boolean)
    // private arguments: JavaMap<string, ParsedArgument<S, Object>>;
    readonly child: CommandContext<S>;
    readonly command: (param0: CommandContext<S>) => number;
    // private forks: boolean;
    readonly input: string;
    // private modifier: (param0: CommandContext<S>) => S[];
    readonly nodes: ParsedCommandNode<S>[];
    readonly range: StringRange;
    readonly rootNode: CommandNode<S>;
    readonly source: S;
    copyFor(arg0: S): CommandContext<S>;
    equals(arg0: Object | null): boolean;
    getArgument<V extends unknown>(arg0: string, arg1: Class<V>): V;
    getChild(): CommandContext<S>;
    getCommand(): (param0: CommandContext<S>) => number;
    getInput(): string;
    getLastChild(): CommandContext<S>;
    getNodes(): ParsedCommandNode<S>[];
    getRange(): StringRange;
    getRedirectModifier(): (param0: CommandContext<S>) => S[];
    getRootNode(): CommandNode<S>;
    getSource(): S;
    hasNodes(): boolean;
    hashCode(): number;
    isForked(): boolean;
}