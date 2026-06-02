import type { JsonGenerator } from '../../../../../../../com/azure/json/implementation/jackson/core/JsonGenerator.d.ts'
import type { JsonProcessingException } from '../../../../../../../com/azure/json/implementation/jackson/core/JsonProcessingException.d.ts'
import type { Throwable } from '../../../../../../../java/lang/Throwable.d.ts'
export abstract class StreamWriteException extends JsonProcessingException {
    constructor(arg0: string, arg1: JsonGenerator)
    constructor(arg0: string, arg1: Throwable, arg2: JsonGenerator)
    constructor(arg0: Throwable, arg1: JsonGenerator)
    // private _processor: JsonGenerator;
    getProcessor(): JsonGenerator;
}