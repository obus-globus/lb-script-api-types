import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { Charset } from '../../../../../java/nio/charset/Charset.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { AbstractByteArrayOutputStream } from '../../../../../org/apache/commons/io/output/AbstractByteArrayOutputStream.d.ts'
import type { AbstractByteArrayOutputStream$InputStreamConstructor } from '../../../../../org/apache/commons/io/output/AbstractByteArrayOutputStream$InputStreamConstructor.d.ts'
export class ByteArrayOutputStream extends AbstractByteArrayOutputStream<ByteArrayOutputStream> {
    static nullOutputStream(): OutputStream;
    static toBufferedInputStream(paramarg0: InputStream): InputStream;
    static toBufferedInputStream(paramarg0: InputStream, paramarg1: number): InputStream;
    constructor()
    constructor(arg0: number)
    reset(): void;
    size(): number;
    toByteArray(): number[];
    toInputStream(): InputStream;
    toInputStream(arg0: (param0: T, param1: number[], param2: number) => unknown): InputStream;
    write(arg0: InputStream): number;
    write(arg0: number[]): void;
    write(arg0: number[], arg1: number, arg2: number): void;
    write(arg0: CharSequence, arg1: Charset): ByteArrayOutputStream;
    write(arg0: number): void;
    writeTo(arg0: OutputStream): void;
}