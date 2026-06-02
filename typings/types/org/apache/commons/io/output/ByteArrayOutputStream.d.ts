import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { AbstractByteArrayOutputStream } from '../../../../../org/apache/commons/io/output/AbstractByteArrayOutputStream.d.ts'
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
    write(arg0: InputStream): number;
    write(arg0: number[], arg1: number, arg2: number): void;
    write(arg0: number): void;
    writeTo(arg0: OutputStream): void;
}