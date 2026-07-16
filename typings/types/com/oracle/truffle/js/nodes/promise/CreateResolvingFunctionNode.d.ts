import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { PropertySetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode.d.ts'
import type { CreateResolvingFunctionNode$AlreadyResolved } from '../../../../../../com/oracle/truffle/js/nodes/promise/CreateResolvingFunctionNode$AlreadyResolved.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSFunctionObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Pair } from '../../../../../../com/oracle/truffle/js/runtime/util/Pair.d.ts'
export class CreateResolvingFunctionNode extends JavaScriptBaseNode {
    static create(paramcontext: JSContext): CreateResolvingFunctionNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    // private context: JSContext;
    // private setAlreadyResolvedNode: PropertySetNode;
    // private setPromiseNode: PropertySetNode;
    // private createPromiseRejectFunction(promise: JSDynamicObject, alreadyResolved: CreateResolvingFunctionNode$AlreadyResolved): JSFunctionObject;
    // private createPromiseResolveFunction(promise: JSDynamicObject, alreadyResolved: CreateResolvingFunctionNode$AlreadyResolved): JSFunctionObject;
    execute(promise: JSDynamicObject): Pair<JSDynamicObject, JSDynamicObject>;
}