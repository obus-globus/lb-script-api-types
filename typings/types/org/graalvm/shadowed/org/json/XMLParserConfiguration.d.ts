import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ParserConfiguration } from '../../../../../org/graalvm/shadowed/org/json/ParserConfiguration.d.ts'
import type { XMLXsiTypeConverter } from '../../../../../org/graalvm/shadowed/org/json/XMLXsiTypeConverter.d.ts'
export class XMLParserConfiguration extends ParserConfiguration {
    static DEFAULT_MAXIMUM_NESTING_DEPTH: number;
    static KEEP_STRINGS: XMLParserConfiguration;
    static ORIGINAL: XMLParserConfiguration;
    static UNDEFINED_MAXIMUM_NESTING_DEPTH: number;
    constructor()
    constructor(keepStrings: boolean)
    constructor(keepStrings: boolean, cDataTagName: string)
    constructor(keepStrings: boolean, cDataTagName: string, convertNilAttributeToNull: boolean)
    private constructor(keepStrings: boolean, cDataTagName: string, convertNilAttributeToNull: boolean, xsiTypeMap: { [key: string]: XMLXsiTypeConverter<Object> }, forceList: string[], maxNestingDepth: number, closeEmptyTag: boolean, keepNumberAsString: boolean, keepBooleanAsString: boolean)
    constructor(cDataTagName: string)
    readonly cDataTagName: string;
    readonly closeEmptyTag: boolean;
    readonly convertNilAttributeToNull: boolean;
    readonly forceList: string[];
    readonly keepBooleanAsString: boolean;
    readonly keepNumberAsString: boolean;
    // private shouldTrimWhiteSpace: boolean;
    readonly xsiTypeMap: { [key: string]: XMLXsiTypeConverter<Object> };
    clone(): XMLParserConfiguration;
    getForceList(): string[];
    getXsiTypeMap(): { [key: string]: XMLXsiTypeConverter<Object> };
    getcDataTagName(): string;
    isCloseEmptyTag(): boolean;
    isConvertNilAttributeToNull(): boolean;
    isKeepBooleanAsString(): boolean;
    isKeepNumberAsString(): boolean;
    shouldTrimWhiteSpace(): boolean;
    withCloseEmptyTag(closeEmptyTag: boolean): XMLParserConfiguration;
    withConvertNilAttributeToNull(newVal: boolean): XMLParserConfiguration;
    withForceList(forceList: string[]): XMLParserConfiguration;
    withKeepBooleanAsString(newVal: boolean): XMLParserConfiguration;
    withKeepNumberAsString(newVal: boolean): XMLParserConfiguration;
    withKeepStrings(newVal: boolean): XMLParserConfiguration;
    withMaxNestingDepth(maxNestingDepth: number): XMLParserConfiguration;
    withShouldTrimWhitespace(shouldTrimWhiteSpace: boolean): XMLParserConfiguration;
    withXsiTypeMap(xsiTypeMap: { [key: string]: XMLXsiTypeConverter<Object> }): XMLParserConfiguration;
    withcDataTagName(newVal: string): XMLParserConfiguration;
}