import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { Reader } from '../../../java/io/Reader.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { ReadableByteChannel } from '../../../java/nio/channels/ReadableByteChannel.d.ts'
import type { Charset } from '../../../java/nio/charset/Charset.d.ts'
import type { CharsetDecoder } from '../../../java/nio/charset/CharsetDecoder.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export class StreamDecoder extends Reader {
    static forDecoder(paramarg0: ReadableByteChannel, paramarg1: CharsetDecoder, paramarg2: number): StreamDecoder;
    static forInputStreamReader(paramarg0: InputStream, paramarg1: Object, paramarg2: string): StreamDecoder;
    static forInputStreamReader(paramarg0: InputStream, paramarg1: Object, paramarg2: Charset): StreamDecoder;
    static forInputStreamReader(paramarg0: InputStream, paramarg1: Object, paramarg2: CharsetDecoder): StreamDecoder;
    static nullReader(): Reader;
    static of(paramarg0: CharSequence): Reader;
    constructor(arg0: InputStream, arg1: Object, arg2: Charset)
    constructor(arg0: InputStream, arg1: Object, arg2: CharsetDecoder)
    constructor(arg0: ReadableByteChannel, arg1: CharsetDecoder, arg2: number)
    // private bb: ByteBuffer;
    // private ch: ReadableByteChannel;
    // private closed: boolean;
    // private cs: Charset;
    // private decoder: CharsetDecoder;
    // private haveLeftoverChar: boolean;
    // private in: InputStream;
    // private leftoverChar: string;
    close(): void;
    encodingName(): string;
    // private ensureOpen(): void;
    fillZeroToPosition(): void;
    getEncoding(): string;
    implClose(): void;
    implRead(arg0: string[], arg1: number, arg2: number): number;
    implReady(): boolean;
    // private inReady(): boolean;
    // private isOpen(): boolean;
    read(): number;
    read(arg0: string[], arg1: number, arg2: number): number;
    // private read0(): number;
    // private readBytes(): number;
    ready(): boolean;
}