import type { ContentConvertException } from '../../../io/ktor/serialization/ContentConvertException.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class WebsocketContentConvertException extends ContentConvertException {
    constructor(message: string, cause: Throwable | null)
}