import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { JsonParseException } from '../../../../../../org/spongepowered/include/com/google/gson/JsonParseException.d.ts'
export class JsonIOException extends JsonParseException {
    constructor(arg0: string)
    constructor(arg0: Throwable)
}