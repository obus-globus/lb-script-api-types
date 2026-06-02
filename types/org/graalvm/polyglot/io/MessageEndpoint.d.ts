import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface MessageEndpoint extends Object{
    sendBinary(data: ByteBuffer): void;
    sendClose(): void;
    sendPing(data: ByteBuffer): void;
    sendPong(data: ByteBuffer): void;
    sendText(text: string): void;
}