import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSToIntegerAsIntNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToIntegerAsIntNode.d.ts'
import type { JSToIntegerAsIntNodeGen$StringData } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToIntegerAsIntNodeGen$StringData.d.ts'
import type { JSToNumberNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToNumberNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSToIntegerAsIntNodeGen extends JSToIntegerAsIntNode {
    static create(): JSToIntegerAsIntNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private state_0_: number;
    // private string_cache: JSToIntegerAsIntNodeGen$StringData;
    // private toNumberNode: JSToNumberNode;
    // private executeAndSpecialize(arg0Value: Object): number;
    executeInt(arg0Value: Object): number;
}