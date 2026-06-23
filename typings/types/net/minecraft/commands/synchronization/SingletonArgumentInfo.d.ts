import type { JsonObject } from '../../../../com/google/gson/JsonObject.d.ts'
import type { ArgumentType } from '../../../../com/mojang/brigadier/arguments/ArgumentType.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandBuildContext } from '../../../../net/minecraft/commands/CommandBuildContext.d.ts'
import type { ArgumentTypeInfo } from '../../../../net/minecraft/commands/synchronization/ArgumentTypeInfo.d.ts'
import type { SingletonArgumentInfo$Template } from '../../../../net/minecraft/commands/synchronization/SingletonArgumentInfo$Template.d.ts'
import type { FriendlyByteBuf } from '../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
export class SingletonArgumentInfo<A extends ArgumentType<Object>> extends Object implements ArgumentTypeInfo<A, SingletonArgumentInfo$Template> {
    static contextAware(paramconstructor: (param0: CommandBuildContext) => Object | null): SingletonArgumentInfo<any>;
    static contextFree(paramconstructor: () => Object | null): SingletonArgumentInfo<any>;
    private constructor(constructor: (param0: CommandBuildContext) => A)
    // private template: SingletonArgumentInfo$Template;
    deserializeFromNetwork(in_: FriendlyByteBuf): SingletonArgumentInfo$Template;
    serializeToJson(template: SingletonArgumentInfo$Template, out: JsonObject): void;
    serializeToNetwork(template: SingletonArgumentInfo$Template, out: FriendlyByteBuf): void;
    unpack(argument: A): SingletonArgumentInfo$Template;
}