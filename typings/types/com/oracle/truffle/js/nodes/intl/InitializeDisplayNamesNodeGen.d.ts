import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InitializeDisplayNamesNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/InitializeDisplayNamesNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDisplayNamesObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/intl/JSDisplayNamesObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class InitializeDisplayNamesNodeGen extends InitializeDisplayNamesNode {
    static create(paramcontext: JSContext): InitializeDisplayNamesNode;
    static createInitalizeDisplayNamesNode(paramcontext: JSContext): InitializeDisplayNamesNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext)
    executeInit(arg0Value: JSDisplayNamesObject, arg1Value: Object, arg2Value: Object): JSDisplayNamesObject;
}