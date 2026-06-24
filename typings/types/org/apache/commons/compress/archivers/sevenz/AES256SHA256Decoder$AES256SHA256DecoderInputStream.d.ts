import type { AES256SHA256Decoder$1 } from '../../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { CipherInputStream } from '../../../../../../javax/crypto/CipherInputStream.d.ts'
import type { Coder } from '../../../../../../org/apache/commons/compress/archivers/sevenz/Coder.d.ts'
export class AES256SHA256Decoder$AES256SHA256DecoderInputStream extends InputStream {
    static nullInputStream(): InputStream;
    private constructor(arg0: InputStream, arg1: Coder, arg2: string, arg3: number[])
    constructor(arg0: InputStream, arg1: Coder, arg2: string, arg3: number[], arg4: AES256SHA256Decoder$1)
    // private archiveName: string;
    // private cipherInputStream: CipherInputStream;
    // private coder: Coder;
    // private in: InputStream;
    // private isInitialized: boolean;
    // private passwordBytes: number[];
    close(): void;
    // private init(): CipherInputStream;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
}