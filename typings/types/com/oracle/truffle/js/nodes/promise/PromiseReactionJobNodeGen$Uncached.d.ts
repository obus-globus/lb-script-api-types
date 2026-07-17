import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { UnadoptableNode } from '../../../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { PromiseReactionJobNode } from '../../../../../../com/oracle/truffle/js/nodes/promise/PromiseReactionJobNode.d.ts'
import type { JSFunctionObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { PromiseReactionRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/PromiseReactionRecord.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PromiseReactionJobNodeGen$Uncached extends PromiseReactionJobNode implements UnadoptableNode {
    static create(): PromiseReactionJobNode;
    static getUncached(): PromiseReactionJobNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    execute(arg0Value: PromiseReactionRecord, arg1Value: Object): JSFunctionObject;
}