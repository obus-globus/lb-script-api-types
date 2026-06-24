import type { LongArgumentType } from '../../../../../com/mojang/brigadier/arguments/LongArgumentType.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CommandBuildContext } from '../../../../../net/minecraft/commands/CommandBuildContext.d.ts'
import type { ArgumentTypeInfo } from '../../../../../net/minecraft/commands/synchronization/ArgumentTypeInfo.d.ts'
import type { ArgumentTypeInfo$Template } from '../../../../../net/minecraft/commands/synchronization/ArgumentTypeInfo$Template.d.ts'
import type { LongArgumentInfo } from '../../../../../net/minecraft/commands/synchronization/brigadier/LongArgumentInfo.d.ts'
export class LongArgumentInfo$Template extends Object implements ArgumentTypeInfo$Template<LongArgumentType> {
    private constructor(null_: LongArgumentInfo, min: number, max: number)
    // private max: number;
    // private min: number;
    instantiate(context: CommandBuildContext): LongArgumentType;
    type(): ArgumentTypeInfo<LongArgumentType, any>;
}