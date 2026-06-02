import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { TypedArray } from '../../../../../../com/oracle/truffle/js/runtime/array/TypedArray.d.ts'
import type { TypedArrayFactory } from '../../../../../../com/oracle/truffle/js/runtime/array/TypedArrayFactory.d.ts'
import type { AbstractConstantArray } from '../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractConstantArray.d.ts'
import type { JSArrayBufferObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayBufferObject.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class TypedArray$TypedFloatArray extends TypedArray {
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
    constructor(factory: TypedArrayFactory, offset: boolean, fixedLength: boolean, bufferType: number)
    getDouble(object: JSDynamicObject, index: number, interop: InteropLibrary): number;
    getDoubleImpl(buffer: JSArrayBufferObject, offset: number, index: number, interop: InteropLibrary): number;
    getElement(object: JSDynamicObject, index: number): Object;
    getElementInBounds(object: JSDynamicObject, index: number): Object;
    setDouble(object: JSDynamicObject, index: number, value: number, interop: InteropLibrary): void;
    setDoubleImpl(buffer: JSArrayBufferObject, offset: number, index: number, value: number, interop: InteropLibrary): void;
    setElementImpl(object: JSDynamicObject, index: number, value: Object, strict: boolean): TypedArray$TypedFloatArray;
}