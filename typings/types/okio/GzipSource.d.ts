import type { CRC32 } from '../java/util/zip/CRC32.d.ts'
import type { Inflater } from '../java/util/zip/Inflater.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Buffer } from '../okio/Buffer.d.ts'
import type { InflaterSource } from '../okio/InflaterSource.d.ts'
import type { RealBufferedSource } from '../okio/RealBufferedSource.d.ts'
import type { Source } from '../okio/Source.d.ts'
import type { Timeout } from '../okio/Timeout.d.ts'
export class GzipSource extends Object implements Source {
    constructor(source: Source)
    // private crc: CRC32;
    // private inflater: Inflater;
    // private inflaterSource: InflaterSource;
    // private section: number;
    // private source: RealBufferedSource;
    // private checkEqual(name: string, expected: number, actual: number): void;
    close(): void;
    // private consumeHeader(): void;
    // private consumeTrailer(): void;
    read(sink: Buffer, byteCount: number): number;
    timeout(): Timeout;
    // private updateCrc(buffer: Buffer, offset: number, byteCount: number): void;
}