import type { Object } from '../../../java/lang/Object.d.ts'
import type { ErrorCode } from '../../../okhttp3/internal/http2/ErrorCode.d.ts'
export class ErrorCode$Companion extends Object {
    fromHttp2(code: number): ErrorCode | null;
}