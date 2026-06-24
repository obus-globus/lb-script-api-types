import type { IOException } from '../../../java/io/IOException.d.ts'
import type { Exchange } from '../../../okhttp3/internal/connection/Exchange.d.ts'
import type { Buffer } from '../../../okio/Buffer.d.ts'
import type { ForwardingSource } from '../../../okio/ForwardingSource.d.ts'
import type { Source } from '../../../okio/Source.d.ts'
export class Exchange$ResponseBodySource extends ForwardingSource {
    constructor(null_: Exchange, delegate: Source, contentLength: number, isSocket: boolean)
    // private bytesReceived: number;
    // private closed: boolean;
    // private completed: boolean;
    // private contentLength: number;
    // private invokeStartEvent: boolean;
    // private isSocket: boolean;
    close(): void;
    complete(e: IOException | null): IOException | null;
    read(sink: Buffer, byteCount: number): number;
}