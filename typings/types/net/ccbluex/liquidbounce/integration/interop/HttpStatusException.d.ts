import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { HttpStatusCode } from '../../../../../io/ktor/http/HttpStatusCode.d.ts'
import type { CancellationException } from '../../../../../java/util/concurrent/CancellationException.d.ts'
export class HttpStatusException extends CancellationException {
    constructor(status: HttpStatusCode, body: JavaMap<string, string>)
    readonly body: JavaMap<string, string>;
    readonly status: HttpStatusCode;
}