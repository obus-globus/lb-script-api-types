import type { Closeable } from '../../../java/io/Closeable.d.ts'
import type { Checksum } from '../../../java/util/zip/Checksum.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class StreamingXXHash32 extends Object implements Closeable {
    constructor(arg0: number)
    // private seed: number;
    asChecksum(): Checksum;
    close(): void;
    getValue(): number;
    reset(): void;
    toString(): string;
    update(arg0: number[], arg1: number, arg2: number): void;
}