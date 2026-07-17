import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObject$PutNode } from '../../../../../../com/oracle/truffle/api/object/DynamicObject$PutNode.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { PrivateFieldSetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PrivateFieldSetNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PrivateFieldSetNodeGen extends PrivateFieldSetNode {
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static create(paramtargetNode: JavaScriptNode, paramkeyNode: JavaScriptNode, paramvalueNode: JavaScriptNode, paramcontext: JSContext): PrivateFieldSetNode;
    static evaluateReceiver(paramtargetNode: JavaScriptNode, paramframe: VirtualFrame, paramtargetValue: Object): Object;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(targetNode: JavaScriptNode, keyNode: JavaScriptNode, valueNode: JavaScriptNode, context: JSContext)
    // private accessor_callNode_: JSFunctionCallNode;
    // private field_putField_: DynamicObject$PutNode;
    // private state_0_: number;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(targetNodeValue: Object, keyNodeValue: Object, valueNodeValue: Object): Object;
    executeVoid(frameValue: VirtualFrame): void;
    executeWithTarget(frameValue: VirtualFrame, targetNodeValue: Object): Object;
    // private fallbackGuard_(state_0: number, targetNodeValue: Object, keyNodeValue: Object, valueNodeValue: Object): boolean;
}