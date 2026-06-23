import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandBuildContext } from '../../../../net/minecraft/commands/CommandBuildContext.d.ts'
import type { ResourceKeyArgument } from '../../../../net/minecraft/commands/arguments/ResourceKeyArgument.d.ts'
import type { ArgumentTypeInfo } from '../../../../net/minecraft/commands/synchronization/ArgumentTypeInfo.d.ts'
import type { ArgumentTypeInfo$Template } from '../../../../net/minecraft/commands/synchronization/ArgumentTypeInfo$Template.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
export class ResourceKeyArgument$Info$Template extends Object implements ArgumentTypeInfo$Template<ResourceKeyArgument<T>> {
    private constructor(null_: ResourceKeyArgument$Info$Template)
    // private registryKey: ResourceKey<T[]>;
    instantiate<T extends unknown>(context: CommandBuildContext): ResourceKeyArgument<T>;
    type<T extends unknown>(): ArgumentTypeInfo<ResourceKeyArgument<T>, any>;
}