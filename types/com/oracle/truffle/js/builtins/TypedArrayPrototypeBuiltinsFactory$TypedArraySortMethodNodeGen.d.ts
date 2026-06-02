import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TypedArrayPrototypeBuiltins$TypedArraySortMethodNode } from '../../../../../com/oracle/truffle/js/builtins/TypedArrayPrototypeBuiltins$TypedArraySortMethodNode.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSTypedArraySortNode } from '../../../../../com/oracle/truffle/js/nodes/array/JSTypedArraySortNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSTypedArrayObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSTypedArrayObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TypedArrayPrototypeBuiltinsFactory$TypedArraySortMethodNodeGen extends TypedArrayPrototypeBuiltins$TypedArraySortMethodNode {
    static ARGUMENTS: string;
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static create(paramcontext: JSContext, parambuiltin: JSBuiltin, paramtoSorted: boolean, paramarguments: (Object | null)[]): TypedArrayPrototypeBuiltins$TypedArraySortMethodNode;
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(context: JSContext, builtin: JSBuiltin, toSorted: boolean, arguments: JavaScriptNode[])
    // private arguments0_: JavaScriptNode;
    // private arguments1_: JavaScriptNode;
    // private state_0_: number;
    // private typedArrayLengthNode__field1_: Node;
    // private typedArraySortNode_: JSTypedArraySortNode;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(arguments0Value: Object, arguments1Value: Object): JSTypedArrayObject;
    getArguments(): JavaScriptNode[];
}