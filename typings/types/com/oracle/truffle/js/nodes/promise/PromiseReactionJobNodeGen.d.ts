import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObject$PutNode } from '../../../../../../com/oracle/truffle/api/object/DynamicObject$PutNode.d.ts'
import type { PromiseReactionJobNode } from '../../../../../../com/oracle/truffle/js/nodes/promise/PromiseReactionJobNode.d.ts'
import type { JSFunctionObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { PromiseReactionRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/PromiseReactionRecord.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PromiseReactionJobNodeGen extends PromiseReactionJobNode {
    static create(): PromiseReactionJobNode;
    static getUncached(): PromiseReactionJobNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private setArgument_: DynamicObject$PutNode;
    // private setReaction_: DynamicObject$PutNode;
    // private state_0_: number;
    execute(arg0Value: PromiseReactionRecord, arg1Value: Object): JSFunctionObject;
    // private executeAndSpecialize(arg0Value: PromiseReactionRecord, arg1Value: Object): JSFunctionObject;
}