import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { InstrumentableNode$WrapperNode } from '../../../../../../com/oracle/truffle/api/instrumentation/InstrumentableNode$WrapperNode.d.ts'
import type { ProbeNode } from '../../../../../../com/oracle/truffle/api/instrumentation/ProbeNode.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { RepeatableNode } from '../../../../../../com/oracle/truffle/js/nodes/RepeatableNode.d.ts'
import type { JSTargetableNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSTargetableNode.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class SuperPropertyReferenceNode extends JSTargetableNode implements RepeatableNode {
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
    private constructor(baseNode: JavaScriptNode, thisValueNode: JavaScriptNode)
    constructor(copy: SuperPropertyReferenceNode)
    // private baseValueNode: JavaScriptNode;
    // private thisValueNode: JavaScriptNode;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    createWrapper(probe: ProbeNode): InstrumentableNode$WrapperNode;
    evaluateTarget(frame: VirtualFrame): Object;
    execute(frame: VirtualFrame): Object;
    executeWithTarget(frame: VirtualFrame, target: Object): Object;
    getBaseValue(): JavaScriptNode;
    getTarget(): JavaScriptNode;
    getThisValue(): JavaScriptNode;
}