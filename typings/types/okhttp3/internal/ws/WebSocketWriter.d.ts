import type { Closeable } from '../../../java/io/Closeable.d.ts'
import type { Random } from '../../../java/util/Random.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MessageDeflater } from '../../../okhttp3/internal/ws/MessageDeflater.d.ts'
import type { Buffer } from '../../../okio/Buffer.d.ts'
import type { Buffer$UnsafeCursor } from '../../../okio/Buffer$UnsafeCursor.d.ts'
import type { BufferedSink } from '../../../okio/BufferedSink.d.ts'
import type { ByteString } from '../../../okio/ByteString.d.ts'
export class WebSocketWriter extends Object implements Closeable {
    constructor(isClient: boolean, sink: BufferedSink, random: Random, perMessageDeflate: boolean, noContextTakeover: boolean, minimumDeflateSize: number)
    // private isClient: boolean;
    // private maskCursor: Buffer$UnsafeCursor | null;
    // private maskKey: number[] | null;
    // private messageBuffer: Buffer;
    // private messageDeflater: MessageDeflater | null;
    // private minimumDeflateSize: number;
    // private noContextTakeover: boolean;
    // private perMessageDeflate: boolean;
    readonly random: Random;
    readonly sink: BufferedSink;
    // private sinkBuffer: Buffer;
    // private writerClosed: boolean;
    close(): void;
    writeClose(code: number, reason: ByteString | null): void;
    // private writeControlFrame(opcode: number, payload: ByteString): void;
    writeMessageFrame(formatOpcode: number, data: ByteString): void;
    writePing(payload: ByteString): void;
    writePong(payload: ByteString): void;
}