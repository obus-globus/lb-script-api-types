import type { RegexSource } from '../../../../../../com/oracle/truffle/regex/RegexSource.d.ts'
import type { RegexSyntaxException } from '../../../../../../com/oracle/truffle/regex/RegexSyntaxException.d.ts'
import type { RegexSyntaxException$ErrorCode } from '../../../../../../com/oracle/truffle/regex/RegexSyntaxException$ErrorCode.d.ts'
import type { ClassSetContents } from '../../../../../../com/oracle/truffle/regex/charset/ClassSetContents.d.ts'
import type { Range } from '../../../../../../com/oracle/truffle/regex/charset/Range.d.ts'
import type { UnicodeProperties } from '../../../../../../com/oracle/truffle/regex/charset/UnicodeProperties.d.ts'
import type { PythonFlags } from '../../../../../../com/oracle/truffle/regex/flavor/python/PythonFlags.d.ts'
import type { PythonLocaleData } from '../../../../../../com/oracle/truffle/regex/flavor/python/PythonLocaleData.d.ts'
import type { PythonREMode } from '../../../../../../com/oracle/truffle/regex/flavor/python/PythonREMode.d.ts'
import type { CompilationBuffer } from '../../../../../../com/oracle/truffle/regex/tregex/buffer/CompilationBuffer.d.ts'
import type { RegexLexer } from '../../../../../../com/oracle/truffle/regex/tregex/parser/RegexLexer.d.ts'
import type { RegexLexer$ClassSetOperator } from '../../../../../../com/oracle/truffle/regex/tregex/parser/RegexLexer$ClassSetOperator.d.ts'
import type { RegexLexer$ParseGroupNameResult } from '../../../../../../com/oracle/truffle/regex/tregex/parser/RegexLexer$ParseGroupNameResult.d.ts'
import type { Token } from '../../../../../../com/oracle/truffle/regex/tregex/parser/Token.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PythonRegexLexer extends RegexLexer {
    static isAscii(paramc: number): boolean;
    static isDecimalDigit(paramc: number): boolean;
    static isHexDigit(paramc: number): boolean;
    static isOctalDigit(paramc: number): boolean;
    constructor(source: RegexSource, mode: PythonREMode, compilationBuffer: CompilationBuffer)
    // private caseFoldTmp: Range[];
    // private flagsStack: PythonFlags[];
    readonly globalFlags: PythonFlags;
    readonly localeData: PythonLocaleData;
    // private mode: PythonREMode;
    // private addFlag(flagsArg: PythonFlags, ch: number): PythonFlags;
    addGlobalFlags(newGlobalFlags: PythonFlags): void;
    boundedQuantifierMaxValue(): number;
    caseFoldClassSetAtom(classSetContents: ClassSetContents): ClassSetContents;
    caseFoldUnfold(codePointSet: (Object | null)[]): (Object | null)[];
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
    fixFlags(): void;
    getDotCodePointSet(): (Object | null)[];
    getGlobalFlags(): PythonFlags;
    getIdContinue(): (Object | null)[];
    getIdStart(): (Object | null)[];
    getLocalFlags(): PythonFlags;
    getLocaleData(): PythonLocaleData;
    getMaxBackReferenceDigits(): number;
    getPOSIXCharClass(name: string): (Object | null)[];
    getPredefinedCharClass(c: string): (Object | null)[];
    getUnicodeProperties(): UnicodeProperties;
    getWhitespace(): number[];
    // private handleBadCharacterInGroupName(result: RegexLexer$ParseGroupNameResult): RegexSyntaxException;
    handleBoundedQuantifierEmptyOrMissingMin(): Token;
    handleBoundedQuantifierInvalidCharacter(): Token;
    handleBoundedQuantifierOutOfOrder(): RegexSyntaxException;
    handleBoundedQuantifierOverflow(min: number, max: number): Token;
    handleBoundedQuantifierOverflowMin(min: number, max: number): Token;
    handleCCRangeOutOfOrder(rangeStart: number, lo: number, hi: number): ClassSetContents;
    handleCCRangeWithPredefCharClass(rangeStart: number, firstAtom: ClassSetContents, secondAtom: ClassSetContents): void;
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
    // private mustHaveMore(): void;
    parseCodePointInGroupName(): number;
    // private parseConditionalBackReference(): Token;
    parseCustomEscape(c: string): Token;
    parseCustomEscapeChar(c: string, inCharClass: boolean): number;
    parseCustomEscapeCharFallback(c: number, inCharClass: boolean): number;
    parseCustomGroupBeginQ(charAfterQuestionMark: string): Token;
    parseGroupLt(): Token;
    // private parseInlineFlags(ch0: number): Token;
    // private parseLocalFlags(positiveFlags: PythonFlags, negativeFlags: PythonFlags): Token;
    // private parseNamedBackReference(): Token;
    popLocalFlags(): void;
    pushLocalFlags(localFlags: PythonFlags): void;
    // private substring(length: number): string;
    syntaxErrorAtAbs(msg: string, i: number, errorCode: RegexSyntaxException$ErrorCode): RegexSyntaxException;
    // private syntaxErrorAtRel(msg: string, i: number, errorCode: RegexSyntaxException$ErrorCode): RegexSyntaxException;
    syntaxErrorHere(msg: string, errorCode: RegexSyntaxException$ErrorCode): RegexSyntaxException;
    validatePOSIXCollationElement(sequence: string): void;
    validatePOSIXEquivalenceClass(sequence: string): void;
}