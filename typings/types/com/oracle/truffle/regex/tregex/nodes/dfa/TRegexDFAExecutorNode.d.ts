import type { VirtualFrame } from '../../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { TruffleString } from '../../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$ByteIndexOfCodePointSetNode } from '../../../../../../../com/oracle/truffle/api/strings/TruffleString$ByteIndexOfCodePointSetNode.d.ts'
import type { TruffleString$ByteIndexOfStringNode } from '../../../../../../../com/oracle/truffle/api/strings/TruffleString$ByteIndexOfStringNode.d.ts'
import type { TruffleString$CodePointSet } from '../../../../../../../com/oracle/truffle/api/strings/TruffleString$CodePointSet.d.ts'
import type { TruffleString$CodeRange } from '../../../../../../../com/oracle/truffle/api/strings/TruffleString$CodeRange.d.ts'
import type { RegexSource } from '../../../../../../../com/oracle/truffle/regex/RegexSource.d.ts'
import type { TRegexExecutorBaseNode } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/TRegexExecutorBaseNode.d.ts'
import type { TRegexExecutorLocals } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/TRegexExecutorLocals.d.ts'
import type { TRegexExecutorNode } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/TRegexExecutorNode.d.ts'
import type { CounterTracker } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/CounterTracker.d.ts'
import type { CounterTrackerData$Builder } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/CounterTrackerData$Builder.d.ts'
import type { DFAAbstractNode } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/DFAAbstractNode.d.ts'
import type { DFAAbstractStateNode } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/DFAAbstractStateNode.d.ts'
import type { DFACaptureGroupTrackingData } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/DFACaptureGroupTrackingData.d.ts'
import type { DFAInitialStateNode } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/DFAInitialStateNode.d.ts'
import type { TRegexDFAExecutorDebugRecorder } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/TRegexDFAExecutorDebugRecorder.d.ts'
import type { TRegexDFAExecutorLocals } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/TRegexDFAExecutorLocals.d.ts'
import type { TRegexDFAExecutorProperties } from '../../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/TRegexDFAExecutorProperties.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class TRegexDFAExecutorNode extends TRegexExecutorNode {
    static ASTRAL_PROBABILITY: number;
    static BMP_PROBABILITY: number;
    static CONTINUE_PROBABILITY: number;
    static EXIT_PROBABILITY: number;
    static LATIN1_PROBABILITY: number;
    static NO_MATCH: number;
    static inputIncRaw(paramindex: number, paramoffset: number, paramforward: boolean): number;
    constructor(source: RegexSource, props: TRegexDFAExecutorProperties, numberOfCaptureGroups: number, maxNumberOfNFAStates: number, indexOfParameters: TruffleString$CodePointSet[], states: DFAAbstractNode[], encodedMatchers: number[], debugRecorder: TRegexDFAExecutorDebugRecorder, innerLiteralPrefixMatcher: TRegexDFAExecutorNode, counterDataBuilder: CounterTrackerData$Builder, counterTrackers: CounterTracker[])
    // private cgResultOrder: number[];
    // private counterFixedDataSize: number;
    // private counterIntArrayCount: number;
    readonly counterTrackers: CounterTracker[];
    readonly debugRecorder: TRegexDFAExecutorDebugRecorder;
    // private encodedMatchers: number[];
    // private flags: number;
    // private indexOfNodes: TruffleString$ByteIndexOfCodePointSetNode[];
    // private indexOfParameters: TruffleString$CodePointSet[];
    // private indexOfStringNode: TruffleString$ByteIndexOfStringNode;
    // private innerLiteralPrefixMatcher: TRegexExecutorBaseNode;
    readonly maxNumberOfNFAStates: number;
    // private minResultLength: number;
    // private states: DFAAbstractNode[];
    canFindStart(): boolean;
    // private createCGData(): DFACaptureGroupTrackingData;
    createLocals(input: TruffleString, fromIndex: number, maxIndex: number, regionFrom: number, regionTo: number, index: number): TRegexExecutorLocals;
    execute(frame: VirtualFrame, abstractLocals: TRegexExecutorLocals, codeRange: TruffleString$CodeRange): Object;
    getCGTrackingCost(): number;
    getCounterTrackers(): CounterTracker[];
    getDebugRecorder(): TRegexDFAExecutorDebugRecorder;
    getIndexOfNode(index: number): TruffleString$ByteIndexOfCodePointSetNode;
    getIndexOfStringNode(): TruffleString$ByteIndexOfStringNode;
    // private getInitialState(): DFAInitialStateNode;
    getMaxNumberOfNFAStates(): number;
    getMinIndex(locals: TRegexExecutorLocals): number;
    getName(): string;
    getNodes(): DFAAbstractNode[];
    getNumberOfStates(): number;
    getPrefixLength(): number;
    // private initNextIndex(locals: TRegexDFAExecutorLocals): void;
    // private initialStateSuccessor(locals: TRegexDFAExecutorLocals, curState: DFAAbstractStateNode, successors: number[], i: number): number;
    isAnchored(): boolean;
    isBackward(): boolean;
    isForward(): boolean;
    isGenericCG(): boolean;
    isSearching(): boolean;
    isSimpleCG(): boolean;
    isSimpleCGMustCopy(): boolean;
    isTrivial(): boolean;
    recordExecution(): boolean;
    // private resultLength(): number;
    setSimpleCGMustCopy(simpleCGMustCopy: boolean): void;
    shallowCopy(): TRegexDFAExecutorNode;
    tracksLastGroup(): boolean;
    writesCaptureGroups(): boolean;
}