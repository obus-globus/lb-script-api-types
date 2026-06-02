import type { Object } from '../java/lang/Object.d.ts'
import type { Buffer } from '../okio/Buffer.d.ts'
import type { Source } from '../okio/Source.d.ts'
import type { Timeout } from '../okio/Timeout.d.ts'
export class MultipartReader$PartSource extends Object implements Source {
    constructor(null_: MultipartReader$PartSource)
    // private timeout: Timeout;
    close(): void;
    read(sink: Buffer, byteCount: number): number;
    timeout(): Timeout;
}