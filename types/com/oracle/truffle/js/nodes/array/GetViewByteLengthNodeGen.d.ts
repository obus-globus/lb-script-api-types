import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { GetViewByteLengthNode } from '../../../../../../com/oracle/truffle/js/nodes/array/GetViewByteLengthNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDataViewObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSDataViewObject.d.ts'
export class GetViewByteLengthNodeGen extends GetViewByteLengthNode {
    static create(): GetViewByteLengthNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private autoLength_getByteLengthNode__field1_: Node;
    // private state_0_: number;
    execute(arg0Value: JSDataViewObject, arg1Value: JSContext): number;
    // private executeAndSpecialize(arg0Value: JSDataViewObject, arg1Value: JSContext): number;
}