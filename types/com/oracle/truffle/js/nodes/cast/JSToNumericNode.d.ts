import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSToNumberNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToNumberNode.d.ts'
import type { JSToNumericNode$PrimitiveToNumericOrNullNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToNumericNode$PrimitiveToNumericOrNullNode.d.ts'
import type { JSToPrimitiveNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToPrimitiveNode.d.ts'
import type { JSOverloadedOperatorsObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSOverloadedOperatorsObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSToNumericNode extends JavaScriptBaseNode {
    static create(paramchild: JavaScriptNode, paramtoNumericOperand: boolean): JavaScriptNode;
    static create(): JSToNumericNode;
    static create(paramtoNumericOperand: boolean): JSToNumericNode;
    static createToNumericOperand(paramchild: JavaScriptNode): JavaScriptNode;
    static createToNumericOperand(): JSToNumericNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(toNumericOperand: boolean)
    // private toNumericOperand: boolean;
    doOverloaded(arg: JSOverloadedOperatorsObject): Object;
    doToNumericOperandOther(value: Object, toPrimitiveNode: JSToPrimitiveNode, numericOrNullNode: JSToNumericNode$PrimitiveToNumericOrNullNode, toNumberNode: JSToNumberNode): Object;
    doToNumericOther(value: Object, toPrimitiveNode: JSToPrimitiveNode, numericOrNullNode: JSToNumericNode$PrimitiveToNumericOrNullNode, toNumberNode: JSToNumberNode): Object;
    execute(value: Object): Object;
    isToNumericOperand(): boolean;
}