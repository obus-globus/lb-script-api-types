import type { StringReader } from '../../../../com/mojang/brigadier/StringReader.d.ts'
import type { ArgumentType } from '../../../../com/mojang/brigadier/arguments/ArgumentType.d.ts'
import type { CommandContext } from '../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { Dynamic2CommandExceptionType } from '../../../../com/mojang/brigadier/exceptions/Dynamic2CommandExceptionType.d.ts'
import type { Dynamic3CommandExceptionType } from '../../../../com/mojang/brigadier/exceptions/Dynamic3CommandExceptionType.d.ts'
import type { Suggestions } from '../../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { SuggestionsBuilder } from '../../../../com/mojang/brigadier/suggestion/SuggestionsBuilder.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandBuildContext } from '../../../../net/minecraft/commands/CommandBuildContext.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { Holder$Reference } from '../../../../net/minecraft/core/Holder$Reference.d.ts'
import type { HolderLookup } from '../../../../net/minecraft/core/HolderLookup.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { WorldClock } from '../../../../net/minecraft/world/clock/WorldClock.d.ts'
import type { MobEffect } from '../../../../net/minecraft/world/effect/MobEffect.d.ts'
import type { Attribute } from '../../../../net/minecraft/world/entity/ai/attributes/Attribute.d.ts'
import type { Enchantment } from '../../../../net/minecraft/world/item/enchantment/Enchantment.d.ts'
import type { Structure } from '../../../../net/minecraft/world/level/levelgen/structure/Structure.d.ts'
import type { Timeline } from '../../../../net/minecraft/world/timeline/Timeline.d.ts'
export class ResourceArgument<T extends Object | number | string | boolean> extends Object implements ArgumentType<Holder$Reference<T>> {
    static ERROR_INVALID_RESOURCE_TYPE: Dynamic3CommandExceptionType;
    static ERROR_UNKNOWN_RESOURCE: Dynamic2CommandExceptionType;
    static getAttribute(paramcontext: CommandContext<CommandSourceStack>, paramname: string): Holder$Reference<Attribute>;
    static getClock(paramcontext: CommandContext<CommandSourceStack>, paramname: string): Holder$Reference<WorldClock>;
    static getConfiguredFeature(paramcontext: CommandContext<CommandSourceStack>, paramname: string): Holder$Reference<Object>;
    static getEnchantment(paramcontext: CommandContext<CommandSourceStack>, paramname: string): Holder$Reference<Enchantment>;
    static getEntityType(paramcontext: CommandContext<CommandSourceStack>, paramname: string): Holder$Reference<Object>;
    static getMobEffect(paramcontext: CommandContext<CommandSourceStack>, paramname: string): Holder$Reference<MobEffect>;
    static getResource(paramcontext: CommandContext<CommandSourceStack>, paramname: string, paramregistryKey: ResourceKey<Object>): Holder$Reference<Object>;
    static getStructure(paramcontext: CommandContext<CommandSourceStack>, paramname: string): Holder$Reference<Structure>;
    static getSummonableEntityType(paramcontext: CommandContext<CommandSourceStack>, paramname: string): Holder$Reference<Object>;
    static getTimeline(paramcontext: CommandContext<CommandSourceStack>, paramname: string): Holder$Reference<Timeline>;
    static resource(paramcontext: CommandBuildContext, paramkey: ResourceKey<Object>): ResourceArgument<Object>;
    constructor(context: CommandBuildContext, registryKey: ResourceKey<T[]>)
    // private registryKey: ResourceKey<T[]>;
    // private registryLookup: HolderLookup<T>;
    getExamples(): E[];
    getExamples(): E[];
    listSuggestions(arg0: CommandContext<S>, arg1: SuggestionsBuilder): CompletableFuture<Suggestions>;
    listSuggestions(context: CommandContext<S>, builder: SuggestionsBuilder): CompletableFuture<Suggestions>;
    parse<S extends Object | number | string | boolean>(arg0: StringReader, arg1: S): T;
    parse(reader: StringReader): Holder$Reference<T>;
}