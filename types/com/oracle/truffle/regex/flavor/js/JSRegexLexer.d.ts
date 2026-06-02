import type { RegexFlags } from '../../../../../../com/oracle/truffle/regex/RegexFlags.d.ts'
import type { RegexSource } from '../../../../../../com/oracle/truffle/regex/RegexSource.d.ts'
import type { RegexSyntaxException } from '../../../../../../com/oracle/truffle/regex/RegexSyntaxException.d.ts'
import type { ClassSetContents } from '../../../../../../com/oracle/truffle/regex/charset/ClassSetContents.d.ts'
import type { Range } from '../../../../../../com/oracle/truffle/regex/charset/Range.d.ts'
import type { UnicodeProperties } from '../../../../../../com/oracle/truffle/regex/charset/UnicodeProperties.d.ts'
import type { CompilationBuffer } from '../../../../../../com/oracle/truffle/regex/tregex/buffer/CompilationBuffer.d.ts'
import type { RegexLexer } from '../../../../../../com/oracle/truffle/regex/tregex/parser/RegexLexer.d.ts'
import type { RegexLexer$ClassSetOperator } from '../../../../../../com/oracle/truffle/regex/tregex/parser/RegexLexer$ClassSetOperator.d.ts'
import type { Token } from '../../../../../../com/oracle/truffle/regex/tregex/parser/Token.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSRegexLexer extends RegexLexer {
    static isAscii(paramc: number): boolean;
    static isDecimalDigit(paramc: number): boolean;
    static isHexDigit(paramc: number): boolean;
    static isOctalDigit(paramc: number): boolean;
    constructor(source: RegexSource, flags: RegexFlags, compilationBuffer: CompilationBuffer)
    // private flagsStack: RegexFlags[];
    readonly globalFlags: RegexFlags;
    boundedQuantifierMaxValue(): number;
    caseFoldClassSetAtom(classSetContents: ClassSetContents): ClassSetContents;
    caseFoldUnfold(charClass: Range[]): void;
    checkClassSetCharacter(codePoint: number): void;
    complementClassSet(codePointSet: (Object | null)[]): (Object | null)[];
    featureEnabledAZPositionAssertions(): boolean;
    featureEnabledBoundedQuantifierEmptyMin(): boolean;
    featureEnabledCCRangeWithPredefCharClass(): boolean;
    featureEnabledCharClassFirstBracketIsLiteral(): boolean;
    featureEnabledClassSetExpressions(): boolean;
    featureEnabledForwardReferences(): boolean;
    featureEnabledGroupComments(): boolean;
    featureEnabledIgnoreCase(): boolean;
    featureEnabledIgnoreWhiteSpace(): boolean;
    featureEnabledLineComments(): boolean;
    featureEnabledNestedCharClasses(): boolean;
    featureEnabledOctalEscapes(): boolean;
    featureEnabledPOSIXCharClasses(): boolean;
    featureEnabledPossessiveQuantifiers(): boolean;
    featureEnabledSpecialGroups(): boolean;
    featureEnabledUnicodePropertyEscapes(): boolean;
    featureEnabledZLowerCaseAssertion(): boolean;
    // private finishFlagModifier(addFlags: RegexFlags, removeFlags: RegexFlags): Token;
    getDotCodePointSet(): (Object | null)[];
    getGlobalFlags(): RegexFlags;
    getIdContinue(): (Object | null)[];
    getIdStart(): (Object | null)[];
    getLocalFlags(): RegexFlags;
    getMaxBackReferenceDigits(): number;
    getPOSIXCharClass(name: string): (Object | null)[];
    getPredefinedCharClass(c: string): (Object | null)[];
    // private getPredefinedCharClassCPS(c: string): (Object | null)[];
    getUnicodeProperties(): UnicodeProperties;
    getWhitespace(): number[];
    handleBoundedQuantifierEmptyOrMissingMin(): Token;
    handleBoundedQuantifierInvalidCharacter(): Token;
    handleBoundedQuantifierOutOfOrder(): RegexSyntaxException;
    handleBoundedQuantifierOverflow(min: number, max: number): Token;
    handleBoundedQuantifierOverflowMin(min: number, max: number): Token;
    handleCCRangeOutOfOrder(startPos: number): RegexSyntaxException;
    handleCCRangeWithPredefCharClass(startPos: number, firstAtom: ClassSetContents, secondAtom: ClassSetContents): void;
    handleComplementOfStringSet(): RegexSyntaxException;
    handleGroupRedefinition(name: string, newId: number, oldId: number): void;
    handleIncompleteEscapeX(): void;
    handleInvalidBackReference(reference: number): Token;
    handleInvalidCharInCharClass(): RegexSyntaxException;
    // private handleInvalidControlEscape(): string;
    // private handleInvalidEscape(c: number): number;
    handleInvalidGroupBeginQ(): RegexSyntaxException;
    handleMissingClassSetOperand(operator: RegexLexer$ClassSetOperator): RegexSyntaxException;
    handleMixedClassSetOperators(leftOperator: RegexLexer$ClassSetOperator, rightOperator: RegexLexer$ClassSetOperator): RegexSyntaxException;
    handleOctalOutOfRange(): void;
    handleRangeAsClassSetOperand(operator: RegexLexer$ClassSetOperator): RegexSyntaxException;
    handleUnfinishedEscape(): void;
    handleUnfinishedGroupComment(): void;
    handleUnfinishedGroupQ(): RegexSyntaxException;
    handleUnfinishedRangeInClassSet(): RegexSyntaxException;
    handleUnmatchedLeftBracket(): RegexSyntaxException;
    handleUnmatchedRightBrace(): void;
    handleUnmatchedRightBracket(): void;
    // private jsParseGroupName(): string;
    parseCodePointInGroupName(): number;
    parseCustomEscape(c: string): Token;
    parseCustomEscapeChar(c: string, inCharClass: boolean): number;
    parseCustomEscapeCharFallback(c: number, inCharClass: boolean): number;
    parseCustomGroupBeginQ(charAfterQuestionMark: string): Token;
    // private parseFlagModifier(charAfterQuestionMark: string): Token;
    parseGroupLt(): Token;
    // private parseHexUnicode(minDigits: number, maxDigits: number, maxValue: number): number;
    // private parseLocalFlags(firstChar: string): RegexFlags;
    // private parseUnicodeEscapeChar(unicodeMode: boolean): number;
    popLocalFlags(): void;
    pushLocalFlags(localFlags: RegexFlags): void;
    validatePOSIXCollationElement(sequence: string): void;
    validatePOSIXEquivalenceClass(sequence: string): void;
}