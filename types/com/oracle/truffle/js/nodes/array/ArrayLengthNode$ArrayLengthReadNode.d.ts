import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { ArrayLengthNode } from '../../../../../../com/oracle/truffle/js/nodes/array/ArrayLengthNode.d.ts'
import type { TypedArrayLengthNode } from '../../../../../../com/oracle/truffle/js/nodes/array/TypedArrayLengthNode.d.ts'
import type { JSTypedArrayObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSTypedArrayObject.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class ArrayLengthNode$ArrayLengthReadNode extends ArrayLengthNode {
    static create(): ArrayLengthNode$ArrayLengthReadNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    doTypedArrayAutoLength(target: JSTypedArrayObject, typedArrayLengthNode: TypedArrayLengthNode): number;
    executeDouble(target: JSDynamicObject): number;
    executeInt(target: JSDynamicObject): number;
    executeObject(target: JSDynamicObject): Object;
}