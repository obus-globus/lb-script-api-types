import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { JsonParseException } from '../../../../../../org/spongepowered/include/com/google/gson/JsonParseException.d.ts'
export class JsonSyntaxException extends JsonParseException {
    constructor(arg0: string)
    constructor(arg0: string, arg1: Throwable)
    constructor(arg0: Throwable)
}