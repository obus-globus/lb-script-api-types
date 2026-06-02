import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InitializeListFormatNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/InitializeListFormatNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSListFormatObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/intl/JSListFormatObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class InitializeListFormatNodeGen extends InitializeListFormatNode {
    static create(paramcontext: JSContext): InitializeListFormatNode;
    static createInitalizeListFormatNode(paramcontext: JSContext): InitializeListFormatNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext)
    executeInit(arg0Value: JSListFormatObject, arg1Value: Object, arg2Value: Object): JSListFormatObject;
}