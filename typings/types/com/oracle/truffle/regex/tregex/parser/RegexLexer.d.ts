import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { RegexSource } from '../../../../../../com/oracle/truffle/regex/RegexSource.d.ts'
import type { RegexSyntaxException } from '../../../../../../com/oracle/truffle/regex/RegexSyntaxException.d.ts'
import type { RegexSyntaxException$ErrorCode } from '../../../../../../com/oracle/truffle/regex/RegexSyntaxException$ErrorCode.d.ts'
import type { ClassSetContents } from '../../../../../../com/oracle/truffle/regex/charset/ClassSetContents.d.ts'
import type { Range } from '../../../../../../com/oracle/truffle/regex/charset/Range.d.ts'
import type { UnicodeProperties } from '../../../../../../com/oracle/truffle/regex/charset/UnicodeProperties.d.ts'
import type { CompilationBuffer } from '../../../../../../com/oracle/truffle/regex/tregex/buffer/CompilationBuffer.d.ts'
import type { RegexLexer$ClassSetOperator } from '../../../../../../com/oracle/truffle/regex/tregex/parser/RegexLexer$ClassSetOperator.d.ts'
import type { RegexLexer$ParseGroupNameResult } from '../../../../../../com/oracle/truffle/regex/tregex/parser/RegexLexer$ParseGroupNameResult.d.ts'
import type { Token } from '../../../../../../com/oracle/truffle/regex/tregex/parser/Token.d.ts'
import type { Encodings$Encoding } from '../../../../../../com/oracle/truffle/regex/tregex/string/Encodings$Encoding.d.ts'
import type { Runnable } from '../../../../../../java/lang/Runnable.d.ts'
import type { IntPredicate } from '../../../../../../java/util/function/IntPredicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class RegexLexer extends Object {
    static isAscii(paramc: number): boolean;
    static isDecimalDigit(paramc: number): boolean;
    static isHexDigit(paramc: number): boolean;
    static isOctalDigit(paramc: number): boolean;
    constructor(source: RegexSource, compilationBuffer: CompilationBuffer)
    // private charClassCurAtomStartIndex: number;
    // private charClassEmitInvalidRangeAtoms: number;
    readonly compilationBuffer: CompilationBuffer;
    // private curCharClass: Range[];
    readonly curCharClassInverted: boolean;
    // private curCharClassStartIndex: number;
    // private curStartIndex: number;
    // private encoding: Encodings$Encoding;
    // private identifiedAllGroups: boolean;
    // private nGroups: number;
    namedCaptureGroups: JavaMap<string, number[]>;
    // private pattern: string;
    // private position: number;
    source: RegexSource;
    advance(): void;
    advance(len: number): void;
    atEnd(): boolean;
    boundedQuantifierMaxValue(): number;
    caseFoldClassSetAtom(classSetContents: ClassSetContents): ClassSetContents;
    caseFoldUnfold(codePointSet: (Object | null)[]): (Object | null)[];
    caseFoldUnfold(charClass: Range[]): void;
    // private charClass(codePointSet: (Object | null)[]): Token;
    checkClassSetCharacter(codePoint: number): void;
    complementClassSet(codePointSet: (Object | null)[]): (Object | null)[];
    consumeChar(): string;
    consumingLookahead(predicate: (param0: number) => boolean, length: number): boolean;
    consumingLookahead(character: string): boolean;
    consumingLookahead(match: string): boolean;
    count(predicate: (param0: number) => boolean): number;
    count(predicate: (param0: number) => boolean, fromIndex: number, toIndex: number): number;
    countDecimalDigits(): number;
    // private countDecimalDigits(maxLength: number): number;
    countFrom(predicate: (param0: number) => boolean, fromIndex: number): number;
    countUpTo(predicate: (param0: number) => boolean, max: number): number;
    // private countZeros(fromIndex: number): number;
    curChar(): string;
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
    findChars(...chars: string[]): boolean;
    finishSurrogatePair(c: string): number;
    getCompilationBuffer(): CompilationBuffer;
    getDotCodePointSet(): (Object | null)[];
    getIdContinue(): (Object | null)[];
    getIdStart(): (Object | null)[];
    getLastAtomPosition(): number;
    getLastCharacterClassBeginPosition(): number;
    getLastTokenPosition(): number;
    getMaxBackReferenceDigits(): number;
    getNamedCaptureGroups(): JavaMap<string, number[]>;
    // private getNext(): Token;
    getNumberOfParsedGroups(): number;
    getPOSIXCharClass(name: string): (Object | null)[];
    getPredefinedCharClass(c: string): (Object | null)[];
    getSingleNamedGroupNumber(name: string): number;
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
    hasNamedCaptureGroups(): boolean;
    hasNext(): boolean;
    // private identifyCaptureGroups(): void;
    inCharacterClass(): boolean;
    isCurCharClassInverted(): boolean;
    // private isEscapeCharClass(c: string): boolean;
    isPredefCharClass(c: string): boolean;
    // private isQuantifierOutOfOrder(parsedMin: number, parsedMax: number, startMin: number, lengthMin: number, lengthMax: number): boolean;
    literalChar(codePoint: number): Token;
    lookahead(predicate: (param0: number) => boolean, length: number): boolean;
    lookahead(match: string): boolean;
    lookbehind(c: string): boolean;
    next(): Token;
    numberOfCaptureGroupsSoFar(): number;
    // private parseCharClassAtom(c: string): ClassSetContents;
    parseCharClassAtomCodePoint(c: string): number;
    // private parseCharClassAtomInner(c: string): ClassSetContents;
    parseCharClassAtomPredefCharClass(c: string): ClassSetContents;
    parseClassSetExpression(): ClassSetContents;
    // private parseClassSetOperandOrRange(): ClassSetContents;
    // private parseClassSetOperator(): RegexLexer$ClassSetOperator;
    // private parseClassSetString(): string;
    // private parseClassSetStrings(c: string): ClassSetContents;
    parseCodePointInGroupName(): number;
    parseCustomEscape(c: string): Token;
    parseCustomEscapeChar(c: string, inCharClass: boolean): number;
    parseCustomEscapeCharFallback(c: number, inCharClass: boolean): number;
    parseCustomGroupBeginQ(charAfterQuestionMark: string): Token;
    // private parseEscape(): Token;
    // private parseEscapeChar(c: string, inCharClass: boolean): number;
    // private parseEscapeCharClass(c: string): ClassSetContents;
    // private parseGroupBegin(): Token;
    parseGroupLt(): Token;
    parseGroupName(terminator: string): RegexLexer$ParseGroupNameResult;
    parseHex(minDigits: number, maxDigits: number, maxValue: number, handleTooFewDigits: () => void, handleValueTooLarge: () => void): number;
    parseIntSaturated(firstDigit: number, length: number, returnOnOverflow: number): number;
    parseIntSaturated(firstDigit: number, length: number, returnOnOverflow: number, maxValue: number): number;
    parseOctal(firstDigit: number, maxDigits: number): number;
    // private parsePOSIXCharClassElement(): ClassSetContents;
    // private parseQuantifier(c: string): Token;
    parseUnicodeCharacterProperty(invert: boolean): ClassSetContents;
    prevChar(): string;
    // private registerCaptureGroup(): void;
    registerNamedCaptureGroup(name: string): void;
    retreat(): void;
    // private setSourceSection(t: Token, startIndex: number, endIndex: number): void;
    // private skipComment(terminator: string): boolean;
    // private skipWhitespace(): void;
    syntaxError(msg: string, errorCode: RegexSyntaxException$ErrorCode): RegexSyntaxException;
    // private toCodePoint(c: string): number;
    totalNumberOfCaptureGroups(): number;
    validatePOSIXCollationElement(sequence: string): void;
    validatePOSIXEquivalenceClass(sequence: string): void;
}