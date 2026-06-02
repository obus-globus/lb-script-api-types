import type { InteropLibrary } from '../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { ArrayBufferPrototypeBuiltins$JSArrayBufferAbstractSliceNode } from '../../../../../com/oracle/truffle/js/builtins/ArrayBufferPrototypeBuiltins$JSArrayBufferAbstractSliceNode.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSArrayBufferObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayBufferObject.d.ts'
import type { JSArrayBufferObject$Direct } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayBufferObject$Direct.d.ts'
import type { JSArrayBufferObject$Heap } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayBufferObject$Heap.d.ts'
import type { JSArrayBufferObject$Interop } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayBufferObject$Interop.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ArrayBufferPrototypeBuiltins$JSArrayBufferSliceNode extends ArrayBufferPrototypeBuiltins$JSArrayBufferAbstractSliceNode {
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
    // private checkDetachedBuffer(arrayBuffer: JSArrayBufferObject, errorBranch: InlinedBranchProfile): void;
    // private constructNewArrayBuffer(thisObj: JSArrayBufferObject, newLen: number, direct: boolean, errorBranch: InlinedBranchProfile): JSArrayBufferObject;
    // private copyInteropBufferElements(srcBuffer: Object, dstBuffer: Object, srcBufferOffset: number, len: number, errorBranch: InlinedBranchProfile, srcBufferLib: InteropLibrary, dstBufferLib: InteropLibrary): void;
    slice(thisObj: JSArrayBufferObject$Heap, begin0: Object, end0: Object, errorBranch: InlinedBranchProfile): JSArrayBufferObject;
    sliceDirect(thisObj: JSArrayBufferObject$Direct, begin0: Object, end0: Object, errorBranch: InlinedBranchProfile): JSArrayBufferObject;
    sliceDirectIntInt(thisObj: JSArrayBufferObject$Direct, begin: number, end: number, errorBranch: InlinedBranchProfile): JSArrayBufferObject;
    sliceIntInt(thisObj: JSArrayBufferObject$Heap, begin: number, end: number, errorBranch: InlinedBranchProfile): JSArrayBufferObject;
    sliceInterop(thisObj: JSArrayBufferObject$Interop, begin0: Object, end0: Object, errorBranch: InlinedBranchProfile, srcBufferLib: InteropLibrary, dstBufferLib: InteropLibrary): JSArrayBufferObject;
    sliceTruffleBuffer(thisObj: Object, begin0: Object, end0: Object, errorBranch: InlinedBranchProfile, srcBufferLib: InteropLibrary, dstBufferLib: InteropLibrary): JSArrayBufferObject;
}