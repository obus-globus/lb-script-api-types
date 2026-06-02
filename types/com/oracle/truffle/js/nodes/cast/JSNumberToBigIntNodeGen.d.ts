import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSNumberToBigIntNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSNumberToBigIntNode.d.ts'
import type { BigInt } from '../../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSNumberToBigIntNodeGen extends JSNumberToBigIntNode {
    static create(): JSNumberToBigIntNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private state_0_: number;
    execute(arg0Value: Object): BigInt;
    // private executeAndSpecialize(arg0Value: Object): BigInt;
    // private fallbackGuard_(state_0: number, arg0Value: Object): boolean;
}