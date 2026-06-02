import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { ArrayBufferPrototypeBuiltins$JSArrayBufferOperation } from '../../../../../com/oracle/truffle/js/builtins/ArrayBufferPrototypeBuiltins$JSArrayBufferOperation.d.ts'
import type { TypedArrayPrototypeBuiltins$SetTypedArrayNode } from '../../../../../com/oracle/truffle/js/builtins/TypedArrayPrototypeBuiltins$SetTypedArrayNode.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSTypedArrayObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSTypedArrayObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class TypedArrayPrototypeBuiltins$JSArrayBufferViewSetNode extends ArrayBufferPrototypeBuiltins$JSArrayBufferOperation {
    static ARGUMENTS: string;
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, builtin: JSBuiltin)
    set(targetObj: JSTypedArrayObject, array: Object, offset: Object, setTypedArrayNode: TypedArrayPrototypeBuiltins$SetTypedArrayNode, errorBranch: InlinedBranchProfile): Object;
    set(thisObj: Object, array: Object, offset: Object): Object;
}