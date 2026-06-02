import type { StringReader } from '../../../../../../com/mojang/brigadier/StringReader.d.ts'
import type { DynamicCommandExceptionType } from '../../../../../../com/mojang/brigadier/exceptions/DynamicCommandExceptionType.d.ts'
import type { Suggestions } from '../../../../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { SuggestionsBuilder } from '../../../../../../com/mojang/brigadier/suggestion/SuggestionsBuilder.d.ts'
import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { DynamicOps } from '../../../../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { CompletableFuture } from '../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Dictionary } from '../../../../../../net/minecraft/util/parsing/packrat/Dictionary.d.ts'
import type { NamedRule } from '../../../../../../net/minecraft/util/parsing/packrat/NamedRule.d.ts'
import type { ParseState } from '../../../../../../net/minecraft/util/parsing/packrat/ParseState.d.ts'
import type { CommandArgumentParser } from '../../../../../../net/minecraft/util/parsing/packrat/commands/CommandArgumentParser.d.ts'
export class Grammar<T extends Object | number | string | boolean> extends Record implements CommandArgumentParser<T> {
    constructor(rules: Dictionary<StringReader>, top: NamedRule<StringReader, T>)
    // private rules: Dictionary<StringReader>;
    // private top: NamedRule<StringReader, T>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    mapResult(mapper: (param0: T) => S): CommandArgumentParser<S>;
    parse(state: ParseState<StringReader>): Optional<T>;
    parseForCommands(reader: StringReader): T;
    parseForSuggestions(suggestionsBuilder: SuggestionsBuilder): CompletableFuture<Suggestions>;
    rules(): Dictionary<StringReader>;
    toString(): string;
    top(): NamedRule<StringReader, T>;
    withCodec(ops: DynamicOps<O>, valueParser: CommandArgumentParser<O>, codec: Codec<T>, exceptionType: DynamicCommandExceptionType): CommandArgumentParser<T>;
}