import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString$SwitchEncodingNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$SwitchEncodingNode.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { JSToPrimitiveNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToPrimitiveNode.d.ts'
import type { JSToPrimitiveNode$Hint } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToPrimitiveNode$Hint.d.ts'
import type { JSToPrimitiveNodeGen$ForeignObject0Data } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToPrimitiveNodeGen$ForeignObject0Data.d.ts'
import type { OrdinaryToPrimitiveNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/OrdinaryToPrimitiveNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { ForeignObjectPrototypeNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/ForeignObjectPrototypeNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSToPrimitiveNodeGen extends JSToPrimitiveNode {
    static create(): JSToPrimitiveNode;
    static getUncached(): JSToPrimitiveNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static tryHostObjectToPrimitive(paramobject: Object, paramhint: JSToPrimitiveNode$Hint, paraminterop: InteropLibrary): Object;
    private constructor()
    // private asPrimitiveNode_field1_: Node;
    // private callExoticToPrim: JSFunctionCallNode;
    // private foreignObject0_cache: JSToPrimitiveNodeGen$ForeignObject0Data;
    // private foreignObjectPrototypeNode: ForeignObjectPrototypeNode;
    // private getToPrimitive: PropertyGetNode;
    // private ordinaryToPrimitiveNode: OrdinaryToPrimitiveNode;
    // private state_0_: number;
    // private state_1_: number;
    // private switchEncoding: TruffleString$SwitchEncodingNode;
    execute(arg0Value: Object, arg1Value: JSToPrimitiveNode$Hint): Object;
    // private executeAndSpecialize(arg0Value: Object, arg1Value: JSToPrimitiveNode$Hint): Object;
    // private fallbackGuard_(state_0: number, arg0Value: Object, arg1Value: JSToPrimitiveNode$Hint): boolean;
    // private foreignObject1Boundary(state_0: number, arg0Value: Object, arg1Value: JSToPrimitiveNode$Hint, foreignObjectPrototypeNode_: ForeignObjectPrototypeNode, getToPrimitive_1: PropertyGetNode, callExoticToPrim_1: JSFunctionCallNode, ordinaryToPrimitiveNode_1: OrdinaryToPrimitiveNode, switchEncoding_: TruffleString$SwitchEncodingNode): Object;
}