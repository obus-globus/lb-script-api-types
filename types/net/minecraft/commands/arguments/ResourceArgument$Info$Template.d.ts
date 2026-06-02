import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandBuildContext } from '../../../../net/minecraft/commands/CommandBuildContext.d.ts'
import type { ResourceArgument } from '../../../../net/minecraft/commands/arguments/ResourceArgument.d.ts'
import type { ArgumentTypeInfo } from '../../../../net/minecraft/commands/synchronization/ArgumentTypeInfo.d.ts'
import type { ArgumentTypeInfo$Template } from '../../../../net/minecraft/commands/synchronization/ArgumentTypeInfo$Template.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
export class ResourceArgument$Info$Template extends Object implements ArgumentTypeInfo$Template<ResourceArgument<T>> {
    private constructor(null_: ResourceArgument$Info$Template)
    // private registryKey: ResourceKey<T[]>;
    instantiate(context: CommandBuildContext): ResourceArgument<T>;
    type(): ArgumentTypeInfo<ResourceArgument<T>, Object>;
}