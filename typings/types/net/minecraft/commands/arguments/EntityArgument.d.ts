import type { StringReader } from '../../../../com/mojang/brigadier/StringReader.d.ts'
import type { ArgumentType } from '../../../../com/mojang/brigadier/arguments/ArgumentType.d.ts'
import type { CommandContext } from '../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { SimpleCommandExceptionType } from '../../../../com/mojang/brigadier/exceptions/SimpleCommandExceptionType.d.ts'
import type { Suggestions } from '../../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { SuggestionsBuilder } from '../../../../com/mojang/brigadier/suggestion/SuggestionsBuilder.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { EntitySelector } from '../../../../net/minecraft/commands/arguments/selector/EntitySelector.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
export class EntityArgument extends Object implements ArgumentType<EntitySelector> {
    static ERROR_NOT_SINGLE_ENTITY: SimpleCommandExceptionType;
    static ERROR_NOT_SINGLE_PLAYER: SimpleCommandExceptionType;
    static ERROR_ONLY_PLAYERS_ALLOWED: SimpleCommandExceptionType;
    static ERROR_SELECTORS_NOT_ALLOWED: SimpleCommandExceptionType;
    static NO_ENTITIES_FOUND: SimpleCommandExceptionType;
    static NO_PLAYERS_FOUND: SimpleCommandExceptionType;
    static entities(): EntityArgument;
    static entity(): EntityArgument;
    static getEntities(paramcontext: CommandContext<CommandSourceStack>, paramname: string): Entity[];
    static getEntity(paramcontext: CommandContext<CommandSourceStack>, paramname: string): Entity;
    static getOptionalEntities(paramcontext: CommandContext<CommandSourceStack>, paramname: string): Entity[];
    static getOptionalPlayers(paramcontext: CommandContext<CommandSourceStack>, paramname: string): ServerPlayer[];
    static getPlayer(paramcontext: CommandContext<CommandSourceStack>, paramname: string): ServerPlayer;
    static getPlayers(paramcontext: CommandContext<CommandSourceStack>, paramname: string): ServerPlayer[];
    static player(): EntityArgument;
    static players(): EntityArgument;
    constructor(single: boolean, playersOnly: boolean)
    // private playersOnly: boolean;
    // private single: boolean;
    getExamples(): string[];
    listSuggestions<S extends unknown>(arg0: CommandContext<S>, arg1: SuggestionsBuilder): CompletableFuture<Suggestions>;
    listSuggestions<S extends unknown>(contextBuilder: CommandContext<S>, builder: SuggestionsBuilder): CompletableFuture<Suggestions>;
    parse<S extends unknown>(arg0: StringReader, arg1: S): EntitySelector;
    parse(reader: StringReader): EntitySelector;
    parse<S extends unknown>(reader: StringReader, source: S): EntitySelector;
    // private parse(reader: StringReader, allowSelectors: boolean): EntitySelector;
}