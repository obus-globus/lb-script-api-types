import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandBuildContext } from '../../../../net/minecraft/commands/CommandBuildContext.d.ts'
import type { TimeArgument } from '../../../../net/minecraft/commands/arguments/TimeArgument.d.ts'
import type { ArgumentTypeInfo } from '../../../../net/minecraft/commands/synchronization/ArgumentTypeInfo.d.ts'
import type { ArgumentTypeInfo$Template } from '../../../../net/minecraft/commands/synchronization/ArgumentTypeInfo$Template.d.ts'
export class TimeArgument$Info$Template extends Object implements ArgumentTypeInfo$Template<TimeArgument> {
    private constructor(null_: TimeArgument$Info$Template, min: number)
    // private min: number;
    instantiate(context: CommandBuildContext): TimeArgument;
    type(): ArgumentTypeInfo<TimeArgument, any>;
}