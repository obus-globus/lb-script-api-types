import type { IOException } from '../../../../../../java/io/IOException.d.ts'
import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { DeltaDecoder } from '../../../../../../org/graalvm/shadowed/org/tukaani/xz/delta/DeltaDecoder.d.ts'
export class DeltaInputStream extends InputStream {
    static DISTANCE_MAX: number;
    static DISTANCE_MIN: number;
    static nullInputStream(): InputStream;
    constructor(in_: InputStream, distance: number)
    // private delta: DeltaDecoder;
    // private exception: IOException;
    // private in: InputStream;
    // private tempBuf: number[];
    available(): number;
    close(): void;
    read(): number;
    read(buf: number[], off: number, len: number): number;
}