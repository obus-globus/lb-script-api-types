import type { ByteToMessageDecoder$Cumulator } from '../../../../../io/netty/handler/codec/ByteToMessageDecoder$Cumulator.d.ts'
import type { SnappyFrameDecoder } from '../../../../../io/netty/handler/codec/compression/SnappyFrameDecoder.d.ts'
export class SnappyFramedDecoder extends SnappyFrameDecoder {
    static COMPOSITE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    static MERGE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    constructor()
}