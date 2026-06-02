import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandBuildContext } from '../../../../net/minecraft/commands/CommandBuildContext.d.ts'
import type { ScoreHolderArgument } from '../../../../net/minecraft/commands/arguments/ScoreHolderArgument.d.ts'
import type { ArgumentTypeInfo } from '../../../../net/minecraft/commands/synchronization/ArgumentTypeInfo.d.ts'
import type { ArgumentTypeInfo$Template } from '../../../../net/minecraft/commands/synchronization/ArgumentTypeInfo$Template.d.ts'
export class ScoreHolderArgument$Info$Template extends Object implements ArgumentTypeInfo$Template<ScoreHolderArgument> {
    private constructor(null_: ScoreHolderArgument$Info$Template, multiple: boolean)
    // private multiple: boolean;
    instantiate(context: CommandBuildContext): ScoreHolderArgument;
    type(): ArgumentTypeInfo<ScoreHolderArgument, Object>;
}