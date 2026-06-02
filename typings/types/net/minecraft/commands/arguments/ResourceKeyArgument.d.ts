import type { StringReader } from '../../../../com/mojang/brigadier/StringReader.d.ts'
import type { ArgumentType } from '../../../../com/mojang/brigadier/arguments/ArgumentType.d.ts'
import type { CommandContext } from '../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { DynamicCommandExceptionType } from '../../../../com/mojang/brigadier/exceptions/DynamicCommandExceptionType.d.ts'
import type { Suggestions } from '../../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { SuggestionsBuilder } from '../../../../com/mojang/brigadier/suggestion/SuggestionsBuilder.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AdvancementHolder } from '../../../../net/minecraft/advancements/AdvancementHolder.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { Holder$Reference } from '../../../../net/minecraft/core/Holder$Reference.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { RecipeHolder } from '../../../../net/minecraft/world/item/crafting/RecipeHolder.d.ts'
import type { Structure } from '../../../../net/minecraft/world/level/levelgen/structure/Structure.d.ts'
import type { StructureTemplatePool } from '../../../../net/minecraft/world/level/levelgen/structure/pools/StructureTemplatePool.d.ts'
export class ResourceKeyArgument<T extends Object | number | string | boolean> extends Object implements ArgumentType<ResourceKey<T>> {
    static getAdvancement(paramcontext: CommandContext<CommandSourceStack>, paramname: string): AdvancementHolder;
    static getConfiguredFeature(paramcontext: CommandContext<CommandSourceStack>, paramname: string): Holder$Reference<Object>;
    static getRecipe(paramcontext: CommandContext<CommandSourceStack>, paramname: string): RecipeHolder<Object>;
    static getRegistryKey(paramcontext: CommandContext<CommandSourceStack>, paramname: string, paramregistryKey: ResourceKey<Object>, paramexceptionType: DynamicCommandExceptionType): ResourceKey<Object>;
    static getStructure(paramcontext: CommandContext<CommandSourceStack>, paramname: string): Holder$Reference<Structure>;
    static getStructureTemplatePool(paramcontext: CommandContext<CommandSourceStack>, paramname: string): Holder$Reference<StructureTemplatePool>;
    static key(paramkey: ResourceKey<Object>): ResourceKeyArgument<Object>;
    constructor(registryKey: ResourceKey<T[]>)
    // private registryKey: ResourceKey<T[]>;
    getExamples(): E[];
    getExamples(): E[];
    listSuggestions(arg0: CommandContext<S>, arg1: SuggestionsBuilder): CompletableFuture<Suggestions>;
    listSuggestions(context: CommandContext<S>, builder: SuggestionsBuilder): CompletableFuture<Suggestions>;
    parse<S extends Object | number | string | boolean>(arg0: StringReader, arg1: S): T;
    parse(reader: StringReader): ResourceKey<T>;
}