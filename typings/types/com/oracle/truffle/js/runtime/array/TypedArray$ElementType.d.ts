import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class TypedArray$ElementType extends Enum<TypedArray$ElementType> {
    static BigInt64: TypedArray$ElementType;
    static BigUint64: TypedArray$ElementType;
    static Float16: TypedArray$ElementType;
    static Float32: TypedArray$ElementType;
    static Float64: TypedArray$ElementType;
    static Int16: TypedArray$ElementType;
    static Int32: TypedArray$ElementType;
    static Int8: TypedArray$ElementType;
    static Uint16: TypedArray$ElementType;
    static Uint32: TypedArray$ElementType;
    static Uint8: TypedArray$ElementType;
    static Uint8Clamped: TypedArray$ElementType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): TypedArray$ElementType;
    static values(): TypedArray$ElementType[];
    private constructor()
    name(): "Int8" | "Uint8" | "Uint8Clamped" | "Int16" | "Uint16" | "Int32" | "Uint32" | "BigInt64" | "BigUint64" | "Float16" | "Float32" | "Float64";
}