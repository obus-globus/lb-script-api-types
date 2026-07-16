import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { ArrayLengthNode$ArrayLengthReadNode } from '../../../../../../com/oracle/truffle/js/nodes/array/ArrayLengthNode$ArrayLengthReadNode.d.ts'
import type { ArrayLengthNodeFactory$ArrayLengthReadNodeGen$IntLengthData } from '../../../../../../com/oracle/truffle/js/nodes/array/ArrayLengthNodeFactory$ArrayLengthReadNodeGen$IntLengthData.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ArrayLengthNodeFactory$ArrayLengthReadNodeGen extends ArrayLengthNode$ArrayLengthReadNode {
    static create(): ArrayLengthNode$ArrayLengthReadNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private intLength_cache: ArrayLengthNodeFactory$ArrayLengthReadNodeGen$IntLengthData;
    // private state_0_: number;
    // private typedArrayAutoLength_typedArrayLengthNode__field1_: Node;
    // private executeAndSpecialize(arg0Value: JSDynamicObject): Object;
    executeInt(arg0Value: JSDynamicObject): number;
    executeObject(arg0Value: JSDynamicObject): Object;
}