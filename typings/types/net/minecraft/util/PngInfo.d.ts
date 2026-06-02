import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class PngInfo extends Record {
    static fromBytes(parambytes: number[]): PngInfo;
    static fromStream(paraminputStream: InputStream): PngInfo;
    static validateHeader(parambuffer: ByteBuffer): void;
    // private height: number;
    // private width: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    height(): number;
    toString(): string;
    width(): number;
}