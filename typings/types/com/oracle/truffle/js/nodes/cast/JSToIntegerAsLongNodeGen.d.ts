import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSToIntegerAsLongNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToIntegerAsLongNode.d.ts'
import type { JSToIntegerAsLongNodeGen$StringData } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToIntegerAsLongNodeGen$StringData.d.ts'
import type { JSToNumberNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToNumberNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSToIntegerAsLongNodeGen extends JSToIntegerAsLongNode {
    static create(): JSToIntegerAsLongNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private state_0_: number;
    // private string_cache: JSToIntegerAsLongNodeGen$StringData;
    // private toNumberNode: JSToNumberNode;
    // private executeAndSpecialize(arg0Value: Object): number;
    executeLong(arg0Value: Object): number;
}