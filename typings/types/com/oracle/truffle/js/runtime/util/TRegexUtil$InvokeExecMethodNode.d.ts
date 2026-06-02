import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class TRegexUtil$InvokeExecMethodNode extends Node {
    static getUncached(): TRegexUtil$InvokeExecMethodNode;
    constructor()
    execute(node: Node, compiledRegex: Object, input: Object, fromIndex: number): Object;
}