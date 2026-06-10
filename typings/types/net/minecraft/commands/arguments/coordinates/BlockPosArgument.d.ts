import type { StringReader } from '../../../../../com/mojang/brigadier/StringReader.d.ts'
import type { ArgumentType } from '../../../../../com/mojang/brigadier/arguments/ArgumentType.d.ts'
import type { CommandContext } from '../../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { SimpleCommandExceptionType } from '../../../../../com/mojang/brigadier/exceptions/SimpleCommandExceptionType.d.ts'
import type { Suggestions } from '../../../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { SuggestionsBuilder } from '../../../../../com/mojang/brigadier/suggestion/SuggestionsBuilder.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { Coordinates } from '../../../../../net/minecraft/commands/arguments/coordinates/Coordinates.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
export class BlockPosArgument extends Object implements ArgumentType<Coordinates> {
    static ERROR_NOT_LOADED: SimpleCommandExceptionType;
    static ERROR_OUT_OF_BOUNDS: SimpleCommandExceptionType;
    static ERROR_OUT_OF_WORLD: SimpleCommandExceptionType;
    static blockPos(): BlockPosArgument;
    static getBlockPos(paramcontext: CommandContext<CommandSourceStack>, paramname: string): BlockPos;
    static getLoadedBlockPos(paramcontext: CommandContext<CommandSourceStack>, paramname: string): BlockPos;
    static getLoadedBlockPos(paramcontext: CommandContext<CommandSourceStack>, paramlevel: ServerLevel, paramname: string): BlockPos;
    static getSpawnablePos(paramcontext: CommandContext<CommandSourceStack>, paramname: string): BlockPos;
    constructor()
    getExamples(): string[];
    listSuggestions<S extends Object | number | string | boolean>(arg0: CommandContext<S>, arg1: SuggestionsBuilder): CompletableFuture<Suggestions>;
    listSuggestions<S extends Object | number | string | boolean>(context: CommandContext<S>, builder: SuggestionsBuilder): CompletableFuture<Suggestions>;
    parse<S extends Object | number | string | boolean>(arg0: StringReader, arg1: S): Coordinates;
    parse(reader: StringReader): Coordinates;
}