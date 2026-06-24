import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandBuildContext } from '../../../../net/minecraft/commands/CommandBuildContext.d.ts'
import type { EntityArgument } from '../../../../net/minecraft/commands/arguments/EntityArgument.d.ts'
import type { EntityArgument$Info } from '../../../../net/minecraft/commands/arguments/EntityArgument$Info.d.ts'
import type { ArgumentTypeInfo } from '../../../../net/minecraft/commands/synchronization/ArgumentTypeInfo.d.ts'
import type { ArgumentTypeInfo$Template } from '../../../../net/minecraft/commands/synchronization/ArgumentTypeInfo$Template.d.ts'
export class EntityArgument$Info$Template extends Object implements ArgumentTypeInfo$Template<EntityArgument> {
    private constructor(null_: EntityArgument$Info, single: boolean, playersOnly: boolean)
    // private playersOnly: boolean;
    // private single: boolean;
    instantiate(context: CommandBuildContext): EntityArgument;
    type(): ArgumentTypeInfo<EntityArgument, any>;
}