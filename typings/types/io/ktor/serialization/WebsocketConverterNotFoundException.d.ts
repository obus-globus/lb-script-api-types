import type { WebsocketContentConvertException } from '../../../io/ktor/serialization/WebsocketContentConvertException.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class WebsocketConverterNotFoundException extends WebsocketContentConvertException {
    constructor(message: string, cause: Throwable | null)
}