import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { PropertySetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode.d.ts'
import type { ArrayLengthNode$ArrayLengthWriteNode } from '../../../../../../com/oracle/truffle/js/nodes/array/ArrayLengthNode$ArrayLengthWriteNode.d.ts'
import type { JSSetLengthNode } from '../../../../../../com/oracle/truffle/js/nodes/array/JSSetLengthNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSSetLengthNodeGen extends JSSetLengthNode {
    static create(paramcontext: JSContext, paramisStrict: boolean): JSSetLengthNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext, isStrict: boolean)
    // private setArrayLength_arrayLengthWriteNode_: ArrayLengthNode$ArrayLengthWriteNode;
    // private setLengthProperty: PropertySetNode;
    // private state_0_: number;
    execute(arg0Value: Object, arg1Value: Object): Object;
    // private executeAndSpecialize(arg0Value: Object, arg1Value: Object): Object;
}