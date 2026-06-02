import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSToStringNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToStringNode.d.ts'
import type { InitializeLocaleNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/InitializeLocaleNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSLocaleObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/intl/JSLocaleObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class InitializeLocaleNodeGen extends InitializeLocaleNode {
    static create(paramcontext: JSContext): InitializeLocaleNode;
    static createInitalizeLocaleNode(paramcontext: JSContext): InitializeLocaleNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static stringToWeekdayValue(paramfw: string): number;
    private constructor(context: JSContext)
    // private initializeLocaleUsingObject_toStringNode_: JSToStringNode;
    // private state_0_: number;
    // private executeAndSpecialize(arg0Value: JSLocaleObject, arg1Value: Object, arg2Value: Object): JSLocaleObject;
    executeInit(arg0Value: JSLocaleObject, arg1Value: Object, arg2Value: Object): JSLocaleObject;
}