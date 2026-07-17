import type { Source } from '../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { RegexOptions } from '../../../../com/oracle/truffle/regex/RegexOptions.d.ts'
import type { RegexSyntaxException } from '../../../../com/oracle/truffle/regex/RegexSyntaxException.d.ts'
import type { MatchingMode } from '../../../../com/oracle/truffle/regex/tregex/parser/MatchingMode.d.ts'
import type { RegexFlavor } from '../../../../com/oracle/truffle/regex/tregex/parser/RegexFlavor.d.ts'
import type { Encoding } from '../../../../com/oracle/truffle/regex/tregex/string/Encoding.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { OptionKey } from '../../../../org/graalvm/options/OptionKey.d.ts'
import type { OptionValues } from '../../../../org/graalvm/options/OptionValues.d.ts'
export class RegexOptions$Builder extends Object {
    private constructor(source: Source, sourceString: string, optionValues: OptionValues)
    // private flags: number;
    // private i: number;
    // private javaJDKVersion: number;
    // private matchingMode: MatchingMode;
    // private maxBackTrackerCompileSize: number;
    // private maxDFASize: number;
    // private maxParserTreeSize: number;
    // private optionValues: OptionValues;
    // private pythonLocale: string;
    // private quantifierUnrollThresholdGroup: number;
    // private quantifierUnrollThresholdSingleCC: number;
    // private source: Source;
    // private src: string;
    build(): RegexOptions;
    encoding(encoding: Encoding): RegexOptions$Builder;
    // private expectEncodingValue(enc: Encoding): Encoding;
    // private expectOptionName(key: string): void;
    // private expectValue<T extends unknown>(returnValue: T, value: string, ...expected: string[]): T;
    // private findValueEndPos(errorMsg: string): number;
    flavor(flavor: RegexFlavor): RegexOptions$Builder;
    getEncoding(): Encoding;
    getFlavor(): RegexFlavor;
    // private isBitSet(bit: number): boolean;
    isUtf16ExplodeAstralSymbols(): boolean;
    // private lookAheadInKey(offset: number): string;
    // private optionsSyntaxError(msg: string): RegexSyntaxException;
    // private optionsSyntaxErrorUnexpectedKey(): RegexSyntaxException;
    // private optionsSyntaxErrorUnexpectedValue(...expected: string[]): RegexSyntaxException;
    // private optionsSyntaxErrorUnexpectedValueMsg(msg: string): RegexSyntaxException;
    // private parseBooleanOption(key: string, flag: number): void;
    // private parseBooleanSrcOption(key: OptionKey<boolean>, flag: number): void;
    // private parseEncoding(): Encoding;
    // private parseFlavor(): RegexFlavor;
    // private parseIntSrcOption(optionName: string, key: OptionKey<number>, min: number): number;
    // private parseMatchingMode(optionName: string): MatchingMode;
    parseOptions(): number;
    // private parseShortOption(key: string): number;
    // private parseShortSrcOption(optionName: string, key: OptionKey<number>, min: number): number;
    // private parseStringOption(key: string, errorMsg: string): string;
}