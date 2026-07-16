import type { StringReader } from '../../../../com/mojang/brigadier/StringReader.d.ts'
import type { ArgumentType } from '../../../../com/mojang/brigadier/arguments/ArgumentType.d.ts'
import type { CommandContext } from '../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { Suggestions } from '../../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { SuggestionsBuilder } from '../../../../com/mojang/brigadier/suggestion/SuggestionsBuilder.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandBuildContext } from '../../../../net/minecraft/commands/CommandBuildContext.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { ResourceOrTagArgument$Result } from '../../../../net/minecraft/commands/arguments/ResourceOrTagArgument$Result.d.ts'
import type { HolderLookup } from '../../../../net/minecraft/core/HolderLookup.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
export class ResourceOrTagArgument<T extends unknown> extends Object implements ArgumentType<ResourceOrTagArgument$Result<T>> {
    static getResourceOrTag<T extends unknown>(paramcontext: CommandContext<CommandSourceStack>, paramname: string, paramregistryKey: ResourceKey<T[]>): ResourceOrTagArgument$Result<T>;
    static resourceOrTag<T extends unknown>(paramcontext: CommandBuildContext, paramkey: ResourceKey<T[]>): ResourceOrTagArgument<T>;
    constructor(context: CommandBuildContext, registryKey: ResourceKey<T[]>)
    // private registryKey: ResourceKey<T[]>;
    // private registryLookup: HolderLookup<T>;
    getExamples(): string[];
    listSuggestions<S extends unknown>(arg0: CommandContext<S>, arg1: SuggestionsBuilder): CompletableFuture<Suggestions>;
    listSuggestions<S extends unknown>(context: CommandContext<S>, builder: SuggestionsBuilder): CompletableFuture<Suggestions>;
    parse<S extends unknown>(arg0: StringReader, arg1: S): ResourceOrTagArgument$Result<T>;
    parse(reader: StringReader): ResourceOrTagArgument$Result<T>;
}