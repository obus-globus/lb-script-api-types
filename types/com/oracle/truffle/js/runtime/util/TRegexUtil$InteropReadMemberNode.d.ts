import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class TRegexUtil$InteropReadMemberNode extends Node {
    static create(): TRegexUtil$InteropReadMemberNode;
    static getUncached(): TRegexUtil$InteropReadMemberNode;
    constructor()
    execute(node: Node, obj: Object, key: string): Object;
}