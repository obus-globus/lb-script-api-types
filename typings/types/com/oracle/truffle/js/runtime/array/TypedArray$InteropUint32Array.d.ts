import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { TypedArray$AbstractUint32Array } from '../../../../../../com/oracle/truffle/js/runtime/array/TypedArray$AbstractUint32Array.d.ts'
import type { TypedArrayFactory } from '../../../../../../com/oracle/truffle/js/runtime/array/TypedArrayFactory.d.ts'
import type { AbstractConstantArray } from '../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractConstantArray.d.ts'
import type { JSArrayBufferObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayBufferObject.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TypedArray$InteropUint32Array extends TypedArray$AbstractUint32Array {
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
    constructor(factory: TypedArrayFactory, offset: boolean, fixedLength: boolean)
    getBufferElementIntImpl(buffer: JSArrayBufferObject, index: number, littleEndian: boolean, interop: InteropLibrary): number;
    getIntImpl(buffer: JSArrayBufferObject, offset: number, index: number, interop: InteropLibrary): number;
    setBufferElementIntImpl(buffer: JSArrayBufferObject, index: number, littleEndian: boolean, value: number, interop: InteropLibrary): void;
    setIntImpl(buffer: JSArrayBufferObject, offset: number, index: number, value: number, interop: InteropLibrary): void;
}