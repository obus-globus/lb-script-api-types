import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { InitializeInstanceElementsNode } from '../../../../../../com/oracle/truffle/js/nodes/access/InitializeInstanceElementsNode.d.ts'
import type { InitializeInstanceElementsNode$InitializeFieldOrAccessorNode } from '../../../../../../com/oracle/truffle/js/nodes/access/InitializeInstanceElementsNode$InitializeFieldOrAccessorNode.d.ts'
import type { InitializeInstanceElementsNodeGen$PrivateBrandAddNodeSharedWrapper } from '../../../../../../com/oracle/truffle/js/nodes/access/InitializeInstanceElementsNodeGen$PrivateBrandAddNodeSharedWrapper.d.ts'
import type { ClassElementDefinitionRecord } from '../../../../../../com/oracle/truffle/js/nodes/function/ClassElementDefinitionRecord.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class InitializeInstanceElementsNodeGen extends InitializeInstanceElementsNode {
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: (JavaScriptNode | null)[], parammaterializedTags: Class<Tag>[]): (JavaScriptNode | null)[];
    static create(paramcontext: JSContext, paramtargetNode: JavaScriptNode, paramconstructorNode: JavaScriptNode): JavaScriptNode;
    static create(paramcontext: JSContext): InitializeInstanceElementsNode;
    static create(paramcontext: JSContext, paramtargetNode: JavaScriptNode, paramconstructorNode: JavaScriptNode): InitializeInstanceElementsNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(context: JSContext, targetNode: JavaScriptNode, constructorNode: JavaScriptNode)
    // private privateBrandAddNode: InitializeInstanceElementsNodeGen$PrivateBrandAddNodeSharedWrapper;
    // private state_0_: number;
    // private withFields_callInit_: JSFunctionCallNode;
    // private withFields_fieldNodes_: InitializeInstanceElementsNode$InitializeFieldOrAccessorNode[];
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(targetNodeValue: Object, constructorNodeValue: Object, fieldsNodeValue: Object, initializersNodeValue: Object, brandNodeValue: Object): Object;
    executeEvaluated(targetNodeValue: Object, constructorNodeValue: Object, fieldsNodeValue: ClassElementDefinitionRecord[], initializersNodeValue: Object[], brandNodeValue: Object): Object;
    executeVoid(frameValue: VirtualFrame): void;
}