import type { StringReader } from '../../../../../../com/mojang/brigadier/StringReader.d.ts'
import type { CommandSyntaxException } from '../../../../../../com/mojang/brigadier/exceptions/CommandSyntaxException.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DelayedException } from '../../../../../../net/minecraft/util/parsing/packrat/DelayedException.d.ts'
import type { ParseState } from '../../../../../../net/minecraft/util/parsing/packrat/ParseState.d.ts'
import type { Rule } from '../../../../../../net/minecraft/util/parsing/packrat/Rule.d.ts'
export abstract class NumberRunParseRule extends Object implements Rule<StringReader, string> {
    constructor(noValueError: DelayedException<CommandSyntaxException>, underscoreNotAllowedError: DelayedException<CommandSyntaxException>)
    // private noValueError: DelayedException<CommandSyntaxException>;
    // private underscoreNotAllowedError: DelayedException<CommandSyntaxException>;
    isAccepted(c: string): boolean;
    parse(state: ParseState<StringReader>): string;
}