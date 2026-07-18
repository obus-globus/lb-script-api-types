import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class SimpleFrameCollector extends Object {
    constructor()
    // private buffer: ByteBuffer | null;
    readonly hasRemaining: boolean;
    // private maskBuffer: ByteBuffer;
    // private remaining: number;
    handle(bb: ByteBuffer): void;
    start(length: number, bb: ByteBuffer): void;
    take(maskKey: number | null): ByteBuffer;
}