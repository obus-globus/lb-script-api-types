import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObject$ContainsKeyNode } from '../../../../../../com/oracle/truffle/api/object/DynamicObject$ContainsKeyNode.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { PrivateBrandCheckNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PrivateBrandCheckNode.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PrivateBrandCheckNodeGen extends PrivateBrandCheckNode {
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static create(paramtargetNode: JavaScriptNode, parambrandNode: JavaScriptNode): PrivateBrandCheckNode;
    static evaluateReceiver(paramtargetNode: JavaScriptNode, paramframe: VirtualFrame, paramtargetValue: Object): Object;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(targetNode: JavaScriptNode, brandNode: JavaScriptNode)
    // private instance_containsKey_: DynamicObject$ContainsKeyNode;
    // private state_0_: number;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(targetNodeValue: Object, brandNodeValue: Object): Object;
    executeVoid(frameValue: VirtualFrame): void;
    executeWithTarget(frameValue: VirtualFrame, targetNodeValue: Object): Object;
    // private fallbackGuard_(state_0: number, targetNodeValue: Object, brandNodeValue: Object): boolean;
}