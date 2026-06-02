import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class TRegexUtil$InteropReadIntArrayMemberNode extends Node {
    static getUncached(): TRegexUtil$InteropReadIntArrayMemberNode;
    constructor()
    execute(node: Node, obj: Object, key: string): number[];
}