import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { ArrayCreateNode } from '../../../../../../com/oracle/truffle/js/nodes/array/ArrayCreateNode.d.ts'
import type { ArraySpeciesCreateNode } from '../../../../../../com/oracle/truffle/js/nodes/array/ArraySpeciesCreateNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { IsConstructorNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/IsConstructorNode.d.ts'
import type { JSIsArrayNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/JSIsArrayNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ArraySpeciesCreateNodeGen extends ArraySpeciesCreateNode {
    static create(): ArraySpeciesCreateNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private arrayCreateNode_: ArrayCreateNode;
    // private constructorCall_: JSFunctionCallNode;
    // private getConstructorNode_: PropertyGetNode;
    // private getSpeciesNode_: PropertyGetNode;
    // private isArrayNode_: JSIsArrayNode;
    // private isConstructorNode_: IsConstructorNode;
    // private state_0_: number;
    execute(arg0Value: Object, arg1Value: number): Object;
    // private executeAndSpecialize(arg0Value: Object, arg1Value: number): Object;
}