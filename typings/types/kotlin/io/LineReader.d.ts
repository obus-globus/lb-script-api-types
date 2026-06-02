import type { InputStream } from '../../java/io/InputStream.d.ts'
import type { StringBuilder } from '../../java/lang/StringBuilder.d.ts'
import type { ByteBuffer } from '../../java/nio/ByteBuffer.d.ts'
import type { CharBuffer } from '../../java/nio/CharBuffer.d.ts'
import type { Charset } from '../../java/nio/charset/Charset.d.ts'
import type { CharsetDecoder } from '../../java/nio/charset/CharsetDecoder.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class LineReader extends Object {
    static INSTANCE: LineReader;
    // private BUFFER_SIZE: number;
    // private byteBuf: ByteBuffer;
    // private bytes: number[];
    // private charBuf: CharBuffer;
    // private chars: string[];
    // private decoder: CharsetDecoder;
    // private directEOL: boolean;
    // private sb: StringBuilder;
    // private compactBytes(): number;
    // private decode(endOfInput: boolean): number;
    // private decodeEndOfInput(nBytes: number, nChars: number): number;
    readLine(inputStream: InputStream, charset: Charset): string | null;
    // private resetAll(): void;
    // private trimStringBuilder(): void;
    // private updateCharset(charset: Charset): void;
}