import type { ZipUtils$ValidationInputStream$End } from '../../../ai/djl/util/ZipUtils$ValidationInputStream$End.d.ts'
import type { FilterInputStream } from '../../../java/io/FilterInputStream.d.ts'
import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
export class ZipUtils$ValidationInputStream extends FilterInputStream {
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream)
    // private buf: number[];
    // private filePosition: number;
    // private seenCen: boolean;
    // private findEND(arg0: ByteBuffer): ZipUtils$ValidationInputStream$End;
    // private initCEN(arg0: number[]): string[];
    read(): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    validate(arg0: string[]): void;
}