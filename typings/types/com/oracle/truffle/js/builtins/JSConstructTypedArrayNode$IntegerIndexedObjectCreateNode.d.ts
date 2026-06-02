import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { TypedArray } from '../../../../../com/oracle/truffle/js/runtime/array/TypedArray.d.ts'
import type { TypedArrayFactory } from '../../../../../com/oracle/truffle/js/runtime/array/TypedArrayFactory.d.ts'
import type { JSArrayBufferObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayBufferObject.d.ts'
import type { JSObjectFactory } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSObjectFactory.d.ts'
import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
export abstract class JSConstructTypedArrayNode$IntegerIndexedObjectCreateNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext, factory: TypedArrayFactory)
    // private context: JSContext;
    // private factory: TypedArrayFactory;
    doCachedProto(arrayBuffer: JSArrayBufferObject, typedArray: TypedArray, offset: number, length: number, proto: JSDynamicObject, cachedProto: JSDynamicObject, objectFactory: JSObjectFactory): JSDynamicObject;
    doDefaultProto(arrayBuffer: JSArrayBufferObject, typedArray: TypedArray, offset: number, length: number, proto: JSDynamicObject): JSDynamicObject;
    doMultiContext(arrayBuffer: JSArrayBufferObject, typedArray: TypedArray, offset: number, length: number, proto: JSDynamicObject): JSDynamicObject;
    doUncachedProto(arrayBuffer: JSArrayBufferObject, typedArray: TypedArray, offset: number, length: number, proto: JSDynamicObject): JSDynamicObject;
    execute(arrayBuffer: JSArrayBufferObject, typedArray: TypedArray, offset: number, length: number, proto: JSDynamicObject): JSDynamicObject;
    isDefaultPrototype(proto: JSDynamicObject): boolean;
    makeObjectFactory(prototype: JSDynamicObject): JSObjectFactory;
}