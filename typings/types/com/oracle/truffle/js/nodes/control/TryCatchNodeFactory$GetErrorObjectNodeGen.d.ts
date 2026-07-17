import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString$FromJavaStringNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$FromJavaStringNode.d.ts'
import type { InitErrorObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/InitErrorObjectNode.d.ts'
import type { TryCatchNode$GetErrorObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/control/TryCatchNode$GetErrorObjectNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
export class TryCatchNodeFactory$GetErrorObjectNodeGen extends TryCatchNode$GetErrorObjectNode {
    static create(): TryCatchNode$GetErrorObjectNode;
    static getUncached(): TryCatchNode$GetErrorObjectNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private fromJavaStringNode: TruffleString$FromJavaStringNode;
    // private initErrorObjectNode: InitErrorObjectNode;
    // private state_0_: number;
    execute(ex: Throwable): Object;
    execute(arg0Value: Throwable, arg1Value: boolean): Object;
    // private executeAndSpecialize(arg0Value: Throwable, arg1Value: boolean): Object;
    // private fallbackGuard_(state_0: number, arg0Value: Throwable, arg1Value: boolean): boolean;
}