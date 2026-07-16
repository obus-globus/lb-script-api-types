import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { ListGetNode } from '../../../../../../com/oracle/truffle/js/builtins/helper/ListGetNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ListGetNodeGen extends ListGetNode {
    static create(): ListGetNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private state_0_: number;
    execute(arg0Value: Object, arg1Value: number): Object;
    // private executeAndSpecialize(arg0Value: Object, arg1Value: number): Object;
    // private fallbackGuard_(state_0: number, arg0Value: Object, arg1Value: number): boolean;
}