import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InitializeDurationFormatNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/InitializeDurationFormatNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDurationFormatObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/intl/JSDurationFormatObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class InitializeDurationFormatNodeGen extends InitializeDurationFormatNode {
    static create(paramcontext: JSContext): InitializeDurationFormatNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext)
    executeInit(arg0Value: JSDurationFormatObject, arg1Value: Object, arg2Value: Object): JSDurationFormatObject;
}