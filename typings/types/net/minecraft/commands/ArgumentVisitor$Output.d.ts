import type { CommandContextBuilder } from '../../../com/mojang/brigadier/context/CommandContextBuilder.d.ts'
import type { ParsedArgument } from '../../../com/mojang/brigadier/context/ParsedArgument.d.ts'
import type { ArgumentCommandNode } from '../../../com/mojang/brigadier/tree/ArgumentCommandNode.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ArgumentVisitor$Output<S extends Object | number | string | boolean> extends Object{
    accept<T extends Object | number | string | boolean>(context: CommandContextBuilder<S>, argument: ArgumentCommandNode<S, T>, value: ParsedArgument<S, T>): void;
}