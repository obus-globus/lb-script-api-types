import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSToIndexNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToIndexNode.d.ts'
import type { JSToIndexNodeGen$ObjectData } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToIndexNodeGen$ObjectData.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSToIndexNodeGen extends JSToIndexNode {
    static create(): JSToIndexNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private object_cache: JSToIndexNodeGen$ObjectData;
    // private state_0_: number;
    // private executeAndSpecialize(arg0Value: Object): number;
    executeLong(arg0Value: Object): number;
}