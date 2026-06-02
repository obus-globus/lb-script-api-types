import type { Object } from '../../java/lang/Object.d.ts'
import type { Buffer } from '../../kotlinx/io/Buffer.d.ts'
import type { RawSink } from '../../kotlinx/io/RawSink.d.ts'
export class DiscardingSink extends Object implements RawSink {
    constructor()
    close(): void;
    flush(): void;
    write(source: Buffer, byteCount: number): void;
}