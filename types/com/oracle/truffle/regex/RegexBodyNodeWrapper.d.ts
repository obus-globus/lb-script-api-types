import type { VirtualFrame } from '../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { InstrumentableNode$WrapperNode } from '../../../../com/oracle/truffle/api/instrumentation/InstrumentableNode$WrapperNode.d.ts'
import type { ProbeNode } from '../../../../com/oracle/truffle/api/instrumentation/ProbeNode.d.ts'
import type { RegexBodyNode } from '../../../../com/oracle/truffle/regex/RegexBodyNode.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RegexBodyNodeWrapper extends RegexBodyNode implements InstrumentableNode$WrapperNode {
    constructor(copy: RegexBodyNode, delegateNode: RegexBodyNode, probeNode: ProbeNode)
    readonly delegateNode: RegexBodyNode;
    readonly probeNode: ProbeNode;
    execute(frame: VirtualFrame): Object;
    getDelegateNode(): RegexBodyNode;
    getProbeNode(): ProbeNode;
}