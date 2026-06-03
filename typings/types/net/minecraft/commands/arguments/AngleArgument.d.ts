import type { StringReader } from '../../../../com/mojang/brigadier/StringReader.d.ts'
import type { ArgumentType } from '../../../../com/mojang/brigadier/arguments/ArgumentType.d.ts'
import type { CommandContext } from '../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { SimpleCommandExceptionType } from '../../../../com/mojang/brigadier/exceptions/SimpleCommandExceptionType.d.ts'
import type { Suggestions } from '../../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { SuggestionsBuilder } from '../../../../com/mojang/brigadier/suggestion/SuggestionsBuilder.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { AngleArgument$SingleAngle } from '../../../../net/minecraft/commands/arguments/AngleArgument$SingleAngle.d.ts'
export class AngleArgument extends Object implements ArgumentType<AngleArgument$SingleAngle> {
    static ERROR_INVALID_ANGLE: SimpleCommandExceptionType;
    static ERROR_NOT_COMPLETE: SimpleCommandExceptionType;
    static angle(): AngleArgument;
    static getAngle(paramcontext: CommandContext<CommandSourceStack>, paramname: string): number;
    constructor()
    getExamples(): E[];
    getExamples(): E[];
    listSuggestions(arg0: CommandContext<S>, arg1: SuggestionsBuilder): CompletableFuture<Suggestions>;
    parse<T extends Object | number | string | boolean, S extends Object | number | string | boolean>(arg0: StringReader, arg1: S): T;
    parse(reader: StringReader): AngleArgument$SingleAngle;
    parse<S extends Object | number | string | boolean>(arg0: StringReader, arg1: S): AngleArgument$SingleAngle;
}