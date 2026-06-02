import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class TRegexUtil$InvokeGetGroupBoundariesMethodNode extends Node {
    static create(): TRegexUtil$InvokeGetGroupBoundariesMethodNode;
    static getUncached(): TRegexUtil$InvokeGetGroupBoundariesMethodNode;
    constructor()
    execute(node: Node, regexResult: Object, method: Object, groupNumber: number): number;
}