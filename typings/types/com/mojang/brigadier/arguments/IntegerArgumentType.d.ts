import type { StringReader } from '../../../../com/mojang/brigadier/StringReader.d.ts'
import type { ArgumentType } from '../../../../com/mojang/brigadier/arguments/ArgumentType.d.ts'
import type { CommandContext } from '../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { Suggestions } from '../../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { SuggestionsBuilder } from '../../../../com/mojang/brigadier/suggestion/SuggestionsBuilder.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class IntegerArgumentType extends Object implements ArgumentType<number> {
    static getInteger(paramarg0: CommandContext<Object>, paramarg1: string): number;
    static integer(): IntegerArgumentType;
    static integer(paramarg0: number): IntegerArgumentType;
    static integer(paramarg0: number, paramarg1: number): IntegerArgumentType;
    private constructor(arg0: number, arg1: number)
    readonly maximum: number;
    readonly minimum: number;
    equals(arg0: Object | null): boolean;
    getExamples(): string[];
    getMaximum(): number;
    getMinimum(): number;
    hashCode(): number;
    listSuggestions<S extends Object | number | string | boolean>(arg0: CommandContext<S>, arg1: SuggestionsBuilder): CompletableFuture<Suggestions>;
    parse<S extends Object | number | string | boolean>(arg0: StringReader, arg1: S): number;
    parse(arg0: StringReader): number;
    toString(): string;
}