import type { Object } from '../../../java/lang/Object.d.ts'
import type { FileOperator } from '../../../okhttp3/internal/cache2/FileOperator.d.ts'
import type { Buffer } from '../../../okio/Buffer.d.ts'
import type { Source } from '../../../okio/Source.d.ts'
import type { Timeout } from '../../../okio/Timeout.d.ts'
export class Relay$RelaySource extends Object implements Source {
    constructor(null_: Relay$RelaySource)
    // private fileOperator: FileOperator | null;
    // private sourcePos: number;
    // private timeout: Timeout;
    close(): void;
    read(sink: Buffer, byteCount: number): number;
    timeout(): Timeout;
}