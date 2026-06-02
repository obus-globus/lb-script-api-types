import type { FilterInputStream } from '../../java/io/FilterInputStream.d.ts'
import type { InputStream } from '../../java/io/InputStream.d.ts'
import type { Cipher } from '../../javax/crypto/Cipher.d.ts'
export class CipherInputStream extends FilterInputStream {
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream)
    constructor(arg0: InputStream, arg1: Cipher)
    // private cipher: Cipher;
    // private closed: boolean;
    // private done: boolean;
    // private ibuffer: number[];
    // private input: InputStream;
    // private obuffer: number[];
    // private ofinish: number;
    // private ostart: number;
    available(): number;
    close(): void;
    // private ensureCapacity(arg0: number): void;
    // private getMoreData(): number;
    markSupported(): boolean;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    skip(arg0: number): number;
}