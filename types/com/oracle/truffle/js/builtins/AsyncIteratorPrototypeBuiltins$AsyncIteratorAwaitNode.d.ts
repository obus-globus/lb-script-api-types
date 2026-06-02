import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { HiddenKey } from '../../../../../com/oracle/truffle/api/object/HiddenKey.d.ts'
import type { AsyncIteratorPrototypeBuiltins$AsyncIteratorAwaitNode$AsyncIteratorArgs } from '../../../../../com/oracle/truffle/js/builtins/AsyncIteratorPrototypeBuiltins$AsyncIteratorAwaitNode$AsyncIteratorArgs.d.ts'
import type { JavaScriptBaseNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { PropertyGetNode } from '../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { PropertySetNode } from '../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { NewPromiseCapabilityNode } from '../../../../../com/oracle/truffle/js/nodes/promise/NewPromiseCapabilityNode.d.ts'
import type { PerformPromiseThenNode } from '../../../../../com/oracle/truffle/js/nodes/promise/PerformPromiseThenNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSContext$BuiltinFunctionKey } from '../../../../../com/oracle/truffle/js/runtime/JSContext$BuiltinFunctionKey.d.ts'
import type { JSFunctionData } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionData.d.ts'
import type { JSFunctionObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { JSPromiseObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSPromiseObject.d.ts'
import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AsyncIteratorPrototypeBuiltins$AsyncIteratorAwaitNode<T extends AsyncIteratorPrototypeBuiltins$AsyncIteratorAwaitNode$AsyncIteratorArgs> extends JavaScriptBaseNode {
    static ARGS_ID: HiddenKey;
    static THIS_ID: HiddenKey;
    static create(paramcontext: JSContext, paramkey: JSContext$BuiltinFunctionKey, paramcreate: (param0: JSContext) => JSFunctionData, paramcloseOnAbrupt: boolean): AsyncIteratorPrototypeBuiltins$AsyncIteratorAwaitNode<Object>;
    static create(paramcontext: JSContext, paramthenKey: JSContext$BuiltinFunctionKey, paramthenCreate: (param0: JSContext) => JSFunctionData, paramcatchKey: JSContext$BuiltinFunctionKey, paramcatchCreate: (param0: JSContext) => JSFunctionData): AsyncIteratorPrototypeBuiltins$AsyncIteratorAwaitNode<Object>;
    static createGen(paramcontext: JSContext, paramkey: JSContext$BuiltinFunctionKey, paramcreate: (param0: JSContext) => JSFunctionData, paramcloseOnAbrupt: boolean): AsyncIteratorPrototypeBuiltins$AsyncIteratorAwaitNode<Object>;
    static createGeneratorYield(paramcontext: JSContext): AsyncIteratorPrototypeBuiltins$AsyncIteratorAwaitNode<Object>;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext, thenKey: JSContext$BuiltinFunctionKey, thenCreate: (param0: JSContext) => JSFunctionData, catchKey: JSContext$BuiltinFunctionKey, catchCreate: (param0: JSContext) => JSFunctionData)
    // private callNode: JSFunctionCallNode;
    // private catchCreate: (param0: JSContext) => JSFunctionData;
    // private catchKey: JSContext$BuiltinFunctionKey;
    // private context: JSContext;
    // private getConstructorNode: PropertyGetNode;
    // private getThisNode: PropertyGetNode;
    // private newPromiseCapabilityNode: NewPromiseCapabilityNode;
    // private performPromiseThenNode: PerformPromiseThenNode;
    // private setArgs: PropertySetNode;
    // private setThisNode: PropertySetNode;
    // private thenCreate: (param0: JSContext) => JSFunctionData;
    // private thenKey: JSContext$BuiltinFunctionKey;
    createFunction(args: T): JSFunctionObject;
    createFunctionWithArgs(args: AsyncIteratorPrototypeBuiltins$AsyncIteratorAwaitNode$AsyncIteratorArgs, functionData: JSFunctionData): JSFunctionObject;
    execute(frame: VirtualFrame, promiseOrValue: Object, args: T): JSDynamicObject;
    executeThis(promiseOrValue: Object, args: T, thisObj: Object): JSDynamicObject;
    // private promiseResolve(promiseOrValue: Object): JSPromiseObject;
}