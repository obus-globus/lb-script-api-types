import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { AbstractRegexObject } from '../../../../../../com/oracle/truffle/regex/AbstractRegexObject.d.ts'
import type { RegexLanguage } from '../../../../../../com/oracle/truffle/regex/RegexLanguage.d.ts'
import type { RegexSource } from '../../../../../../com/oracle/truffle/regex/RegexSource.d.ts'
import type { RegexSyntaxException } from '../../../../../../com/oracle/truffle/regex/RegexSyntaxException.d.ts'
import type { RegexSyntaxException$ErrorCode } from '../../../../../../com/oracle/truffle/regex/RegexSyntaxException$ErrorCode.d.ts'
import type { Range } from '../../../../../../com/oracle/truffle/regex/charset/Range.d.ts'
import type { RubyFlags } from '../../../../../../com/oracle/truffle/regex/flavor/ruby/RubyFlags.d.ts'
import type { RubyRegexParser$Group } from '../../../../../../com/oracle/truffle/regex/flavor/ruby/RubyRegexParser$Group.d.ts'
import type { RubyRegexParser$PosixClassParseResult } from '../../../../../../com/oracle/truffle/regex/flavor/ruby/RubyRegexParser$PosixClassParseResult.d.ts'
import type { RubyRegexParser$Quantifier } from '../../../../../../com/oracle/truffle/regex/flavor/ruby/RubyRegexParser$Quantifier.d.ts'
import type { CompilationBuffer } from '../../../../../../com/oracle/truffle/regex/tregex/buffer/CompilationBuffer.d.ts'
import type { RegexASTBuilder } from '../../../../../../com/oracle/truffle/regex/tregex/parser/RegexASTBuilder.d.ts'
import type { RegexParser } from '../../../../../../com/oracle/truffle/regex/tregex/parser/RegexParser.d.ts'
import type { RegexValidator } from '../../../../../../com/oracle/truffle/regex/tregex/parser/RegexValidator.d.ts'
import type { Token$Quantifier } from '../../../../../../com/oracle/truffle/regex/tregex/parser/Token$Quantifier.d.ts'
import type { RegexAST } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexAST.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { IntPredicate } from '../../../../../../java/util/function/IntPredicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class RubyRegexParser extends Object implements RegexParser, RegexValidator {
    static createParser(paramlanguage: RegexLanguage, paramsource: RegexSource, paramcompilationBuffer: CompilationBuffer): RegexParser;
    static createValidator(paramsource: RegexSource): RegexValidator;
    private constructor(source: RegexSource, astBuilder: RegexASTBuilder)
    // private astBuilder: RegexASTBuilder;
    // private canHaveQuantifier: boolean;
    // private charClassPool: Range[][];
    // private charClassTmp: Range[];
    // private codepointsBuffer: number[];
    // private curCharClass: Range[];
    // private flagsStack: RubyFlags[];
    // private fullyFoldableCharacters: Range[];
    // private globalFlags: RubyFlags;
    // private groupIndex: number;
    // private groupStack: RubyRegexParser$Group[];
    // private hasSubexpressionCalls: boolean;
    // private inFlags: string;
    // private inPattern: string;
    // private inSource: RegexSource;
    // private lookbehindDepth: number;
    readonly namedCaptureGroups: JavaMap<string, number[]>;
    // private numberOfCaptureGroups: number;
    // private position: number;
    // private silent: boolean;
    // private startsWithBeginningAnchor: boolean;
    // private absentExpression(): void;
    // private acceptableCaseFold(from: number, to: number): boolean;
    // private acquireCodePointSetAccumulator(): Range[];
    // private addBackReference(groupNumber: number, namedReference: boolean): void;
    // private addCaret(): void;
    // private addChar(codepoint: number): void;
    // private addCharClass(charSet: (Object | null)[]): void;
    // private addDeadNode(): void;
    // private addDollar(): void;
    // private addQuantifier(quantifier: Token$Quantifier): void;
    // private addSubexpressionCall(groupNumber: number): void;
    // private advance(): void;
    // private advance(len: number): void;
    // private alternative(): void;
    // private assertionEscape(): boolean;
    // private atEnd(): boolean;
    // private atomicGroup(): void;
    // private backreference(): boolean;
    // private bailOut(reason: string): void;
    // private beginningAnchor(): boolean;
    // private buildBackreference(groupNumber: number, namedReference: boolean): void;
    // private buildChar(codepoint: number): void;
    // private buildCharClass(): void;
    // private buildNamedBackreference(groupNumbers: number[], name: string): void;
    // private buildWordBoundaryAssertion(wordChars: (Object | null)[], nonWordChars: (Object | null)[]): void;
    // private buildWordNonBoundaryAssertion(wordChars: (Object | null)[], nonWordChars: (Object | null)[]): void;
    // private caret(): void;
    // private caseClosure(): void;
    // private categoryEscape(inCharClass: boolean): boolean;
    // private charClassIntersection(): void;
    // private characterClass(): void;
    // private characterEscape(): Optional<number>;
    // private classEscape(): Optional<number>;
    // private collectCharClass(): void;
    // private collectPosixCharClass(): RubyRegexParser$PosixClassParseResult;
    // private comment(): void;
    // private conditionalBackReference(): void;
    // private consumeChar(): number;
    // private containsNamedCaptureGroups(): boolean;
    // private curChar(): number;
    // private curCharClassAddCodePoint(codepoint: number): void;
    // private curCharClassAddRange(lower: number, upper: number): void;
    // private curCharClassClear(): void;
    // private disjunction(): void;
    // private disjunction(toplevel: boolean): void;
    // private dollar(): void;
    // private dot(): void;
    // private escape(): void;
    // private extendedGraphemeCluster(): boolean;
    // private fetchEscapedChar(): number;
    // private flags(ch0: number): void;
    getFlags(): AbstractRegexObject;
    // private getLocalFlags(): RubyFlags;
    // private getMany(pred: (param0: number) => boolean): string;
    getNamedCaptureGroups(): AbstractRegexObject;
    // private getUnicodeCharClass(className: string): (Object | null)[];
    // private getUnicodePosixCharClass(className: string): (Object | null)[];
    // private getUpTo(count: number, pred: (param0: number) => boolean): string;
    // private group(capturing: boolean): void;
    // private isCaptureGroupOpen(groupNumber: number): boolean;
    isProperEscapeNext(): boolean;
    isQuantifierNext(): boolean;
    // private keepCommand(): boolean;
    // private lineBreak(): boolean;
    // private localFlags(newFlags: RubyFlags): void;
    // private lookahead(negate: boolean): void;
    // private lookbehind(negate: boolean): void;
    // private match(next: string): boolean;
    // private mustMatch(next: string, errorMsg: string, errorCode: RegexSyntaxException$ErrorCode): void;
    // private namedBackreference(): boolean;
    // private nestedCharClass(): boolean;
    // private nextSequence(): void;
    // private notAllowedInLookbehind(errorPosition: number): void;
    // private numberOfCaptureGroups(): number;
    // private openEndedLocalFlags(newFlags: RubyFlags): void;
    // private parenComment(): void;
    // private parens(): void;
    parse(): RegexAST;
    // private parseGroupName(terminator: string): string;
    // private parseGroupReference(terminator: string, allowNumeric: boolean, allowNamed: boolean, allowLevels: boolean, resolveReference: boolean): number[];
    // private parseQuantifier(ch: number): RubyRegexParser$Quantifier;
    // private popGroup(): void;
    // private pushAtomicGroup(): void;
    // private pushCaptureGroup(): void;
    // private pushConditionalBackReferenceGroup(referencedGroupNumber: number, namedReference: boolean): void;
    // private pushGroup(): void;
    // private pushLookAheadAssertion(negate: boolean): void;
    // private pushLookBehindAssertion(negate: boolean): void;
    // private quantifier(ch: number): void;
    // private releaseCodePointSetAccumulator(accumulator: Range[]): void;
    // private retreat(): void;
    // private run(): void;
    // private scanForCaptureGroups(): void;
    // private setLocalFlags(newLocalFlags: RubyFlags): void;
    // private string(firstCodepoint: number): void;
    // private stringEscape(): boolean;
    // private subexpressionCall(): boolean;
    // private syntaxErrorAt(message: string, pos: number, errorCode: RegexSyntaxException$ErrorCode): RegexSyntaxException;
    // private syntaxErrorAtEnd(message: string, errorCode: RegexSyntaxException$ErrorCode): RegexSyntaxException;
    // private syntaxErrorHere(message: string, errorCode: RegexSyntaxException$ErrorCode): RegexSyntaxException;
    // private term(): void;
    // private trimToEncoding(codePointSet: (Object | null)[]): (Object | null)[];
    validate(): void;
}