import type { ParserConfiguration } from '../../../../../org/graalvm/shadowed/org/json/ParserConfiguration.d.ts'
export class JSONMLParserConfiguration extends ParserConfiguration {
    static DEFAULT_MAXIMUM_NESTING_DEPTH: number;
    static KEEP_STRINGS: JSONMLParserConfiguration;
    static ORIGINAL: JSONMLParserConfiguration;
    static UNDEFINED_MAXIMUM_NESTING_DEPTH: number;
    constructor()
    constructor(keepStrings: boolean, maxNestingDepth: number)
    clone(): JSONMLParserConfiguration;
    withKeepStrings(newVal: boolean): JSONMLParserConfiguration;
    withMaxNestingDepth(maxNestingDepth: number): JSONMLParserConfiguration;
}