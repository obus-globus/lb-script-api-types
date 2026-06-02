import type { JsonParseException } from '../../../../../../../com/azure/json/implementation/jackson/core/JsonParseException.d.ts'
import type { JsonParser } from '../../../../../../../com/azure/json/implementation/jackson/core/JsonParser.d.ts'
import type { JsonToken } from '../../../../../../../com/azure/json/implementation/jackson/core/JsonToken.d.ts'
export class JsonEOFException extends JsonParseException {
    constructor(arg0: JsonParser, arg1: JsonToken, arg2: string)
    // private _token: JsonToken;
}