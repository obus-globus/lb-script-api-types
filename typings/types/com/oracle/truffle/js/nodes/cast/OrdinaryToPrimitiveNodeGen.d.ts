import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { IsPrimitiveNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsPrimitiveNode.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { JSToPrimitiveNode$Hint } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToPrimitiveNode$Hint.d.ts'
import type { OrdinaryToPrimitiveNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/OrdinaryToPrimitiveNode.d.ts'
import type { OrdinaryToPrimitiveNodeGen$Foreign0Data } from '../../../../../../com/oracle/truffle/js/nodes/cast/OrdinaryToPrimitiveNodeGen$Foreign0Data.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { ForeignObjectPrototypeNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/ForeignObjectPrototypeNode.d.ts'
import type { IsCallableNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/IsCallableNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class OrdinaryToPrimitiveNodeGen extends OrdinaryToPrimitiveNode {
    static create(): OrdinaryToPrimitiveNode;
    static getUncached(): OrdinaryToPrimitiveNode;
    static isJavaArray(paramobject: Object, paraminterop: InteropLibrary): boolean;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private callToStringNode: JSFunctionCallNode;
    // private callValueOfNode: JSFunctionCallNode;
    // private foreign0_cache: OrdinaryToPrimitiveNodeGen$Foreign0Data;
    // private foreignObjectPrototypeNode: ForeignObjectPrototypeNode;
    // private getToStringNode: PropertyGetNode;
    // private getValueOfNode: PropertyGetNode;
    // private isCallableNode: IsCallableNode;
    // private isPrimitiveNode: IsPrimitiveNode;
    // private state_0_: number;
    execute(arg0Value: Object, arg1Value: JSToPrimitiveNode$Hint): Object;
    // private executeAndSpecialize(arg0Value: Object, arg1Value: JSToPrimitiveNode$Hint): Object;
    // private foreign1Boundary(state_0: number, arg0Value: Object, arg1Value: JSToPrimitiveNode$Hint, getToStringNode_1: PropertyGetNode, getValueOfNode_1: PropertyGetNode, isCallableNode_1: IsCallableNode, isPrimitiveNode_1: IsPrimitiveNode, callToStringNode_1: JSFunctionCallNode, callValueOfNode_1: JSFunctionCallNode, foreignObjectPrototypeNode_: ForeignObjectPrototypeNode): Object;
}