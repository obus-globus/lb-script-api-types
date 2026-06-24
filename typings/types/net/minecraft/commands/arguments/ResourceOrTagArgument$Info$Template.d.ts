import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandBuildContext } from '../../../../net/minecraft/commands/CommandBuildContext.d.ts'
import type { ResourceOrTagArgument } from '../../../../net/minecraft/commands/arguments/ResourceOrTagArgument.d.ts'
import type { ResourceOrTagArgument$Info } from '../../../../net/minecraft/commands/arguments/ResourceOrTagArgument$Info.d.ts'
import type { ArgumentTypeInfo } from '../../../../net/minecraft/commands/synchronization/ArgumentTypeInfo.d.ts'
import type { ArgumentTypeInfo$Template } from '../../../../net/minecraft/commands/synchronization/ArgumentTypeInfo$Template.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
export class ResourceOrTagArgument$Info$Template extends Object implements ArgumentTypeInfo$Template<ResourceOrTagArgument<T>> {
    private constructor(null_: ResourceOrTagArgument$Info<T>, registryKey: ResourceKey<T[]>)
    // private registryKey: ResourceKey<T[]>;
    instantiate<T extends unknown>(context: CommandBuildContext): ResourceOrTagArgument<T>;
    type<T extends unknown>(): ArgumentTypeInfo<ResourceOrTagArgument<T>, any>;
}