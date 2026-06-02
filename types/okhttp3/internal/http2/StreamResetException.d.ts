import type { IOException } from '../../../java/io/IOException.d.ts'
import type { ErrorCode } from '../../../okhttp3/internal/http2/ErrorCode.d.ts'
export class StreamResetException extends IOException {
    constructor(errorCode: ErrorCode)
    errorCode: ErrorCode;
}