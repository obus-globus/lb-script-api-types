import type { StringArgumentType } from '../../../../../com/mojang/brigadier/arguments/StringArgumentType.d.ts'
import type { StringArgumentType$StringType } from '../../../../../com/mojang/brigadier/arguments/StringArgumentType$StringType.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CommandBuildContext } from '../../../../../net/minecraft/commands/CommandBuildContext.d.ts'
import type { ArgumentTypeInfo } from '../../../../../net/minecraft/commands/synchronization/ArgumentTypeInfo.d.ts'
import type { ArgumentTypeInfo$Template } from '../../../../../net/minecraft/commands/synchronization/ArgumentTypeInfo$Template.d.ts'
import type { StringArgumentSerializer } from '../../../../../net/minecraft/commands/synchronization/brigadier/StringArgumentSerializer.d.ts'
export class StringArgumentSerializer$Template extends Object implements ArgumentTypeInfo$Template<StringArgumentType> {
    constructor(null_: StringArgumentSerializer, type: StringArgumentType$StringType)
    // private type: StringArgumentType$StringType;
    instantiate(context: CommandBuildContext): StringArgumentType;
    type(): ArgumentTypeInfo<StringArgumentType, any>;
}