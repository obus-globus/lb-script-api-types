import type { JsonLocation } from '../../../../../../../com/azure/json/implementation/jackson/core/JsonLocation.d.ts'
import type { JsonParser } from '../../../../../../../com/azure/json/implementation/jackson/core/JsonParser.d.ts'
import type { JsonProcessingException } from '../../../../../../../com/azure/json/implementation/jackson/core/JsonProcessingException.d.ts'
import type { RequestPayload } from '../../../../../../../com/azure/json/implementation/jackson/core/util/RequestPayload.d.ts'
import type { Throwable } from '../../../../../../../java/lang/Throwable.d.ts'
export abstract class StreamReadException extends JsonProcessingException {
    constructor(arg0: JsonParser, arg1: string)
    constructor(arg0: JsonParser, arg1: string, arg2: JsonLocation)
    constructor(arg0: JsonParser, arg1: string, arg2: Throwable)
    constructor(arg0: string, arg1: JsonLocation, arg2: Throwable)
    // private _processor: JsonParser;
    // private _requestPayload: RequestPayload;
    readonly message: string | null;
    getProcessor(): JsonParser;
    getRequestPayload(): RequestPayload;
    getRequestPayloadAsString(): string;
    withRequestPayload(arg0: RequestPayload): StreamReadException;
}