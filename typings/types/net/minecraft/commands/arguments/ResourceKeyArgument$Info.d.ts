import type { JsonObject } from '../../../../com/google/gson/JsonObject.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ResourceKeyArgument } from '../../../../net/minecraft/commands/arguments/ResourceKeyArgument.d.ts'
import type { ResourceKeyArgument$Info$Template } from '../../../../net/minecraft/commands/arguments/ResourceKeyArgument$Info$Template.d.ts'
import type { ArgumentTypeInfo } from '../../../../net/minecraft/commands/synchronization/ArgumentTypeInfo.d.ts'
import type { FriendlyByteBuf } from '../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
export class ResourceKeyArgument$Info<T extends unknown> extends Object implements ArgumentTypeInfo<ResourceKeyArgument<T>, ResourceKeyArgument$Info$Template> {
    constructor()
    deserializeFromNetwork(in_: FriendlyByteBuf): ResourceKeyArgument$Info$Template;
    serializeToJson(template: ResourceKeyArgument$Info$Template, out: JsonObject): void;
    serializeToNetwork(template: ResourceKeyArgument$Info$Template, out: FriendlyByteBuf): void;
    unpack(argument: ResourceKeyArgument<T>): ResourceKeyArgument$Info$Template;
}