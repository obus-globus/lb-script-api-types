import type { VirtualFrame } from '../../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { TruffleString } from '../../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$CodeRange } from '../../../../../../../com/oracle/truffle/api/strings/TruffleString$CodeRange.d.ts'
import type { CompilationBuffer } from '../../../../../../../com/oracle/truffle/regex/tregex/buffer/CompilationBuffer.d.ts'
import type { CharMatcher } from '../../../../../../../com/oracle/truffle/regex/tregex/matchers/CharMatcher.d.ts'
import type { TRegexExecutorBaseNode } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/TRegexExecutorBaseNode.d.ts'
import type { TRegexExecutorLocals } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/TRegexExecutorLocals.d.ts'
import type { TRegexBacktrackerSubExecutorNode } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/nfa/TRegexBacktrackerSubExecutorNode.d.ts'
import type { LookAroundAssertion } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/LookAroundAssertion.d.ts'
import type { RegexAST } from '../../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexAST.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class TRegexLiteralLookAroundExecutorNode extends TRegexBacktrackerSubExecutorNode {
    static ASTRAL_PROBABILITY: number;
    static BMP_PROBABILITY: number;
    static CONTINUE_PROBABILITY: number;
    static EXIT_PROBABILITY: number;
    static LATIN1_PROBABILITY: number;
    static NO_SUB_EXECUTORS: TRegexExecutorBaseNode[];
    static create(paramast: RegexAST, paramlookAround: LookAroundAssertion, paramcompilationBuffer: CompilationBuffer): TRegexLiteralLookAroundExecutorNode;
    static inputIncRaw(paramindex: number, paramoffset: number, paramforward: boolean): number;
    private constructor(copy: TRegexLiteralLookAroundExecutorNode)
    private constructor(ast: RegexAST, numberOfTransitions: number, forward: boolean, negated: boolean, matchers: CharMatcher[])
    readonly forward: boolean;
    // private matchers: CharMatcher[];
    // private negated: boolean;
    createLocals(input: TruffleString, fromIndex: number, maxIndex: number, regionFrom: number, regionTo: number, index: number): TRegexExecutorLocals;
    execute(frame: VirtualFrame, abstractLocals: TRegexExecutorLocals, codeRange: TruffleString$CodeRange): Object;
    getName(): string;
    getNumberOfStates(): number;
    isForward(): boolean;
    shallowCopy(): TRegexLiteralLookAroundExecutorNode;
    writesCaptureGroups(): boolean;
}