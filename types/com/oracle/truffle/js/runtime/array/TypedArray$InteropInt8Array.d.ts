import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { TypedArray$ElementType } from '../../../../../../com/oracle/truffle/js/runtime/array/TypedArray$ElementType.d.ts'
import type { TypedArray$InteropOneByteIntArray } from '../../../../../../com/oracle/truffle/js/runtime/array/TypedArray$InteropOneByteIntArray.d.ts'
import type { TypedArrayFactory } from '../../../../../../com/oracle/truffle/js/runtime/array/TypedArrayFactory.d.ts'
import type { AbstractConstantArray } from '../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractConstantArray.d.ts'
import type { JSArrayBufferObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayBufferObject.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TypedArray$InteropInt8Array extends TypedArray$InteropOneByteIntArray {
    static BUFFER_TYPE_ARRAY: number;
    static BUFFER_TYPE_DIRECT: number;
    static BUFFER_TYPE_INTEROP: number;
    static BUFFER_TYPE_SHARED: number;
    static EMPTY_OBJECT_ARRAY: (Object | null)[];
    static createConstantArray(paramelements: (Object | null)[]): AbstractConstantArray;
    static createConstantEmptyArray(): AbstractConstantArray;
    static factories(): (Object | null)[];
    static factories(paramcontext: JSContext): (Object | null)[];
    static getBufferFromTypedArray(paramtypedArray: JSDynamicObject): JSArrayBufferObject;
    static makeRangeList(paramrangeStart: number, paramrangeEnd: number): Object[];
    static valueIsByte(paramvalue: number): boolean;
    constructor(factory: TypedArrayFactory, offset: boolean, fixedLength: boolean)
    getElementType(): TypedArray$ElementType;
}