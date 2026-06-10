import type { StringReader } from '../../../../com/mojang/brigadier/StringReader.d.ts'
import type { ArgumentType } from '../../../../com/mojang/brigadier/arguments/ArgumentType.d.ts'
import type { CommandContext } from '../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { Dynamic2CommandExceptionType } from '../../../../com/mojang/brigadier/exceptions/Dynamic2CommandExceptionType.d.ts'
import type { Suggestions } from '../../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { SuggestionsBuilder } from '../../../../com/mojang/brigadier/suggestion/SuggestionsBuilder.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandBuildContext } from '../../../../net/minecraft/commands/CommandBuildContext.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { Holder$Reference } from '../../../../net/minecraft/core/Holder$Reference.d.ts'
import type { HolderLookup } from '../../../../net/minecraft/core/HolderLookup.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
export class ResourceSelectorArgument<T extends Object | number | string | boolean> extends Object implements ArgumentType<Holder$Reference<T>[]> {
    static ERROR_NO_MATCHES: Dynamic2CommandExceptionType;
    static getSelectedResources(paramcontext: CommandContext<CommandSourceStack>, paramname: string): Holder$Reference<Object>[];
    static parse(paramreader: StringReader, paramregistry: HolderLookup<Object>): Holder$Reference<Object>[];
    static resourceSelector(paramcontext: CommandBuildContext, paramregistry: ResourceKey<(Object | null)[]>): ResourceSelectorArgument<Object>;
    private constructor(context: CommandBuildContext, registryKey: ResourceKey<T[]>)
    // private registryKey: ResourceKey<T[]>;
    // private registryLookup: HolderLookup<T>;
    getExamples(): string[];
    listSuggestions<S extends Object | number | string | boolean>(arg0: CommandContext<S>, arg1: SuggestionsBuilder): CompletableFuture<Suggestions>;
    listSuggestions<S extends Object | number | string | boolean>(context: CommandContext<S>, builder: SuggestionsBuilder): CompletableFuture<Suggestions>;
    parse<S extends Object | number | string | boolean>(arg0: StringReader, arg1: S): Holder$Reference<T>[];
    parse(reader: StringReader): Holder$Reference<T>[];
}