import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSRegExpExecIntlNode } from '../../../../../../com/oracle/truffle/js/builtins/helper/JSRegExpExecIntlNode.d.ts'
import type { JSRegExpExecIntlNode$JSRegExpExecBuiltinNode } from '../../../../../../com/oracle/truffle/js/builtins/helper/JSRegExpExecIntlNode$JSRegExpExecBuiltinNode.d.ts'
import type { IsJSClassNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsJSClassNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSRegExpExecIntlNodeGen extends JSRegExpExecIntlNode {
    static create(paramcontext: JSContext): JSRegExpExecIntlNode;
    static createIsJSRegExpNode(): IsJSClassNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext)
    // private regExp_builtinExec_: JSRegExpExecIntlNode$JSRegExpExecBuiltinNode;
    // private state_0_: number;
    execute(arg0Value: Object, arg1Value: TruffleString): Object;
    // private executeAndSpecialize(arg0Value: Object, arg1Value: TruffleString): Object;
    // private fallbackGuard_(state_0: number, arg0Value: Object, arg1Value: TruffleString): boolean;
}