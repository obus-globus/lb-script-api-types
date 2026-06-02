import type { OutputStream } from '../../../java/io/OutputStream.d.ts'
import type { Base64 } from '../../../kotlin/io/encoding/Base64.d.ts'
export class EncodeOutputStream extends OutputStream {
    static nullOutputStream(): OutputStream;
    constructor(output: OutputStream, base64: Base64)
    // private base64: Base64;
    // private byteBuffer: number[];
    // private byteBufferLength: number;
    // private isClosed: boolean;
    // private lineLength: number;
    // private output: OutputStream;
    // private symbolBuffer: number[];
    // private checkOpen(): void;
    close(): void;
    // private copyIntoByteBuffer(source: number[], startIndex: number, endIndex: number): number;
    // private encodeByteBufferIntoOutput(): void;
    // private encodeIntoOutput(source: number[], startIndex: number, endIndex: number): number;
    flush(): void;
    write(source: number[], offset: number, length: number): void;
    write(b: number): void;
}