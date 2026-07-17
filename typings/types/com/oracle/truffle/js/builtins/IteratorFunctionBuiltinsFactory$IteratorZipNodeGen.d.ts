import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { InteropLibrary } from '../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString$EqualNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$EqualNode.d.ts'
import type { IteratorFunctionBuiltins$IteratorZipNode } from '../../../../../com/oracle/truffle/js/builtins/IteratorFunctionBuiltins$IteratorZipNode.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { GetIteratorFlattenableNode } from '../../../../../com/oracle/truffle/js/nodes/access/GetIteratorFlattenableNode.d.ts'
import type { GetMethodNode } from '../../../../../com/oracle/truffle/js/nodes/access/GetMethodNode.d.ts'
import type { IsObjectNode } from '../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { IteratorCloseNode } from '../../../../../com/oracle/truffle/js/nodes/access/IteratorCloseNode.d.ts'
import type { IteratorStepNode } from '../../../../../com/oracle/truffle/js/nodes/access/IteratorStepNode.d.ts'
import type { IteratorValueNode } from '../../../../../com/oracle/truffle/js/nodes/access/IteratorValueNode.d.ts'
import type { PropertyGetNode } from '../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { GetOptionsObjectNode } from '../../../../../com/oracle/truffle/js/nodes/intl/GetOptionsObjectNode.d.ts'
import type { IsCallableNode } from '../../../../../com/oracle/truffle/js/nodes/unary/IsCallableNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSIteratorHelperObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSIteratorHelperObject.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class IteratorFunctionBuiltinsFactory$IteratorZipNodeGen extends IteratorFunctionBuiltins$IteratorZipNode {
    static ARGUMENTS: string;
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static create(paramcontext: JSContext, parambuiltin: JSBuiltin, paramarguments: JavaScriptNode[]): IteratorFunctionBuiltins$IteratorZipNode;
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(context: JSContext, builtin: JSBuiltin, arguments: JavaScriptNode[])
    // private arguments0_: JavaScriptNode;
    // private arguments1_: JavaScriptNode;
    // private equalNode_: TruffleString$EqualNode;
    // private getIteratorFlattenableNode_: GetIteratorFlattenableNode;
    // private getIteratorNode__field1_: GetMethodNode;
    // private getIteratorNode__field2_: IsCallableNode;
    // private getIteratorNode__field3_: JSFunctionCallNode;
    // private getIteratorNode__field4_: PropertyGetNode;
    // private getIteratorNode__field5_: InteropLibrary;
    // private getModeNode_: PropertyGetNode;
    // private getOptionsObjectNode_: GetOptionsObjectNode;
    // private getPaddingNode_: PropertyGetNode;
    // private isObjectNode_: IsObjectNode;
    // private iteratorCloseNode_: IteratorCloseNode;
    // private iteratorStepNode_: IteratorStepNode;
    // private iteratorValueNode_: IteratorValueNode;
    // private state_0_: number;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(arguments0Value: Object, arguments1Value: Object): JSIteratorHelperObject;
    getArguments(): JavaScriptNode[];
}