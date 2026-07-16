import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { ScriptArray } from '../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray.d.ts'
import type { ScriptArray$SetLengthProfileAccess } from '../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray$SetLengthProfileAccess.d.ts'
import type { TypedArray$ElementType } from '../../../../../../com/oracle/truffle/js/runtime/array/TypedArray$ElementType.d.ts'
import type { TypedArrayFactory } from '../../../../../../com/oracle/truffle/js/runtime/array/TypedArrayFactory.d.ts'
import type { AbstractConstantArray } from '../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractConstantArray.d.ts'
import type { JSArrayBufferObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayBufferObject.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class TypedArray extends ScriptArray {
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
    readonly bufferType: number;
    // private bytesPerElement: number;
    // private bytesPerElementShift: number;
    readonly factory: TypedArrayFactory;
    // private fixedLength: boolean;
    readonly name: TruffleString;
    // private offset: boolean;
    addRangeImpl(object: JSDynamicObject, atOffset: number, size: number): ScriptArray;
    bytesPerElement(): number;
    bytesPerElementShift(): number;
    deleteElementImpl(object: JSDynamicObject, index: number, strict: boolean): ScriptArray;
    firstElementIndex(object: JSDynamicObject): number;
    freeze(): ScriptArray;
    getBufferElement(buffer: JSArrayBufferObject, index: number, littleEndian: boolean, interop: InteropLibrary): Object;
    getBufferType(): number;
    getElementType(): TypedArray$ElementType;
    getFactory(): TypedArrayFactory;
    getName(): TruffleString;
    getOffset(object: JSDynamicObject): number;
    hasElement(object: JSDynamicObject, index: number): boolean;
    hasHoles(object: JSDynamicObject): boolean;
    hasOffset(): boolean;
    isArray(): boolean;
    isDirect(): boolean;
    isFrozen(): boolean;
    isHolesType(): boolean;
    isInterop(): boolean;
    isLengthNotWritable(): boolean;
    isSealed(): boolean;
    lastElementIndex(object: JSDynamicObject): number;
    length(object: JSDynamicObject): number;
    lengthInt(object: JSDynamicObject): number;
    nextElementIndex(object: JSDynamicObject, index: number): number;
    preventExtensions(): ScriptArray;
    previousElementIndex(object: JSDynamicObject, index: number): number;
    removeRangeImpl(object: JSDynamicObject, start: number, end: number): ScriptArray;
    seal(): ScriptArray;
    setBufferElement(buffer: JSArrayBufferObject, index: number, littleEndian: boolean, value: Object, interop: InteropLibrary): void;
    setLengthImpl(object: JSDynamicObject, len: number, node: Node, profile: ScriptArray$SetLengthProfileAccess): TypedArray;
    setLengthNotWritable(): ScriptArray;
}