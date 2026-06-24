import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandBuildContext } from '../../../../net/minecraft/commands/CommandBuildContext.d.ts'
import type { ResourceSelectorArgument } from '../../../../net/minecraft/commands/arguments/ResourceSelectorArgument.d.ts'
import type { ResourceSelectorArgument$Info } from '../../../../net/minecraft/commands/arguments/ResourceSelectorArgument$Info.d.ts'
import type { ArgumentTypeInfo } from '../../../../net/minecraft/commands/synchronization/ArgumentTypeInfo.d.ts'
import type { ArgumentTypeInfo$Template } from '../../../../net/minecraft/commands/synchronization/ArgumentTypeInfo$Template.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
export class ResourceSelectorArgument$Info$Template extends Object implements ArgumentTypeInfo$Template<ResourceSelectorArgument<T>> {
    private constructor(null_: ResourceSelectorArgument$Info<T>, registryKey: ResourceKey<T[]>)
    // private registryKey: ResourceKey<T[]>;
    instantiate<T extends unknown>(context: CommandBuildContext): ResourceSelectorArgument<T>;
    type<T extends unknown>(): ArgumentTypeInfo<ResourceSelectorArgument<T>, any>;
}