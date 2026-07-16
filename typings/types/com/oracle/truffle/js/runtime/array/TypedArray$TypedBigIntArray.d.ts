import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { BigInt } from '../../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { TypedArray } from '../../../../../../com/oracle/truffle/js/runtime/array/TypedArray.d.ts'
import type { TypedArrayFactory } from '../../../../../../com/oracle/truffle/js/runtime/array/TypedArrayFactory.d.ts'
import type { AbstractConstantArray } from '../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractConstantArray.d.ts'
import type { JSArrayBufferObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayBufferObject.d.ts'
import type { JSTypedArrayObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSTypedArrayObject.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class TypedArray$TypedBigIntArray extends TypedArray {
    static BUFFER_TYPE_ARRAY: number;
    static BUFFER_TYPE_DIRECT: number;
    static BUFFER_TYPE_INTEROP: number;
    static BUFFER_TYPE_SHARED: number;
    static EMPTY_OBJECT_ARRAY: Object[];
    static createConstantArray(paramelements: Object[]): AbstractConstantArray;
    static createConstantEmptyArray(): AbstractConstantArray;
    static factories(): TypedArrayFactory[];
    static factories(paramcontext: JSContext): TypedArrayFactory[];
    static getBufferFromTypedArray(paramtypedArray: JSDynamicObject): JSArrayBufferObject;
    static makeRangeList(paramrangeStart: number, paramrangeEnd: number): Object[];
    static valueIsByte(paramvalue: number): boolean;
    constructor(factory: TypedArrayFactory, offset: boolean, fixedLength: boolean, bufferType: number)
    compareExchangeBigInt(typedArray: JSTypedArrayObject, index: number, expectedValue: BigInt, newValue: BigInt): BigInt;
    compareExchangeLong(typedArray: JSTypedArrayObject, index: number, expectedValue: number, newValue: number): number;
    getBigInt(object: JSDynamicObject, index: number, interop: InteropLibrary): BigInt;
    getBigIntImpl(buffer: JSArrayBufferObject, offset: number, index: number, interop: InteropLibrary): BigInt;
    getBufferElement(buffer: JSArrayBufferObject, index: number, littleEndian: boolean, interop: InteropLibrary): Object;
    getBufferElementLongImpl(buffer: JSArrayBufferObject, index: number, littleEndian: boolean, interop: InteropLibrary): number;
    getElement(object: JSDynamicObject, index: number): Object;
    getElementInBounds(object: JSDynamicObject, index: number): Object;
    getLong(object: JSDynamicObject, index: number, interop: InteropLibrary): number;
    getLongImpl(buffer: JSArrayBufferObject, offset: number, index: number, interop: InteropLibrary): number;
    setBigInt(object: JSDynamicObject, index: number, value: BigInt, interop: InteropLibrary): void;
    setBufferElement(buffer: JSArrayBufferObject, index: number, littleEndian: boolean, value: Object, interop: InteropLibrary): void;
    setBufferElementLongImpl(buffer: JSArrayBufferObject, index: number, littleEndian: boolean, value: number, interop: InteropLibrary): void;
    setElementImpl(object: JSDynamicObject, index: number, value: Object, strict: boolean): TypedArray$TypedBigIntArray;
    setLong(object: JSDynamicObject, index: number, value: number, interop: InteropLibrary): void;
    setLongImpl(buffer: JSArrayBufferObject, offset: number, index: number, value: number, interop: InteropLibrary): void;
}