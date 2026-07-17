import type { OutputStream } from '../../../../../../java/io/OutputStream.d.ts'
import type { CipherOutputStream } from '../../../../../../javax/crypto/CipherOutputStream.d.ts'
import type { AES256Options } from '../../../../../../org/apache/commons/compress/archivers/sevenz/AES256Options.d.ts'
export class AES256SHA256Decoder$AES256SHA256DecoderOutputStream extends OutputStream {
    static nullOutputStream(): OutputStream;
    private constructor(arg0: AES256Options, arg1: OutputStream)
    // private cipherBlockBuffer: number[];
    // private cipherBlockSize: number;
    // private cipherOutputStream: CipherOutputStream;
    // private count: number;
    close(): void;
    flush(): void;
    // private flushBuffer(): void;
    write(arg0: number[]): void;
    write(arg0: number[], arg1: number, arg2: number): void;
    write(arg0: number): void;
}