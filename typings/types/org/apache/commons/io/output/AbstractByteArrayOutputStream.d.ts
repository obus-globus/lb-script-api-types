import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { Charset } from '../../../../../java/nio/charset/Charset.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { AbstractByteArrayOutputStream$InputStreamConstructor } from '../../../../../org/apache/commons/io/output/AbstractByteArrayOutputStream$InputStreamConstructor.d.ts'
export abstract class AbstractByteArrayOutputStream<T extends AbstractByteArrayOutputStream<T>> extends OutputStream {
    static nullOutputStream(): OutputStream;
    constructor()
    // private buffers: number[][];
    // private count: number;
    // private currentBuffer: number[];
    // private currentBufferIndex: number;
    // private filledBufferSum: number;
    // private reuseBuffers: boolean;
    asThis(): T;
    close(): void;
    needNewBuffer(arg0: number): void;
    reset(): void;
    resetImpl(): void;
    size(): number;
    toByteArray(): number[];
    toByteArrayImpl(): number[];
    toInputStream(): InputStream;
    toInputStream(arg0: (param0: T, param1: number[], param2: number) => unknown): InputStream;
    toString(): string;
    toString(arg0: Charset): string;
    toString(arg0: string): string;
    write(arg0: InputStream): number;
    write(arg0: number[]): void;
    write(arg0: number[], arg1: number, arg2: number): void;
    write(arg0: CharSequence, arg1: Charset): T;
    write(arg0: number): void;
    writeImpl(arg0: InputStream): number;
    writeImpl(arg0: number[], arg1: number, arg2: number): void;
    writeImpl(arg0: number): void;
    writeTo(arg0: OutputStream): void;
    writeToImpl(arg0: OutputStream): void;
}