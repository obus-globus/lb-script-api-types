import type { DataType$Format } from '../../../../ai/djl/ndarray/types/DataType$Format.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Buffer } from '../../../../java/nio/Buffer.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class DataType extends Enum<DataType> {
    static BFLOAT16: DataType;
    static BOOLEAN: DataType;
    static COMPLEX64: DataType;
    static FLOAT16: DataType;
    static FLOAT32: DataType;
    static FLOAT64: DataType;
    static INT16: DataType;
    static INT32: DataType;
    static INT64: DataType;
    static INT8: DataType;
    static STRING: DataType;
    static UINT16: DataType;
    static UINT32: DataType;
    static UINT64: DataType;
    static UINT8: DataType;
    static UNKNOWN: DataType;
    static fromBuffer(paramarg0: Buffer): DataType;
    static fromNumpy(paramarg0: string): DataType;
    static fromSafetensors(paramarg0: string): DataType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): DataType;
    static values(): (Object | null)[];
    private constructor(arg2: DataType$Format, arg3: number)
    readonly format: DataType$Format;
    readonly numOfBytes: number;
    asDataType(arg0: ByteBuffer): Buffer;
    asNumpy(): string;
    asSafetensors(): string;
    getFormat(): DataType$Format;
    getNumOfBytes(): number;
    isBoolean(): boolean;
    isFloating(): boolean;
    isInteger(): boolean;
    toString(): string;
    name(): "FLOAT32" | "FLOAT64" | "FLOAT16" | "UINT8" | "INT32" | "INT8" | "INT64" | "BOOLEAN" | "COMPLEX64" | "UNKNOWN" | "STRING" | "BFLOAT16" | "UINT64" | "UINT32" | "UINT16" | "INT16";
}