import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObject$PutNode } from '../../../../../../com/oracle/truffle/api/object/DynamicObject$PutNode.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSFunctionObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { PromiseReactionRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/PromiseReactionRecord.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class PromiseReactionJobNode extends JavaScriptBaseNode {
    static create(): PromiseReactionJobNode;
    static getUncached(): PromiseReactionJobNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    doExecute(reaction: PromiseReactionRecord, argument: Object, setReaction: DynamicObject$PutNode, setArgument: DynamicObject$PutNode): JSFunctionObject;
    execute(reaction: PromiseReactionRecord, argument: Object): JSFunctionObject;
}