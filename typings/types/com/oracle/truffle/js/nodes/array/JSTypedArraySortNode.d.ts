import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { TypedArray } from '../../../../../../com/oracle/truffle/js/runtime/array/TypedArray.d.ts'
import type { TypedArray$TypedBigIntArray } from '../../../../../../com/oracle/truffle/js/runtime/array/TypedArray$TypedBigIntArray.d.ts'
import type { TypedArray$TypedFloatArray } from '../../../../../../com/oracle/truffle/js/runtime/array/TypedArray$TypedFloatArray.d.ts'
import type { TypedArray$TypedIntArray } from '../../../../../../com/oracle/truffle/js/runtime/array/TypedArray$TypedIntArray.d.ts'
import type { JSTypedArrayObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSTypedArrayObject.d.ts'
import type { Comparator } from '../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSTypedArraySortNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    doCached(fromArray: JSTypedArrayObject, toArray: JSTypedArrayObject, length: number, comparator: (param0: Object) => boolean, fromType: TypedArray, toType: TypedArray, comparatorIsNull: boolean, cachedFromType: TypedArray, cachedToType: TypedArray, cachedComparatorIsNull: boolean, interop: InteropLibrary): void;
    doUncached(fromArray: JSTypedArrayObject, toArray: JSTypedArrayObject, length: number, comparator: (param0: Object) => boolean, fromType: TypedArray, toType: TypedArray, comparatorIsNull: boolean, interop: InteropLibrary): void;
    execute(fromArray: JSTypedArrayObject, toArray: JSTypedArrayObject, length: number, comparator: (param0: Object) => boolean): void;
    // private isTypedArrayOutOfBounds(toArray: JSTypedArrayObject): boolean;
    // private sortBigInt64Array(fromArray: JSTypedArrayObject, toArray: JSTypedArrayObject, length: number, comparator: (param0: Object) => boolean, fromType: TypedArray$TypedBigIntArray, toType: TypedArray$TypedBigIntArray, interop: InteropLibrary): void;
    // private sortFloatArray(fromArray: JSTypedArrayObject, toArray: JSTypedArrayObject, length: number, comparator: (param0: Object) => boolean, fromType: TypedArray$TypedFloatArray, toType: TypedArray$TypedFloatArray, interop: InteropLibrary): void;
    // private sortIntArray(fromArray: JSTypedArrayObject, toArray: JSTypedArrayObject, length: number, comparator: (param0: Object) => boolean, fromType: TypedArray$TypedIntArray, toType: TypedArray$TypedIntArray, interop: InteropLibrary): void;
}