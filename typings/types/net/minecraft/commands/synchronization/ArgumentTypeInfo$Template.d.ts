import type { ArgumentType } from '../../../../com/mojang/brigadier/arguments/ArgumentType.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandBuildContext } from '../../../../net/minecraft/commands/CommandBuildContext.d.ts'
import type { ArgumentTypeInfo } from '../../../../net/minecraft/commands/synchronization/ArgumentTypeInfo.d.ts'
export interface ArgumentTypeInfo$Template<A extends ArgumentType<Object>> extends Object{
    instantiate(context: CommandBuildContext): A;
    type(): ArgumentTypeInfo<A, Object>;
}