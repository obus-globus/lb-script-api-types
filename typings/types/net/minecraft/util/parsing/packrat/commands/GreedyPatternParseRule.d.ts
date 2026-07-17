import type { StringReader } from '../../../../../../com/mojang/brigadier/StringReader.d.ts'
import type { CommandSyntaxException } from '../../../../../../com/mojang/brigadier/exceptions/CommandSyntaxException.d.ts'
import type { Pattern } from '../../../../../../java/util/regex/Pattern.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DelayedException } from '../../../../../../net/minecraft/util/parsing/packrat/DelayedException.d.ts'
import type { ParseState } from '../../../../../../net/minecraft/util/parsing/packrat/ParseState.d.ts'
import type { Rule } from '../../../../../../net/minecraft/util/parsing/packrat/Rule.d.ts'
export class GreedyPatternParseRule extends Object implements Rule<StringReader, string> {
    constructor(pattern: Pattern, error: DelayedException<CommandSyntaxException>)
    // private error: DelayedException<CommandSyntaxException>;
    // private pattern: Pattern;
    parse(state: ParseState<StringReader>): string;
}