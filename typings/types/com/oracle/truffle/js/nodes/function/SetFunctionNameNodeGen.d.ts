import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { SetFunctionNameNode } from '../../../../../../com/oracle/truffle/js/nodes/function/SetFunctionNameNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class SetFunctionNameNodeGen extends SetFunctionNameNode {
    static create(): SetFunctionNameNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private state_0_: number;
    execute(callable: Object, propertyKey: Object): void;
    execute(arg0Value: Object, arg1Value: Object, arg2Value: TruffleString): void;
    // private executeAndSpecialize(arg0Value: Object, arg1Value: Object, arg2Value: TruffleString): void;
    // private fallbackGuard_(state_0: number, arg0Value: Object, arg1Value: Object, arg2Value: TruffleString): boolean;
}