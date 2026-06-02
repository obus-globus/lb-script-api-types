import type { SnappyFrameEncoder } from '../../../../../io/netty/handler/codec/compression/SnappyFrameEncoder.d.ts'
export class SnappyFramedEncoder extends SnappyFrameEncoder {
    static snappyEncoderWithJumboFrames(): SnappyFrameEncoder;
    constructor()
}