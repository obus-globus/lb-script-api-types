import type { CallTarget } from '../../../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { RegexFlags } from '../../../../../../com/oracle/truffle/regex/RegexFlags.d.ts'
import type { RegexLanguage } from '../../../../../../com/oracle/truffle/regex/RegexLanguage.d.ts'
import type { RegexProfile } from '../../../../../../com/oracle/truffle/regex/RegexProfile.d.ts'
import type { RegexSource } from '../../../../../../com/oracle/truffle/regex/RegexSource.d.ts'
import type { PreCalculatedResultFactory } from '../../../../../../com/oracle/truffle/regex/result/PreCalculatedResultFactory.d.ts'
import type { RegexResult } from '../../../../../../com/oracle/truffle/regex/result/RegexResult.d.ts'
import type { TRegexExecNode$RunRegexSearchNode } from '../../../../../../com/oracle/truffle/regex/tregex/nodes/TRegexExecNode$RunRegexSearchNode.d.ts'
import type { TRegexExecutorEntryNode } from '../../../../../../com/oracle/truffle/regex/tregex/nodes/TRegexExecutorEntryNode.d.ts'
import type { TRegexDFAExecutorNode } from '../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/TRegexDFAExecutorNode.d.ts'
export class TRegexExecNode$LazyCaptureGroupRegexSearchNode extends TRegexExecNode$RunRegexSearchNode {
    constructor(language: RegexLanguage, source: RegexSource, flags: RegexFlags, preCalculatedResults: PreCalculatedResultFactory[], forwardNode: TRegexExecutorEntryNode, backwardNode: TRegexExecutorEntryNode, captureGroupNode: TRegexExecutorEntryNode, profile: RegexProfile)
    // private backwardCallTarget: CallTarget;
    // private backwardEntryNode: TRegexExecutorEntryNode;
    // private booleanMatch: boolean;
    // private captureGroupCallTarget: CallTarget;
    // private captureGroupEntryNode: TRegexExecutorEntryNode;
    // private flags: RegexFlags;
    // private forwardEntryNode: TRegexExecutorEntryNode;
    // private preCalculatedResults: PreCalculatedResultFactory[];
    // private executeBackwardAnchored(frame: VirtualFrame, input: TruffleString, fromIndex: number, maxIndex: number, regionFrom: number, regionTo: number): RegexResult;
    // private executeForward(frame: VirtualFrame, input: TruffleString, fromIndex: number, maxIndex: number, regionFrom: number, regionTo: number): RegexResult;
    getBackwardExecutor(): TRegexDFAExecutorNode;
    getForwardExecutor(): TRegexDFAExecutorNode;
    isSimpleCG(): boolean;
    // private multiplePreCalcResults(): boolean;
    run(frame: VirtualFrame, input: TruffleString, fromIndex: number, maxIndex: number, regionFrom: number, regionTo: number): RegexResult;
    // private singlePreCalcResult(): boolean;
}