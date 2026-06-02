import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { NodeInterface } from '../../../../../../com/oracle/truffle/api/nodes/NodeInterface.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface WriteNode extends NodeInterface, Object{
    executeWrite(frame: VirtualFrame, value: Object): void;
    getRhs(): JavaScriptNode;
}