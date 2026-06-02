import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { BigInt } from '../../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { TypedArray$ElementType } from '../../../../../../com/oracle/truffle/js/runtime/array/TypedArray$ElementType.d.ts'
import type { TypedArray$TypedBigIntArray } from '../../../../../../com/oracle/truffle/js/runtime/array/TypedArray$TypedBigIntArray.d.ts'
import type { TypedArrayFactory } from '../../../../../../com/oracle/truffle/js/runtime/array/TypedArrayFactory.d.ts'
import type { AbstractConstantArray } from '../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractConstantArray.d.ts'
import type { JSArrayBufferObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayBufferObject.d.ts'
import type { JSTypedArrayObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSTypedArrayObject.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TypedArray$DirectBigUint64Array extends TypedArray$TypedBigIntArray {
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
    constructor(factory: TypedArrayFactory, shared: boolean, offset: boolean, fixedLength: boolean)
    compareExchangeBigInt(typedArray: JSTypedArrayObject, index: number, expectedValue: BigInt, newValue: BigInt): BigInt;
    compareExchangeLong(typedArray: JSTypedArrayObject, index: number, expectedValue: number, newValue: number): number;
    getBigIntImpl(buffer: JSArrayBufferObject, offset: number, index: number, interop: InteropLibrary): BigInt;
    getBufferElement(buffer: JSArrayBufferObject, index: number, littleEndian: boolean, interop: InteropLibrary): Object;
    getBufferElementLongImpl(buffer: JSArrayBufferObject, index: number, littleEndian: boolean, interop: InteropLibrary): number;
    getElementType(): TypedArray$ElementType;
    getLongImpl(buffer: JSArrayBufferObject, offset: number, index: number, interop: InteropLibrary): number;
    setBufferElementLongImpl(buffer: JSArrayBufferObject, index: number, littleEndian: boolean, value: number, interop: InteropLibrary): void;
    setLongImpl(buffer: JSArrayBufferObject, offset: number, index: number, value: number, interop: InteropLibrary): void;
}