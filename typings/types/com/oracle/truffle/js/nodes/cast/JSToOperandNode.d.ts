import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSToPrimitiveNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToPrimitiveNode.d.ts'
import type { JSToPrimitiveNode$Hint } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToPrimitiveNode$Hint.d.ts'
import type { JSOverloadedOperatorsObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSOverloadedOperatorsObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSToOperandNode extends JavaScriptBaseNode {
    static create(paramhint: JSToPrimitiveNode$Hint): JSToOperandNode;
    static create(paramhint: JSToPrimitiveNode$Hint, paramcheckOperatorAllowed: boolean): JSToOperandNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(hint: JSToPrimitiveNode$Hint, checkOperatorAllowed: boolean)
    // private checkOperatorAllowed: boolean;
    // private hint: JSToPrimitiveNode$Hint;
    doOther(arg: Object, toPrimitiveNode: JSToPrimitiveNode): Object;
    doOverloaded(arg: JSOverloadedOperatorsObject): Object;
    execute(value: Object): Object;
    getHint(): JSToPrimitiveNode$Hint;
}