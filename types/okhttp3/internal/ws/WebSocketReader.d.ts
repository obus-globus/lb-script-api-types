import type { Closeable } from '../../../java/io/Closeable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MessageInflater } from '../../../okhttp3/internal/ws/MessageInflater.d.ts'
import type { WebSocketReader$FrameCallback } from '../../../okhttp3/internal/ws/WebSocketReader$FrameCallback.d.ts'
import type { Buffer } from '../../../okio/Buffer.d.ts'
import type { Buffer$UnsafeCursor } from '../../../okio/Buffer$UnsafeCursor.d.ts'
import type { BufferedSource } from '../../../okio/BufferedSource.d.ts'
export class WebSocketReader extends Object implements Closeable {
    constructor(isClient: boolean, source: BufferedSource, frameCallback: WebSocketReader$FrameCallback, perMessageDeflate: boolean, noContextTakeover: boolean)
    // private closed: boolean;
    // private controlFrameBuffer: Buffer;
    // private frameCallback: WebSocketReader$FrameCallback;
    // private frameLength: number;
    // private isClient: boolean;
    // private isControlFrame: boolean;
    // private isFinalFrame: boolean;
    // private maskCursor: Buffer$UnsafeCursor | null;
    // private maskKey: number[] | null;
    // private messageFrameBuffer: Buffer;
    // private messageInflater: MessageInflater | null;
    // private noContextTakeover: boolean;
    // private opcode: number;
    // private perMessageDeflate: boolean;
    // private readingCompressedMessage: boolean;
    readonly source: BufferedSource;
    close(): void;
    processNextFrame(): void;
    // private readControlFrame(): void;
    // private readHeader(): void;
    // private readMessage(): void;
    // private readMessageFrame(): void;
    // private readUntilNonControlFrame(): void;
}