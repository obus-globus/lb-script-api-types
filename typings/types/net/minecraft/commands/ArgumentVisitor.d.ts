import type { ParseResults } from '../../../com/mojang/brigadier/ParseResults.d.ts'
import type { CommandContextBuilder } from '../../../com/mojang/brigadier/context/CommandContextBuilder.d.ts'
import type { ParsedArgument } from '../../../com/mojang/brigadier/context/ParsedArgument.d.ts'
import type { ArgumentCommandNode } from '../../../com/mojang/brigadier/tree/ArgumentCommandNode.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ArgumentVisitor$Output } from '../../../net/minecraft/commands/ArgumentVisitor$Output.d.ts'
export class ArgumentVisitor extends Object {
    static visitArguments<S extends unknown>(paramcommand: ParseResults<S>, paramoutput: (param0: CommandContextBuilder<S>, param1: ArgumentCommandNode<S, Object>, param2: ParsedArgument<S, Object>) => void, paramrejectRootRedirects: boolean): void;
    constructor()
}