import type { BranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/BranchProfile.d.ts'
import type { TruffleString$CodeRange } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$CodeRange.d.ts'
import type { RegexSource } from '../../../../../../com/oracle/truffle/regex/RegexSource.d.ts'
import type { TRegexExecutorBaseNode } from '../../../../../../com/oracle/truffle/regex/tregex/nodes/TRegexExecutorBaseNode.d.ts'
import type { TRegexExecutorLocals } from '../../../../../../com/oracle/truffle/regex/tregex/nodes/TRegexExecutorLocals.d.ts'
import type { InputReadNode } from '../../../../../../com/oracle/truffle/regex/tregex/nodes/input/InputReadNode.d.ts'
import type { RegexAST } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexAST.d.ts'
export abstract class TRegexExecutorNode extends TRegexExecutorBaseNode {
    static ASTRAL_PROBABILITY: number;
    static BMP_PROBABILITY: number;
    static CONTINUE_PROBABILITY: number;
    static EXIT_PROBABILITY: number;
    static LATIN1_PROBABILITY: number;
    static inputIncRaw(paramindex: number, paramoffset: number, paramforward: boolean): number;
    constructor(source: RegexSource, numberOfCaptureGroups: number, numberOfTransitions: number)
    constructor(copy: TRegexExecutorNode)
    constructor(ast: RegexAST, numberOfTransitions: number)
    readonly astralProfile: BranchProfile;
    // private bmpProfile: BranchProfile;
    // private charAtNode: InputReadNode;
    readonly numberOfCaptureGroups: number;
    readonly numberOfTransitions: number;
    readonly source: RegexSource;
    countUpTo(locals: TRegexExecutorLocals, max: number, nCodePoints: number, codeRange: TruffleString$CodeRange): number;
    getAstralProfile(): BranchProfile;
    getBMPProfile(): BranchProfile;
    getMaxIndex(locals: TRegexExecutorLocals): number;
    getMinIndex(locals: TRegexExecutorLocals): number;
    getNumberOfCaptureGroups(): number;
    getNumberOfTransitions(): number;
    getSource(): RegexSource;
    inputAdvance(locals: TRegexExecutorLocals): void;
    inputAtBegin(locals: TRegexExecutorLocals): boolean;
    inputAtEnd(locals: TRegexExecutorLocals): boolean;
    inputGetCodePointSize(locals: TRegexExecutorLocals, codeRange: TruffleString$CodeRange): number;
    inputGetCodePointSize(locals: TRegexExecutorLocals, forward: boolean, codeRange: TruffleString$CodeRange): number;
    inputHasNext(locals: TRegexExecutorLocals): boolean;
    inputHasNext(locals: TRegexExecutorLocals, index: number): boolean;
    inputHasNext(locals: TRegexExecutorLocals, index: number, forward: boolean): boolean;
    inputIncNextIndexRaw(locals: TRegexExecutorLocals): void;
    inputIncNextIndexRaw(locals: TRegexExecutorLocals, offset: number): void;
    inputIncRaw(locals: TRegexExecutorLocals): void;
    inputIncRaw(locals: TRegexExecutorLocals, offset: number): void;
    inputIncRaw(locals: TRegexExecutorLocals, offset: number, forward: boolean): void;
    inputIncRaw(index: number): number;
    inputIncRaw(index: number, offset: number): number;
    inputReadAndDecode(locals: TRegexExecutorLocals, codeRange: TruffleString$CodeRange): number;
    inputReadAndDecode(locals: TRegexExecutorLocals, index: number, codeRange: TruffleString$CodeRange): number;
    inputReadRaw(locals: TRegexExecutorLocals): number;
    inputReadRaw(locals: TRegexExecutorLocals, forward: boolean): number;
    inputReadRaw(locals: TRegexExecutorLocals, index: number): number;
    inputReadRaw(locals: TRegexExecutorLocals, index: number, forward: boolean): number;
    inputSkip(locals: TRegexExecutorLocals, codeRange: TruffleString$CodeRange): void;
    inputSkipIntl(locals: TRegexExecutorLocals, forward: boolean, codeRange: TruffleString$CodeRange): void;
    inputSkipReverse(locals: TRegexExecutorLocals, codeRange: TruffleString$CodeRange): void;
    inputUTF16IsHighSurrogate(c: number): boolean;
    inputUTF16IsLowSurrogate(c: number): boolean;
    inputUTF16ToCodePoint(highSurrogate: number, lowSurrogate: number): number;
    isSimpleCG(): boolean;
    rewindUpTo(locals: TRegexExecutorLocals, min: number, nCodePoints: number, codeRange: TruffleString$CodeRange): number;
}