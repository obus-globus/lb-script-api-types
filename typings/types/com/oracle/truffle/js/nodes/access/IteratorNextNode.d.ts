import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { IsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { IteratorRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/IteratorRecord.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class IteratorNextNode extends JavaScriptBaseNode {
    static create(): IteratorNextNode;
    static getUncached(): IteratorNextNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    execute(iteratorRecord: IteratorRecord): Object;
    execute(iteratorRecord: IteratorRecord, value: Object): Object;
    execute(iteratorRecord: IteratorRecord, value: Object, passValue: boolean): Object;
    iteratorNext(iteratorRecord: IteratorRecord, value: Object, passValue: boolean, methodCallNode: JSFunctionCallNode, isObjectNode: IsObjectNode, errorBranch: InlinedBranchProfile): Object;
}