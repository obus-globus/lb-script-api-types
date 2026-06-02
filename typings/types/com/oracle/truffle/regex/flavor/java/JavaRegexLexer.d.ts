import type { RegexSource } from '../../../../../../com/oracle/truffle/regex/RegexSource.d.ts'
import type { RegexSyntaxException } from '../../../../../../com/oracle/truffle/regex/RegexSyntaxException.d.ts'
import type { ClassSetContents } from '../../../../../../com/oracle/truffle/regex/charset/ClassSetContents.d.ts'
import type { Range } from '../../../../../../com/oracle/truffle/regex/charset/Range.d.ts'
import type { UnicodeProperties } from '../../../../../../com/oracle/truffle/regex/charset/UnicodeProperties.d.ts'
import type { JavaFlags } from '../../../../../../com/oracle/truffle/regex/flavor/java/JavaFlags.d.ts'
import type { JavaUnicodeProperties } from '../../../../../../com/oracle/truffle/regex/flavor/java/JavaUnicodeProperties.d.ts'
import type { CompilationBuffer } from '../../../../../../com/oracle/truffle/regex/tregex/buffer/CompilationBuffer.d.ts'
import type { RegexLexer } from '../../../../../../com/oracle/truffle/regex/tregex/parser/RegexLexer.d.ts'
import type { RegexLexer$ClassSetOperator } from '../../../../../../com/oracle/truffle/regex/tregex/parser/RegexLexer$ClassSetOperator.d.ts'
import type { Token } from '../../../../../../com/oracle/truffle/regex/tregex/parser/Token.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JavaRegexLexer extends RegexLexer {
    static HORIZONTAL_WHITE_SPACE: (Object | null)[];
    static NOT_HORIZONTAL_WHITE_SPACE: (Object | null)[];
    static NOT_VERTICAL_WHITE_SPACE: (Object | null)[];
    static VERTICAL_WHITE_SPACE: (Object | null)[];
    static isAscii(paramc: number): boolean;
    static isDecimalDigit(paramc: number): boolean;
    static isHexDigit(paramc: number): boolean;
    static isOctalDigit(paramc: number): boolean;
    constructor(source: RegexSource, flags: JavaFlags, compilationBuffer: CompilationBuffer)
    // private curCharClass: Range[];
    readonly currentFlags: JavaFlags;
    // private flagsStack: JavaFlags[];
    // private unicode: JavaUnicodeProperties;
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
    getDotCodePointSet(): (Object | null)[];
    getIdContinue(): (Object | null)[];
    getIdStart(): (Object | null)[];
    getLocalFlags(): JavaFlags;
    getMaxBackReferenceDigits(): number;
    getPOSIXCharClass(name: string): (Object | null)[];
    getPredefinedCharClass(c: string): (Object | null)[];
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
    isPredefCharClass(c: string): boolean;
    // private javaParseGroupName(): string;
    literalChar(codePoint: number): Token;
    // private parseCharClassInternal(consume: boolean): (Object | null)[];
    parseClassSetExpression(): ClassSetContents;
    parseCodePointInGroupName(): number;
    parseCustomEscape(c: string): Token;
    parseCustomEscapeChar(c: string, inCharClass: boolean): number;
    parseCustomEscapeCharFallback(c: number, inCharClass: boolean): number;
    parseCustomGroupBeginQ(charAfterQuestionMark: string): Token;
    parseGroupLt(): Token;
    // private parseRange(c: string): (Object | null)[];
    parseUnicodeCharacterProperty(invert: boolean): ClassSetContents;
    // private parseUnicodeHexEscape(): number;
    popLocalFlags(): void;
    pushLocalFlags(): void;
    setCurrentFlags(flags: JavaFlags): void;
    validatePOSIXCollationElement(sequence: string): void;
    validatePOSIXEquivalenceClass(sequence: string): void;
}