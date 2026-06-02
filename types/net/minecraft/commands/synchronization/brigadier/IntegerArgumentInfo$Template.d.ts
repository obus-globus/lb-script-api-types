import type { IntegerArgumentType } from '../../../../../com/mojang/brigadier/arguments/IntegerArgumentType.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CommandBuildContext } from '../../../../../net/minecraft/commands/CommandBuildContext.d.ts'
import type { ArgumentTypeInfo } from '../../../../../net/minecraft/commands/synchronization/ArgumentTypeInfo.d.ts'
import type { ArgumentTypeInfo$Template } from '../../../../../net/minecraft/commands/synchronization/ArgumentTypeInfo$Template.d.ts'
export class IntegerArgumentInfo$Template extends Object implements ArgumentTypeInfo$Template<IntegerArgumentType> {
    private constructor(null_: IntegerArgumentInfo$Template, min: number, max: number)
    // private max: number;
    // private min: number;
    instantiate(context: CommandBuildContext): IntegerArgumentType;
    type(): ArgumentTypeInfo<IntegerArgumentType, Object>;
}