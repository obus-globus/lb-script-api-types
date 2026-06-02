import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSConstructTypedArrayNode$IntegerIndexedObjectCreateNode } from '../../../../../com/oracle/truffle/js/builtins/JSConstructTypedArrayNode$IntegerIndexedObjectCreateNode.d.ts'
import type { JSConstructTypedArrayNodeGen$IntegerIndexedObjectCreateNodeGen$CachedProtoData } from '../../../../../com/oracle/truffle/js/builtins/JSConstructTypedArrayNodeGen$IntegerIndexedObjectCreateNodeGen$CachedProtoData.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { TypedArray } from '../../../../../com/oracle/truffle/js/runtime/array/TypedArray.d.ts'
import type { TypedArrayFactory } from '../../../../../com/oracle/truffle/js/runtime/array/TypedArrayFactory.d.ts'
import type { JSArrayBufferObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayBufferObject.d.ts'
import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
export class JSConstructTypedArrayNodeGen$IntegerIndexedObjectCreateNodeGen extends JSConstructTypedArrayNode$IntegerIndexedObjectCreateNode {
    static create(paramcontext: JSContext, paramfactory: TypedArrayFactory): JSConstructTypedArrayNode$IntegerIndexedObjectCreateNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext, factory: TypedArrayFactory)
    // private cachedProto_cache: JSConstructTypedArrayNodeGen$IntegerIndexedObjectCreateNodeGen$CachedProtoData;
    // private state_0_: number;
    execute(arg0Value: JSArrayBufferObject, arg1Value: TypedArray, arg2Value: number, arg3Value: number, arg4Value: JSDynamicObject): JSDynamicObject;
    // private executeAndSpecialize(arg0Value: JSArrayBufferObject, arg1Value: TypedArray, arg2Value: number, arg3Value: number, arg4Value: JSDynamicObject): JSDynamicObject;
}