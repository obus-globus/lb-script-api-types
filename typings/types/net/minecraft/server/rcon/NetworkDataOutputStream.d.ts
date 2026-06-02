import type { ByteArrayOutputStream } from '../../../../java/io/ByteArrayOutputStream.d.ts'
import type { DataOutputStream } from '../../../../java/io/DataOutputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class NetworkDataOutputStream extends Object {
    constructor(size: number)
    // private dataOutputStream: DataOutputStream;
    // private outputStream: ByteArrayOutputStream;
    reset(): void;
    toByteArray(): number[];
    write(data: number): void;
    writeBytes(data: number[]): void;
    writeFloat(data: number): void;
    writeInt(data: number): void;
    writeShort(data: number): void;
    writeString(data: string): void;
}