import type { MaterializedFrame } from '../../../../../../com/oracle/truffle/api/frame/MaterializedFrame.d.ts'
import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { RegexSource } from '../../../../../../com/oracle/truffle/regex/RegexSource.d.ts'
import type { RegexResult } from '../../../../../../com/oracle/truffle/regex/result/RegexResult.d.ts'
import type { TRegexExecNode$EagerCaptureGroupRegexSearchNode } from '../../../../../../com/oracle/truffle/regex/tregex/nodes/TRegexExecNode$EagerCaptureGroupRegexSearchNode.d.ts'
import type { TRegexExecNode$LazyCaptureGroupRegexSearchNode } from '../../../../../../com/oracle/truffle/regex/tregex/nodes/TRegexExecNode$LazyCaptureGroupRegexSearchNode.d.ts'
import type { TRegexExecNode$NFARegexSearchNode } from '../../../../../../com/oracle/truffle/regex/tregex/nodes/TRegexExecNode$NFARegexSearchNode.d.ts'
import type { TRegexExecNode$RunRegexSearchNode } from '../../../../../../com/oracle/truffle/regex/tregex/nodes/TRegexExecNode$RunRegexSearchNode.d.ts'
export class TRegexExecNode$RegressionTestModeSearchNode extends TRegexExecNode$RunRegexSearchNode {
    private constructor(source: RegexSource, numberOfCaptureGroups: number, runner: TRegexExecNode$RunRegexSearchNode, nfaNode: TRegexExecNode$NFARegexSearchNode, backtrackingNode: TRegexExecNode$NFARegexSearchNode, lazyDFANode: TRegexExecNode$LazyCaptureGroupRegexSearchNode, noSimpleCGLazyDFANode: TRegexExecNode$LazyCaptureGroupRegexSearchNode, eagerDFANode: TRegexExecNode$EagerCaptureGroupRegexSearchNode)
    // private backtrackingNode: TRegexExecNode$NFARegexSearchNode;
    // private eagerDFANode: TRegexExecNode$EagerCaptureGroupRegexSearchNode;
    // private lazyDFANode: TRegexExecNode$LazyCaptureGroupRegexSearchNode;
    // private nfaNode: TRegexExecNode$NFARegexSearchNode;
    // private noSimpleCGLazyDFANode: TRegexExecNode$LazyCaptureGroupRegexSearchNode;
    // private numberOfCaptureGroups: number;
    // private runner: TRegexExecNode$RunRegexSearchNode;
    // private source: RegexSource;
    // private backtrackerProducesSameResult(frame: MaterializedFrame, input: TruffleString, fromIndex: number, maxIndex: number, regionFrom: number, regionTo: number, result: RegexResult): boolean;
    // private eagerDFAProducesSameResult(frame: MaterializedFrame, input: TruffleString, fromIndex: number, maxIndex: number, regionFrom: number, regionTo: number, result: RegexResult): boolean;
    // private nfaProducesSameResult(frame: MaterializedFrame, input: TruffleString, fromIndex: number, maxIndex: number, regionFrom: number, regionTo: number, result: RegexResult): boolean;
    // private noSimpleCGLazyDFAProducesSameResult(frame: MaterializedFrame, input: TruffleString, fromIndex: number, maxIndex: number, regionFrom: number, regionTo: number, result: RegexResult): boolean;
    // private regressionTestErrorMsg(input: TruffleString, fromIndex: number, maxIndex: number, regionFrom: number, regionTo: number, nameA: string, a: RegexResult, nameB: string, b: RegexResult): string;
    // private resultsEqual(a: RegexResult, b: RegexResult): boolean;
    run(frame: VirtualFrame, input: TruffleString, fromIndex: number, maxIndex: number, regionFrom: number, regionTo: number): RegexResult;
    // private runInternalRegressionTests(frame: MaterializedFrame, input: TruffleString, fromIndex: number, maxIndex: number, regionFrom: number, regionTo: number, result: RegexResult): void;
}