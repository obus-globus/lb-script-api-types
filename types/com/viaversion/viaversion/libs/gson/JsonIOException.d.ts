import type { JsonParseException } from '../../../../../com/viaversion/viaversion/libs/gson/JsonParseException.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class JsonIOException extends JsonParseException {
    constructor(arg0: string)
    constructor(arg0: string, arg1: Throwable)
    constructor(arg0: Throwable)
}