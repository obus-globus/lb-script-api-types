import type { Object } from '../../../java/lang/Object.d.ts'
import type { Huffman$Node } from '../../../okhttp3/internal/http2/Huffman$Node.d.ts'
import type { BufferedSink } from '../../../okio/BufferedSink.d.ts'
import type { BufferedSource } from '../../../okio/BufferedSource.d.ts'
import type { ByteString } from '../../../okio/ByteString.d.ts'
export class Huffman extends Object {
    static INSTANCE: Huffman;
    // private CODES: number[];
    // private CODE_BIT_COUNTS: number[];
    // private root: Huffman$Node;
    // private addCode(symbol: number, code: number, codeBitCount: number): void;
    decode(source: BufferedSource, byteCount: number, sink: BufferedSink): void;
    encode(source: ByteString, sink: BufferedSink): void;
    encodedLength(bytes: ByteString): number;
}