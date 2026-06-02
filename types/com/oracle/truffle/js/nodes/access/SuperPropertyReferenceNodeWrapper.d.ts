import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { InstrumentableNode$WrapperNode } from '../../../../../../com/oracle/truffle/api/instrumentation/InstrumentableNode$WrapperNode.d.ts'
import type { ProbeNode } from '../../../../../../com/oracle/truffle/api/instrumentation/ProbeNode.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSTargetableNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSTargetableNode.d.ts'
import type { SuperPropertyReferenceNode } from '../../../../../../com/oracle/truffle/js/nodes/access/SuperPropertyReferenceNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class SuperPropertyReferenceNodeWrapper extends SuperPropertyReferenceNode implements InstrumentableNode$WrapperNode {
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static create(parambaseNode: JavaScriptNode, paramthisValueNode: JavaScriptNode): JSTargetableNode;
    static evaluateReceiver(paramtargetNode: JavaScriptNode, paramframe: VirtualFrame, paramtargetValue: Object): Object;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(copy: SuperPropertyReferenceNode, delegateNode: SuperPropertyReferenceNode, probeNode: ProbeNode)
    readonly delegateNode: SuperPropertyReferenceNode;
    readonly probeNode: ProbeNode;
    execute(frame: VirtualFrame): Object;
    executeBoolean(frame: VirtualFrame): boolean;
    executeDouble(frame: VirtualFrame): number;
    executeDoubleWithTarget(frame: VirtualFrame, target: Object): number;
    executeInt(frame: VirtualFrame): number;
    executeIntWithTarget(frame: VirtualFrame, target: Object): number;
    executeVoid(frame: VirtualFrame): void;
    executeWithTarget(frame: VirtualFrame, target: Object): Object;
    getDelegateNode(): SuperPropertyReferenceNode;
    getProbeNode(): ProbeNode;
}