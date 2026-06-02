import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { ReadElementNode$AbstractTypedArrayReadElementCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ReadElementNode$AbstractTypedArrayReadElementCacheNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { TypedArray } from '../../../../../../com/oracle/truffle/js/runtime/array/TypedArray.d.ts'
import type { TypedArray$TypedFloatArray } from '../../../../../../com/oracle/truffle/js/runtime/array/TypedArray$TypedFloatArray.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class ReadElementNode$TypedFloatArrayReadElementCacheNode extends ReadElementNode$AbstractTypedArrayReadElementCacheNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(arrayType: TypedArray)
    doTypedFloatArray(target: JSDynamicObject, typedArray: TypedArray$TypedFloatArray, index: number, receiver: Object, defaultValue: Object, context: JSContext, inBounds: InlinedConditionProfile): Object;
    doTypedFloatArrayDouble(target: JSDynamicObject, typedArray: TypedArray$TypedFloatArray, index: number, receiver: Object, defaultValue: Object, context: JSContext, inBounds: InlinedConditionProfile): number;
}