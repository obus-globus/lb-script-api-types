import type { ImmutableStringReader } from '../../../../../../com/mojang/brigadier/ImmutableStringReader.d.ts'
import type { StringReader } from '../../../../../../com/mojang/brigadier/StringReader.d.ts'
import type { CommandSyntaxException } from '../../../../../../com/mojang/brigadier/exceptions/CommandSyntaxException.d.ts'
import type { Stream } from '../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { DelayedException } from '../../../../../../net/minecraft/util/parsing/packrat/DelayedException.d.ts'
import type { NamedRule } from '../../../../../../net/minecraft/util/parsing/packrat/NamedRule.d.ts'
import type { ParseState } from '../../../../../../net/minecraft/util/parsing/packrat/ParseState.d.ts'
import type { Rule } from '../../../../../../net/minecraft/util/parsing/packrat/Rule.d.ts'
import type { ResourceSuggestion } from '../../../../../../net/minecraft/util/parsing/packrat/commands/ResourceSuggestion.d.ts'
export abstract class ResourceLookupRule<C extends unknown, V extends unknown> extends Object implements Rule<StringReader, V>, ResourceSuggestion {
    constructor(idParser: NamedRule<StringReader, Identifier>, context: C)
    // private context: C;
    // private error: DelayedException<CommandSyntaxException>;
    // private idParser: NamedRule<StringReader, Identifier>;
    parse(state: ParseState<StringReader>): V;
    possibleValues(state: ParseState<StringReader>): Stream<string>;
    validateElement(reader: ImmutableStringReader, id: Identifier): V;
}