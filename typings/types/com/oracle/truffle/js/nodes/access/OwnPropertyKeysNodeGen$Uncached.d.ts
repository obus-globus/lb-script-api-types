import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { UnadoptableNode } from '../../../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { OwnPropertyKeysNode } from '../../../../../../com/oracle/truffle/js/nodes/access/OwnPropertyKeysNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class OwnPropertyKeysNodeGen$Uncached extends OwnPropertyKeysNode implements UnadoptableNode {
    static create(): OwnPropertyKeysNode;
    static getUncached(): OwnPropertyKeysNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    execute(arg0Value: Object): Object[];
}