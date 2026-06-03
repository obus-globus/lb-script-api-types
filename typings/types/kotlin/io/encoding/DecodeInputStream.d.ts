import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { Base64 } from '../../../kotlin/io/encoding/Base64.d.ts'
export class DecodeInputStream extends InputStream {
    static nullInputStream(): InputStream;
    constructor(input: InputStream, base64: Base64)
    // private base64: Base64;
    // private byteBuffer: number[];
    // private byteBufferEndIndex: number;
    // private /*not mapped: */ getByteBufferLength(): number;
    // private byteBufferStartIndex: number;
    // private input: InputStream;
    // private isClosed: boolean;
    // private isEOF: boolean;
    // private singleByteBuffer: number[];
    // private symbolBuffer: number[];
    close(): void;
    // private copyByteBufferInto(dst: number[], dstOffset: number, length: number): void;
    // private decodeSymbolBufferInto(dst: number[], dstOffset: number, dstEndIndex: number, symbolBufferLength: number): number;
    // private handlePaddingSymbol(symbolBufferLength: number): number;
    read(): number;
    read(arg0: number[]): number;
    read(destination: number[], offset: number, length: number): number;
    // private readNextSymbol(): number;
    // private resetByteBufferIfEmpty(): void;
    // private shiftByteBufferToStartIfNeeded(): void;
}