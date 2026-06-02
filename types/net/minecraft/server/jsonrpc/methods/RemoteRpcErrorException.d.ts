import type { JsonElement } from '../../../../../com/google/gson/JsonElement.d.ts'
import type { JsonObject } from '../../../../../com/google/gson/JsonObject.d.ts'
import type { RuntimeException } from '../../../../../java/lang/RuntimeException.d.ts'
export class RemoteRpcErrorException extends RuntimeException {
    constructor(id: JsonElement, error: JsonObject)
    // private error: JsonObject;
    // private id: JsonElement;
    // private getError(): JsonObject;
    // private getId(): JsonElement;
}