import type { ParseResults } from '../../../com/mojang/brigadier/ParseResults.d.ts'
import type { CommandContextBuilder } from '../../../com/mojang/brigadier/context/CommandContextBuilder.d.ts'
import type { ParsedArgument } from '../../../com/mojang/brigadier/context/ParsedArgument.d.ts'
import type { ArgumentCommandNode } from '../../../com/mojang/brigadier/tree/ArgumentCommandNode.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ArgumentVisitor$Output } from '../../../net/minecraft/commands/ArgumentVisitor$Output.d.ts'
export class ArgumentVisitor extends Object {
    static visitArguments(paramcommand: ParseResults<Object>, paramoutput: (param0: CommandContextBuilder<Object>, param1: ArgumentCommandNode<Object, Object>, param2: ParsedArgument<Object, Object>) => void, paramrejectRootRedirects: boolean): void;
    constructor()
}