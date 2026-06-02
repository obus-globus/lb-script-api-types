import type { DoubleArgumentType } from '../../../../../com/mojang/brigadier/arguments/DoubleArgumentType.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CommandBuildContext } from '../../../../../net/minecraft/commands/CommandBuildContext.d.ts'
import type { ArgumentTypeInfo } from '../../../../../net/minecraft/commands/synchronization/ArgumentTypeInfo.d.ts'
import type { ArgumentTypeInfo$Template } from '../../../../../net/minecraft/commands/synchronization/ArgumentTypeInfo$Template.d.ts'
export class DoubleArgumentInfo$Template extends Object implements ArgumentTypeInfo$Template<DoubleArgumentType> {
    private constructor(null_: DoubleArgumentInfo$Template, min: number, max: number)
    // private max: number;
    // private min: number;
    instantiate(context: CommandBuildContext): DoubleArgumentType;
    type(): ArgumentTypeInfo<DoubleArgumentType, Object>;
}