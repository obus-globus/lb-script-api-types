import type { JsonParser } from '../../../../../../../com/azure/json/implementation/jackson/core/JsonParser.d.ts'
import type { JsonToken } from '../../../../../../../com/azure/json/implementation/jackson/core/JsonToken.d.ts'
import type { StreamReadException } from '../../../../../../../com/azure/json/implementation/jackson/core/exc/StreamReadException.d.ts'
import type { RequestPayload } from '../../../../../../../com/azure/json/implementation/jackson/core/util/RequestPayload.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class InputCoercionException extends StreamReadException {
    constructor(arg0: JsonParser, arg1: string, arg2: JsonToken, arg3: Class<Object>)
    // private _inputType: JsonToken;
    // private _targetType: Class<Object>;
    withRequestPayload(arg0: RequestPayload): InputCoercionException;
}