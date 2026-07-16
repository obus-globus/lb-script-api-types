import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InitializeNumberFormatNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/InitializeNumberFormatNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSNumberFormatObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/intl/JSNumberFormatObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class InitializeNumberFormatNodeGen extends InitializeNumberFormatNode {
    static create(paramcontext: JSContext): InitializeNumberFormatNode;
    static createInitalizeNumberFormatNode(paramcontext: JSContext): InitializeNumberFormatNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext)
    executeInit(arg0Value: JSNumberFormatObject, arg1Value: Object, arg2Value: Object): JSNumberFormatObject;
}