import type { ProbeNode } from '../../../../../com/oracle/truffle/api/instrumentation/ProbeNode.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { NodeInterface } from '../../../../../com/oracle/truffle/api/nodes/NodeInterface.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface InstrumentableNode$WrapperNode extends NodeInterface, Object{
    getDelegateNode(): Node;
    getProbeNode(): ProbeNode;
}