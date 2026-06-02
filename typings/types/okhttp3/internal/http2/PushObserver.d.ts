import type { Object } from '../../../java/lang/Object.d.ts'
import type { ErrorCode } from '../../../okhttp3/internal/http2/ErrorCode.d.ts'
import type { Header } from '../../../okhttp3/internal/http2/Header.d.ts'
import type { BufferedSource } from '../../../okio/BufferedSource.d.ts'
export interface PushObserver extends Object{
    onData(streamId: number, source: BufferedSource, byteCount: number, last: boolean): boolean;
    onHeaders(streamId: number, responseHeaders: Header[], last: boolean): boolean;
    onRequest(streamId: number, requestHeaders: Header[]): boolean;
    onReset(streamId: number, errorCode: ErrorCode): void;
}