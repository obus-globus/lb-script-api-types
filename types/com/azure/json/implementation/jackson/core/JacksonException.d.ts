import type { JsonLocation } from '../../../../../../com/azure/json/implementation/jackson/core/JsonLocation.d.ts'
import type { IOException } from '../../../../../../java/io/IOException.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
export abstract class JacksonException extends IOException {
    constructor(arg0: string)
    constructor(arg0: string, arg1: Throwable)
    getLocation(): JsonLocation;
    getProcessor(): Object;
}