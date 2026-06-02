import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { JSToBooleanNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToBooleanNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class IteratorCompleteNode extends JavaScriptBaseNode {
    static create(): IteratorCompleteNode;
    static getUncached(): IteratorCompleteNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    createGetDoneNode(): PropertyGetNode;
    execute(iterResult: Object): boolean;
    iteratorComplete(iterResult: Object, getDoneNode: PropertyGetNode, toBooleanNode: JSToBooleanNode): boolean;
}