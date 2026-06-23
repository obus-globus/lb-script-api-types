import type { StringReader } from '../../../../com/mojang/brigadier/StringReader.d.ts'
import type { ArgumentType } from '../../../../com/mojang/brigadier/arguments/ArgumentType.d.ts'
import type { CommandContext } from '../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { DynamicCommandExceptionType } from '../../../../com/mojang/brigadier/exceptions/DynamicCommandExceptionType.d.ts'
import type { SimpleCommandExceptionType } from '../../../../com/mojang/brigadier/exceptions/SimpleCommandExceptionType.d.ts'
import type { Suggestions } from '../../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { SuggestionsBuilder } from '../../../../com/mojang/brigadier/suggestion/SuggestionsBuilder.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { NbtPathArgument$NbtPath } from '../../../../net/minecraft/commands/arguments/NbtPathArgument$NbtPath.d.ts'
export class NbtPathArgument extends Object implements ArgumentType<NbtPathArgument$NbtPath> {
    static ERROR_DATA_TOO_DEEP: SimpleCommandExceptionType;
    static ERROR_INVALID_NODE: SimpleCommandExceptionType;
    static ERROR_NOTHING_FOUND: DynamicCommandExceptionType;
    static getPath(paramcontext: CommandContext<CommandSourceStack>, paramname: string): NbtPathArgument$NbtPath;
    static nbtPath(): NbtPathArgument;
    constructor()
    getExamples(): string[];
    listSuggestions<S extends unknown>(arg0: CommandContext<S>, arg1: SuggestionsBuilder): CompletableFuture<Suggestions>;
    parse<S extends unknown>(arg0: StringReader, arg1: S): NbtPathArgument$NbtPath;
    parse(reader: StringReader): NbtPathArgument$NbtPath;
}