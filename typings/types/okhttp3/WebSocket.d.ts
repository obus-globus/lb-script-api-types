import type { Object } from '../java/lang/Object.d.ts'
import type { Request } from '../okhttp3/Request.d.ts'
import type { ByteString } from '../okio/ByteString.d.ts'
export interface WebSocket extends Object{
    cancel(): void;
    close(code: number, reason: string | null): boolean;
    queueSize(): number;
    request(): Request;
    send(text: string): boolean;
    send(bytes: ByteString): boolean;
}