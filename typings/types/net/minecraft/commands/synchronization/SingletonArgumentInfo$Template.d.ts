import type { ArgumentType } from '../../../../com/mojang/brigadier/arguments/ArgumentType.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandBuildContext } from '../../../../net/minecraft/commands/CommandBuildContext.d.ts'
import type { ArgumentTypeInfo } from '../../../../net/minecraft/commands/synchronization/ArgumentTypeInfo.d.ts'
import type { ArgumentTypeInfo$Template } from '../../../../net/minecraft/commands/synchronization/ArgumentTypeInfo$Template.d.ts'
export class SingletonArgumentInfo$Template extends Object implements ArgumentTypeInfo$Template<A> {
    constructor(null_: SingletonArgumentInfo$Template)
    // private constructor: (param0: CommandBuildContext) => A;
    instantiate<A extends ArgumentType<Object>>(context: CommandBuildContext): A;
    type<A extends ArgumentType<Object>>(): ArgumentTypeInfo<A, any>;
}