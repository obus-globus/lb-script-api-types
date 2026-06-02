import type { JsonLocation } from '../../../../../../com/azure/json/implementation/jackson/core/JsonLocation.d.ts'
import type { JsonParser } from '../../../../../../com/azure/json/implementation/jackson/core/JsonParser.d.ts'
import type { StreamReadException } from '../../../../../../com/azure/json/implementation/jackson/core/exc/StreamReadException.d.ts'
import type { RequestPayload } from '../../../../../../com/azure/json/implementation/jackson/core/util/RequestPayload.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
export class JsonParseException extends StreamReadException {
    constructor(arg0: JsonParser, arg1: string)
    constructor(arg0: JsonParser, arg1: string, arg2: JsonLocation)
    constructor(arg0: JsonParser, arg1: string, arg2: JsonLocation, arg3: Throwable)
    constructor(arg0: JsonParser, arg1: string, arg2: Throwable)
    constructor(arg0: string, arg1: JsonLocation)
    constructor(arg0: string, arg1: JsonLocation, arg2: Throwable)
    readonly message: string | null;
    getProcessor(): JsonParser;
    getRequestPayload(): RequestPayload;
    getRequestPayloadAsString(): string;
    withRequestPayload(arg0: RequestPayload): JsonParseException;
}