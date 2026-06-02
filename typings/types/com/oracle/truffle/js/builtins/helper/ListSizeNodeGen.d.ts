import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { ListSizeNode } from '../../../../../../com/oracle/truffle/js/builtins/helper/ListSizeNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ListSizeNodeGen extends ListSizeNode {
    static create(): ListSizeNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private state_0_: number;
    execute(arg0Value: (Object | null)[]): number;
    // private executeAndSpecialize(arg0Value: (Object | null)[]): number;
    // private fallbackGuard_(state_0: number, arg0Value: (Object | null)[]): boolean;
}