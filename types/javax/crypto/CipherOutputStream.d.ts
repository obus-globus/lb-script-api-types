import type { FilterOutputStream } from '../../java/io/FilterOutputStream.d.ts'
import type { OutputStream } from '../../java/io/OutputStream.d.ts'
import type { Cipher } from '../../javax/crypto/Cipher.d.ts'
export class CipherOutputStream extends FilterOutputStream {
    static nullOutputStream(): OutputStream;
    constructor(arg0: OutputStream)
    constructor(arg0: OutputStream, arg1: Cipher)
    // private cipher: Cipher;
    // private closed: boolean;
    // private ibuffer: number[];
    // private obuffer: number[];
    // private output: OutputStream;
    close(): void;
    // private ensureCapacity(arg0: number): void;
    flush(): void;
    write(arg0: number[]): void;
    write(arg0: number[], arg1: number, arg2: number): void;
    write(arg0: number): void;
}