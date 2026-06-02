import type { Object } from '../../../java/lang/Object.d.ts'
import type { ByteString } from '../../../okio/ByteString.d.ts'
export interface WebSocketReader$FrameCallback extends Object{
    onReadClose(code: number, reason: string): void;
    onReadMessage(text: string): void;
    onReadMessage(bytes: ByteString): void;
    onReadPing(payload: ByteString): void;
    onReadPong(payload: ByteString): void;
}