import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { IteratorRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/IteratorRecord.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class IteratorStepNode extends JavaScriptBaseNode {
    static create(): IteratorStepNode;
    static getUncached(): IteratorStepNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    execute(iteratorRecord: IteratorRecord): Object;
}