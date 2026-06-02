import type { JsonGenerator } from '../../../../../../com/azure/json/implementation/jackson/core/JsonGenerator.d.ts'
import type { StreamWriteException } from '../../../../../../com/azure/json/implementation/jackson/core/exc/StreamWriteException.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
export class JsonGenerationException extends StreamWriteException {
    constructor(arg0: string)
    constructor(arg0: string, arg1: JsonGenerator)
    constructor(arg0: string, arg1: Throwable)
    constructor(arg0: Throwable)
    getProcessor(): JsonGenerator;
}