import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InitializeRelativeTimeFormatNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/InitializeRelativeTimeFormatNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRelativeTimeFormatObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/intl/JSRelativeTimeFormatObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class InitializeRelativeTimeFormatNodeGen extends InitializeRelativeTimeFormatNode {
    static create(paramcontext: JSContext): InitializeRelativeTimeFormatNode;
    static createInitalizeRelativeTimeFormatNode(paramcontext: JSContext): InitializeRelativeTimeFormatNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext)
    executeInit(arg0Value: JSRelativeTimeFormatObject, arg1Value: Object, arg2Value: Object): JSRelativeTimeFormatObject;
}