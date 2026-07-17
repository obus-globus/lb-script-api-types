import type { InteropLibrary } from '../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TypedArrayPrototypeBuiltins$CopyTypedArrayElementsNode } from '../../../../../com/oracle/truffle/js/builtins/TypedArrayPrototypeBuiltins$CopyTypedArrayElementsNode.d.ts'
import type { TypedArrayPrototypeBuiltins$SetTypedArrayNode } from '../../../../../com/oracle/truffle/js/builtins/TypedArrayPrototypeBuiltins$SetTypedArrayNode.d.ts'
import type { ReadElementNode } from '../../../../../com/oracle/truffle/js/nodes/access/ReadElementNode.d.ts'
import type { JSGetLengthNode } from '../../../../../com/oracle/truffle/js/nodes/array/JSGetLengthNode.d.ts'
import type { JSToObjectNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToObjectNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSTypedArrayObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSTypedArrayObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TypedArrayPrototypeBuiltinsFactory$SetTypedArrayNodeGen extends TypedArrayPrototypeBuiltins$SetTypedArrayNode {
    static create(): TypedArrayPrototypeBuiltins$SetTypedArrayNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private fallback_getLengthNode_: JSGetLengthNode;
    // private fallback_toObjectNode_: JSToObjectNode;
    // private readElementNode: ReadElementNode;
    // private setBufferElementNode_field1_: Node;
    // private setTypedArrayFromTypedArray_copyTypedArrayElementsNode_: TypedArrayPrototypeBuiltins$CopyTypedArrayElementsNode;
    // private state_0_: number;
    // private typedArrayLengthNode_field1_: InteropLibrary;
    execute(arg0Value: JSTypedArrayObject, arg1Value: Object, arg2Value: number, arg3Value: JSContext): void;
    // private executeAndSpecialize(arg0Value: JSTypedArrayObject, arg1Value: Object, arg2Value: number, arg3Value: JSContext): void;
    // private fallbackGuard_(state_0: number, arg0Value: JSTypedArrayObject, arg1Value: Object, arg2Value: number, arg3Value: JSContext): boolean;
}