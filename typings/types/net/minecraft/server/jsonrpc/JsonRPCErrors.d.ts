import type { JsonElement } from '../../../../com/google/gson/JsonElement.d.ts'
import type { JsonObject } from '../../../../com/google/gson/JsonObject.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class JsonRPCErrors extends Enum<JsonRPCErrors> {
    static INTERNAL_ERROR: JsonRPCErrors;
    static INVALID_PARAMS: JsonRPCErrors;
    static INVALID_REQUEST: JsonRPCErrors;
    static METHOD_NOT_FOUND: JsonRPCErrors;
    static PARSE_ERROR: JsonRPCErrors;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): JsonRPCErrors;
    static values(): JsonRPCErrors[];
    private constructor(errorCode: number, message: string)
    // private errorCode: number;
    // private message: string;
    create(id: JsonElement, data: string): JsonObject;
    createWithUnknownId(data: string): JsonObject;
    createWithoutData(id: JsonElement): JsonObject;
    name(): "PARSE_ERROR" | "INVALID_REQUEST" | "METHOD_NOT_FOUND" | "INVALID_PARAMS" | "INTERNAL_ERROR";
}