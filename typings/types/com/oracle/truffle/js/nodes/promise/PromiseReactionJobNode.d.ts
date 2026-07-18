import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { PropertySetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSFunctionObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { PromiseReactionRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/PromiseReactionRecord.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PromiseReactionJobNode extends JavaScriptBaseNode {
    static create(paramcontext: JSContext): PromiseReactionJobNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    // private context: JSContext;
    // private setArgument: PropertySetNode;
    // private setReaction: PropertySetNode;
    execute(reaction: PromiseReactionRecord, argument: Object): JSFunctionObject;
}