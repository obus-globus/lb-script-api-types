import type { WebsocketContentConvertException } from '../../../io/ktor/serialization/WebsocketContentConvertException.d.ts'
import type { Frame } from '../../../io/ktor/websocket/Frame.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class WebsocketDeserializeException extends WebsocketContentConvertException {
    constructor(message: string, cause: Throwable | null, frame: Frame)
    readonly frame: Frame;
}