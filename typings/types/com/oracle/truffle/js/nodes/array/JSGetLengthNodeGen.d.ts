import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { ArrayLengthNode$ArrayLengthReadNode } from '../../../../../../com/oracle/truffle/js/nodes/array/ArrayLengthNode$ArrayLengthReadNode.d.ts'
import type { JSGetLengthNode } from '../../../../../../com/oracle/truffle/js/nodes/array/JSGetLengthNode.d.ts'
import type { JSGetLengthNodeGen$GetLengthForeign0Data } from '../../../../../../com/oracle/truffle/js/nodes/array/JSGetLengthNodeGen$GetLengthForeign0Data.d.ts'
import type { JSGetLengthNodeGen$GetLengthForeign1Data } from '../../../../../../com/oracle/truffle/js/nodes/array/JSGetLengthNodeGen$GetLengthForeign1Data.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSGetLengthNodeGen extends JSGetLengthNode {
    static create(paramcontext: JSContext): JSGetLengthNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext)
    // private arrayLengthReadNode: ArrayLengthNode$ArrayLengthReadNode;
    // private getLengthForeign0_cache: JSGetLengthNodeGen$GetLengthForeign0Data;
    // private getLengthForeign1_cache: JSGetLengthNodeGen$GetLengthForeign1Data;
    // private getNonArrayLength_getLengthPropertyNode_: PropertyGetNode;
    // private state_0_: number;
    execute(arg0Value: Object): Object;
    // private executeAndSpecialize(arg0Value: Object): Object;
    // private getLengthForeign1Boundary(state_0: number, s4_: JSGetLengthNodeGen$GetLengthForeign1Data, arg0Value: Object): Object;
}