import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { TypedArray } from '../../../../../../com/oracle/truffle/js/runtime/array/TypedArray.d.ts'
import type { PrototypeSupplier } from '../../../../../../com/oracle/truffle/js/runtime/builtins/PrototypeSupplier.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class TypedArrayFactory extends Enum<TypedArrayFactory> implements PrototypeSupplier {
    static BigInt64Array: TypedArrayFactory;
    static BigUint64Array: TypedArrayFactory;
    static Float16Array: TypedArrayFactory;
    static Float32Array: TypedArrayFactory;
    static Float64Array: TypedArrayFactory;
    static Int16Array: TypedArrayFactory;
    static Int32Array: TypedArrayFactory;
    static Int8Array: TypedArrayFactory;
    static NUMBER_OF_ELEMENT_TYPES: number;
    static Uint16Array: TypedArrayFactory;
    static Uint32Array: TypedArrayFactory;
    static Uint8Array: TypedArrayFactory;
    static Uint8ClampedArray: TypedArrayFactory;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): TypedArrayFactory;
    static values(): (Object | null)[];
    private constructor(bytesPerElement: number)
    // private arrayType: TypedArray;
    // private arrayTypeAutoLength: TypedArray;
    // private arrayTypeWithOffset: TypedArray;
    // private arrayTypeWithOffsetAutoLength: TypedArray;
    readonly bytesPerElement: number;
    readonly bytesPerElementShift: number;
    // private directArrayType: TypedArray;
    // private directArrayTypeAutoLength: TypedArray;
    // private directArrayTypeWithOffset: TypedArray;
    // private directArrayTypeWithOffsetAutoLength: TypedArray;
    // private interopArrayType: TypedArray;
    // private interopArrayTypeAutoLength: TypedArray;
    // private interopArrayTypeWithOffset: TypedArray;
    // private interopArrayTypeWithOffsetAutoLength: TypedArray;
    // private sharedArrayType: TypedArray;
    // private sharedArrayTypeAutoLength: TypedArray;
    // private sharedArrayTypeWithOffset: TypedArray;
    // private sharedArrayTypeWithOffsetAutoLength: TypedArray;
    createArrayType(bufferType: number, offset: boolean, fixedLength: boolean): TypedArray;
    getBytesPerElement(): number;
    getBytesPerElementShift(): number;
    getFactoryIndex(): number;
    getIntrinsicDefaultProto(realm: JSRealm): JSDynamicObject;
    getName(): TruffleString;
    instantiateArrayType(bufferType: number, offset: boolean, fixedLength: boolean): TypedArray;
    isBigInt(): boolean;
    isFloat(): boolean;
    name(): "Int8Array" | "Uint8Array" | "Uint8ClampedArray" | "Int16Array" | "Uint16Array" | "Int32Array" | "Uint32Array" | "Float32Array" | "Float64Array" | "BigInt64Array" | "BigUint64Array" | "Float16Array";
}