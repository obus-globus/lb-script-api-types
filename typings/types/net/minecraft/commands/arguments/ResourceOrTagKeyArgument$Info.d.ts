import type { JsonObject } from '../../../../com/google/gson/JsonObject.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ResourceOrTagKeyArgument } from '../../../../net/minecraft/commands/arguments/ResourceOrTagKeyArgument.d.ts'
import type { ResourceOrTagKeyArgument$Info$Template } from '../../../../net/minecraft/commands/arguments/ResourceOrTagKeyArgument$Info$Template.d.ts'
import type { ArgumentTypeInfo } from '../../../../net/minecraft/commands/synchronization/ArgumentTypeInfo.d.ts'
import type { FriendlyByteBuf } from '../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
export class ResourceOrTagKeyArgument$Info<T extends Object | number | string | boolean> extends Object implements ArgumentTypeInfo<ResourceOrTagKeyArgument<T>, ResourceOrTagKeyArgument$Info$Template> {
    constructor()
    deserializeFromNetwork(in_: FriendlyByteBuf): ResourceOrTagKeyArgument$Info$Template;
    serializeToJson(template: ResourceOrTagKeyArgument$Info$Template, out: JsonObject): void;
    serializeToNetwork(template: ResourceOrTagKeyArgument$Info$Template, out: FriendlyByteBuf): void;
    unpack(argument: ResourceOrTagKeyArgument<T>): ResourceOrTagKeyArgument$Info$Template;
}