import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { HpackHuffmanEncoder$EncodeProcessor } from '../../../../../io/netty/handler/codec/http2/HpackHuffmanEncoder$EncodeProcessor.d.ts'
import type { HpackHuffmanEncoder$EncodedLengthProcessor } from '../../../../../io/netty/handler/codec/http2/HpackHuffmanEncoder$EncodedLengthProcessor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class HpackHuffmanEncoder extends Object {
    constructor()
    // private codes: number[];
    // private encodeProcessor: HpackHuffmanEncoder$EncodeProcessor;
    // private encodedLengthProcessor: HpackHuffmanEncoder$EncodedLengthProcessor;
    // private lengths: number[];
    encode(arg0: ByteBuf, arg1: CharSequence): void;
    // private encodeSlowPath(arg0: ByteBuf, arg1: CharSequence): void;
    getEncodedLength(arg0: CharSequence): number;
    // private getEncodedLengthSlowPath(arg0: CharSequence): number;
}