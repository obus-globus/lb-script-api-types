import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandBuildContext } from '../../../../net/minecraft/commands/CommandBuildContext.d.ts'
import type { ResourceOrTagKeyArgument } from '../../../../net/minecraft/commands/arguments/ResourceOrTagKeyArgument.d.ts'
import type { ResourceOrTagKeyArgument$Info } from '../../../../net/minecraft/commands/arguments/ResourceOrTagKeyArgument$Info.d.ts'
import type { ArgumentTypeInfo } from '../../../../net/minecraft/commands/synchronization/ArgumentTypeInfo.d.ts'
import type { ArgumentTypeInfo$Template } from '../../../../net/minecraft/commands/synchronization/ArgumentTypeInfo$Template.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
export class ResourceOrTagKeyArgument$Info$Template extends Object implements ArgumentTypeInfo$Template<ResourceOrTagKeyArgument<T>> {
    private constructor(null_: ResourceOrTagKeyArgument$Info<Object>, registryKey: ResourceKey<Object[]>)
    // private registryKey: ResourceKey<T[]>;
    instantiate<T extends unknown>(context: CommandBuildContext): ResourceOrTagKeyArgument<T>;
    type<T extends unknown>(): ArgumentTypeInfo<ResourceOrTagKeyArgument<T>, any>;
}