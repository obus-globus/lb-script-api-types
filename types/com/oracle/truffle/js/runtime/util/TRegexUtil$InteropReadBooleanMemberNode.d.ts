import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class TRegexUtil$InteropReadBooleanMemberNode extends Node {
    static create(): TRegexUtil$InteropReadBooleanMemberNode;
    static getUncached(): TRegexUtil$InteropReadBooleanMemberNode;
    constructor()
    execute(node: Node, obj: Object, key: string): boolean;
}