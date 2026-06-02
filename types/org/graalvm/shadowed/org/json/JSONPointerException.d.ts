import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { JSONException } from '../../../../../org/graalvm/shadowed/org/json/JSONException.d.ts'
export class JSONPointerException extends JSONException {
    constructor(message: string)
    constructor(message: string, cause: Throwable)
}