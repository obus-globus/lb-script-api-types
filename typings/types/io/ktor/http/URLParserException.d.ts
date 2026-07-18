import type { IllegalStateException } from '../../../java/lang/IllegalStateException.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class URLParserException extends IllegalStateException {
    constructor(urlString: string, cause: Throwable)
}