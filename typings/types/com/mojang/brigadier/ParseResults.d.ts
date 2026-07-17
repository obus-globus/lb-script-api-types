import type { JavaMap } from '../../../JavaMap.d.ts'
import type { ImmutableStringReader } from '../../../com/mojang/brigadier/ImmutableStringReader.d.ts'
import type { CommandContextBuilder } from '../../../com/mojang/brigadier/context/CommandContextBuilder.d.ts'
import type { CommandSyntaxException } from '../../../com/mojang/brigadier/exceptions/CommandSyntaxException.d.ts'
import type { CommandNode } from '../../../com/mojang/brigadier/tree/CommandNode.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ParseResults<S extends unknown> extends Object {
    constructor(arg0: CommandContextBuilder<S>)
    constructor(arg0: CommandContextBuilder<S>, arg1: ImmutableStringReader, arg2: JavaMap<CommandNode<S>, CommandSyntaxException>)
    readonly context: CommandContextBuilder<S>;
    readonly exceptions: JavaMap<CommandNode<S>, CommandSyntaxException>;
    readonly reader: ImmutableStringReader;
    getContext(): CommandContextBuilder<S>;
    getExceptions(): JavaMap<CommandNode<S>, CommandSyntaxException>;
    getReader(): ImmutableStringReader;
}