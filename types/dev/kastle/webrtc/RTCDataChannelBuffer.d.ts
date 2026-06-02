import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class RTCDataChannelBuffer extends Object {
    constructor(arg0: ByteBuffer, arg1: boolean)
    binary: boolean;
    data: ByteBuffer;
}