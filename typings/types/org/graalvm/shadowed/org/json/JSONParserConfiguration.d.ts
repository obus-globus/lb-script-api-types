import type { ParserConfiguration } from '../../../../../org/graalvm/shadowed/org/json/ParserConfiguration.d.ts'
export class JSONParserConfiguration extends ParserConfiguration {
    static DEFAULT_MAXIMUM_NESTING_DEPTH: number;
    static UNDEFINED_MAXIMUM_NESTING_DEPTH: number;
    constructor()
    readonly overwriteDuplicateKey: boolean;
    readonly strictMode: boolean;
    readonly useNativeNulls: boolean;
    clone(): JSONParserConfiguration;
    isOverwriteDuplicateKey(): boolean;
    isStrictMode(): boolean;
    isUseNativeNulls(): boolean;
    withMaxNestingDepth(maxNestingDepth: number): JSONParserConfiguration;
    withOverwriteDuplicateKey(overwriteDuplicateKey: boolean): JSONParserConfiguration;
    withStrictMode(): JSONParserConfiguration;
    withStrictMode(mode: boolean): JSONParserConfiguration;
    withUseNativeNulls(useNativeNulls: boolean): JSONParserConfiguration;
}