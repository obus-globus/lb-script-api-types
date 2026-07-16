import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { InitFunctionNode } from '../../../../../../com/oracle/truffle/js/nodes/function/InitFunctionNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSFunctionData } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionData.d.ts'
import type { JSFunctionFactory } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionFactory.d.ts'
import type { JSFunctionObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class DefineMethodNode$FunctionCreateNode extends JavaScriptBaseNode {
    static create(paramcontext: JSContext, paramfunctionData: JSFunctionData, paramblockScopeSlot: number): DefineMethodNode$FunctionCreateNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext, functionData: JSFunctionData, blockScopeSlot: number)
    // private blockScopeSlot: number;
    // private functionData: JSFunctionData;
    // private initFunctionNode: InitFunctionNode;
    doCached(frame: VirtualFrame, prototype: JSDynamicObject, cachedPrototype: JSDynamicObject, factory: JSFunctionFactory): JSFunctionObject;
    doMultiContext(frame: VirtualFrame, prototype: JSObject, factory: JSFunctionFactory): JSFunctionObject;
    doNonObject(prototype: Object): JSFunctionObject;
    doUncached(frame: VirtualFrame, prototype: JSObject): JSFunctionObject;
    executeWithPrototype(frame: VirtualFrame, prototype: Object): JSFunctionObject;
    getContext(): JSContext;
    makeFactory(prototype: JSDynamicObject): JSFunctionFactory;
    makeFactoryMultiContext(): JSFunctionFactory;
    makeFunction(frame: VirtualFrame, factory: JSFunctionFactory, prototype: JSDynamicObject): JSFunctionObject;
}