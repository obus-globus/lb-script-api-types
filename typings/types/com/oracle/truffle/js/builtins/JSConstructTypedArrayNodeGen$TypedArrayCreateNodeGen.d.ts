import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSConstructTypedArrayNode$TypedArrayCreateNode } from '../../../../../com/oracle/truffle/js/builtins/JSConstructTypedArrayNode$TypedArrayCreateNode.d.ts'
import type { JSConstructTypedArrayNodeGen$TypedArrayCreateNodeGen$CachedProtoData } from '../../../../../com/oracle/truffle/js/builtins/JSConstructTypedArrayNodeGen$TypedArrayCreateNodeGen$CachedProtoData.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { TypedArray } from '../../../../../com/oracle/truffle/js/runtime/array/TypedArray.d.ts'
import type { TypedArrayFactory } from '../../../../../com/oracle/truffle/js/runtime/array/TypedArrayFactory.d.ts'
import type { JSArrayBufferObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayBufferObject.d.ts'
import type { JSTypedArrayObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSTypedArrayObject.d.ts'
import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
export class JSConstructTypedArrayNodeGen$TypedArrayCreateNodeGen extends JSConstructTypedArrayNode$TypedArrayCreateNode {
    static create(paramcontext: JSContext, paramfactory: TypedArrayFactory): JSConstructTypedArrayNode$TypedArrayCreateNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext, factory: TypedArrayFactory)
    // private cachedProto_cache: JSConstructTypedArrayNodeGen$TypedArrayCreateNodeGen$CachedProtoData;
    // private state_0_: number;
    execute(arg0Value: JSArrayBufferObject, arg1Value: TypedArray, arg2Value: number, arg3Value: number, arg4Value: JSDynamicObject): JSTypedArrayObject;
    // private executeAndSpecialize(arg0Value: JSArrayBufferObject, arg1Value: TypedArray, arg2Value: number, arg3Value: number, arg4Value: JSDynamicObject): JSTypedArrayObject;
}