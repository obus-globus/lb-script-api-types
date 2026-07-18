import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { ParseResult } from '../../../../../io/ktor/http/parsing/ParseResult.d.ts'
import type { Parser } from '../../../../../io/ktor/http/parsing/Parser.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Regex } from '../../../../../kotlin/text/Regex.d.ts'
export class RegexParser extends Object implements Parser {
    constructor(expression: Regex, indexes: JavaMap<string, number[]>)
    // private expression: Regex;
    // private indexes: JavaMap<string, number[]>;
    match(input: string): boolean;
    parse(input: string): ParseResult | null;
}