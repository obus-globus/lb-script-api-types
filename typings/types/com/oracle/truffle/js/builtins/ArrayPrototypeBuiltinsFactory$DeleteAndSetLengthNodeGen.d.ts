import type { InteropLibrary } from '../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { ArrayPrototypeBuiltins$DeleteAndSetLengthNode } from '../../../../../com/oracle/truffle/js/builtins/ArrayPrototypeBuiltins$DeleteAndSetLengthNode.d.ts'
import type { PropertySetNode } from '../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode.d.ts'
import type { ArrayLengthNode$ArrayLengthWriteNode } from '../../../../../com/oracle/truffle/js/nodes/array/ArrayLengthNode$ArrayLengthWriteNode.d.ts'
import type { DeletePropertyNode } from '../../../../../com/oracle/truffle/js/nodes/control/DeletePropertyNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ArrayPrototypeBuiltinsFactory$DeleteAndSetLengthNodeGen extends ArrayPrototypeBuiltins$DeleteAndSetLengthNode {
    static create(paramcontext: JSContext): ArrayPrototypeBuiltins$DeleteAndSetLengthNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext)
    // private deletePropertyNode: DeletePropertyNode;
    // private foreignArray_arrays_: InteropLibrary;
    // private setArrayLength_arrayLengthWriteNode_: ArrayLengthNode$ArrayLengthWriteNode;
    // private setLengthProperty: PropertySetNode;
    // private state_0_: number;
    // private executeAndSpecialize(arg0Value: Object, arg1Value: number): void;
    executeVoid(arg0Value: Object, arg1Value: number): void;
}