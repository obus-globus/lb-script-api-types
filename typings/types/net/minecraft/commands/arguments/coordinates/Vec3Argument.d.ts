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
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class Vec3Argument extends Object implements ArgumentType<Coordinates> {
    static ERROR_MIXED_TYPE: SimpleCommandExceptionType;
    static ERROR_NOT_COMPLETE: SimpleCommandExceptionType;
    static getCoordinates(paramcontext: CommandContext<CommandSourceStack>, paramname: string): Coordinates;
    static getVec3(paramcontext: CommandContext<CommandSourceStack>, paramname: string): Vec3;
    static vec3(): Vec3Argument;
    static vec3(paramcenterCorrect: boolean): Vec3Argument;
    constructor(centerCorrect: boolean)
    // private centerCorrect: boolean;
    getExamples(): E[];
    getExamples(): E[];
    listSuggestions(arg0: CommandContext<S>, arg1: SuggestionsBuilder): CompletableFuture<Suggestions>;
    listSuggestions(context: CommandContext<S>, builder: SuggestionsBuilder): CompletableFuture<Suggestions>;
    parse<T extends Object | number | string | boolean, S extends Object | number | string | boolean>(arg0: StringReader, arg1: S): T;
    parse(reader: StringReader): Coordinates;
}