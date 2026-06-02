import type { ParseResults } from '../../../com/mojang/brigadier/ParseResults.d.ts'
import type { CommandContextBuilder } from '../../../com/mojang/brigadier/context/CommandContextBuilder.d.ts'
import type { ArgumentCommandNode } from '../../../com/mojang/brigadier/tree/ArgumentCommandNode.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ArgumentVisitor$Output } from '../../../net/minecraft/commands/ArgumentVisitor$Output.d.ts'
export class ArgumentVisitor extends Object {
    static visitArguments(paramcommand: ParseResults<Object>, paramoutput: (param0: Object | null, param1: CommandContextBuilder<Object>, param2: ArgumentCommandNode<Object, Object>) => void, paramrejectRootRedirects: boolean): void;
    constructor()
}