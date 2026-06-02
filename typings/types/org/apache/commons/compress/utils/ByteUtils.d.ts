import type { DataInput } from '../../../../../java/io/DataInput.d.ts'
import type { DataOutput } from '../../../../../java/io/DataOutput.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ByteUtils$ByteConsumer } from '../../../../../org/apache/commons/compress/utils/ByteUtils$ByteConsumer.d.ts'
import type { ByteUtils$ByteSupplier } from '../../../../../org/apache/commons/compress/utils/ByteUtils$ByteSupplier.d.ts'
export class ByteUtils extends Object {
    static EMPTY_BYTE_ARRAY: number[];
    static fromLittleEndian(paramarg0: number[]): number;
    static fromLittleEndian(paramarg0: number[], paramarg1: number, paramarg2: number): number;
    static fromLittleEndian(paramarg0: DataInput, paramarg1: number): number;
    static fromLittleEndian(paramarg0: InputStream, paramarg1: number): number;
    static fromLittleEndian(paramarg0: ByteUtils$ByteSupplier, paramarg1: number): number;
    static toLittleEndian(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: number): void;
    static toLittleEndian(paramarg0: DataOutput, paramarg1: number, paramarg2: number): void;
    static toLittleEndian(paramarg0: OutputStream, paramarg1: number, paramarg2: number): void;
    static toLittleEndian(paramarg0: ByteUtils$ByteConsumer, paramarg1: number, paramarg2: number): void;
    private constructor()
}