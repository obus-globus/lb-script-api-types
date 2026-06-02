import type { InputStream } from '../../java/io/InputStream.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Buffer } from '../../kotlinx/io/Buffer.d.ts'
import type { RawSource } from '../../kotlinx/io/RawSource.d.ts'
export class InputStreamSource extends Object implements RawSource {
    constructor(input: InputStream)
    // private input: InputStream;
    close(): void;
    readAtMostTo(sink: Buffer, byteCount: number): number;
    toString(): string;
}