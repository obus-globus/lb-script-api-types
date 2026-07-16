import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { PropertySetNode } from '../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSFunctionObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { IteratorRecord } from '../../../../../com/oracle/truffle/js/runtime/objects/IteratorRecord.d.ts'
import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
export class AsyncIteratorHelperPrototypeBuiltins$CreateAsyncIteratorHelperNode extends JavaScriptBaseNode {
    static create(paramcontext: JSContext): AsyncIteratorHelperPrototypeBuiltins$CreateAsyncIteratorHelperNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    // private context: JSContext;
    // private setGeneratorResumptionTargetNode: PropertySetNode;
    // private setIteratedNode: PropertySetNode;
    // private setThisNode: PropertySetNode;
    execute(iterated: IteratorRecord, start: JSFunctionObject): JSDynamicObject;
}