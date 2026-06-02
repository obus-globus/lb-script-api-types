import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { InstrumentableNode$WrapperNode } from '../../../../../../com/oracle/truffle/api/instrumentation/InstrumentableNode$WrapperNode.d.ts'
import type { ProbeNode } from '../../../../../../com/oracle/truffle/api/instrumentation/ProbeNode.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$CodeRange } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$CodeRange.d.ts'
import type { RegexSource } from '../../../../../../com/oracle/truffle/regex/RegexSource.d.ts'
import type { TRegexExecutorBaseNode } from '../../../../../../com/oracle/truffle/regex/tregex/nodes/TRegexExecutorBaseNode.d.ts'
import type { TRegexExecutorLocals } from '../../../../../../com/oracle/truffle/regex/tregex/nodes/TRegexExecutorLocals.d.ts'
import type { TRegexExecutorNode } from '../../../../../../com/oracle/truffle/regex/tregex/nodes/TRegexExecutorNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TRegexExecutorBaseNodeWrapper extends TRegexExecutorBaseNode implements InstrumentableNode$WrapperNode {
    constructor(delegateNode: TRegexExecutorBaseNode, probeNode: ProbeNode)
    readonly delegateNode: TRegexExecutorBaseNode;
    readonly probeNode: ProbeNode;
    createLocals(input: TruffleString, fromIndex: number, maxIndex: number, regionFrom: number, regionTo: number, index: number): TRegexExecutorLocals;
    execute(frame: VirtualFrame, locals: TRegexExecutorLocals, codeRange: TruffleString$CodeRange): Object;
    getDelegateNode(): TRegexExecutorBaseNode;
    getName(): string;
    getNumberOfStates(): number;
    getNumberOfTransitions(): number;
    getProbeNode(): ProbeNode;
    getSource(): RegexSource;
    isForward(): boolean;
    isSimpleCG(): boolean;
    shallowCopy(): TRegexExecutorNode;
    writesCaptureGroups(): boolean;
}