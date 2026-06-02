import type { JsonElement } from '../../../../com/google/gson/JsonElement.d.ts'
import type { JsonObject } from '../../../../com/google/gson/JsonObject.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export class JsonRPCUtils extends Object {
    static JSON_RPC_VERSION: string;
    static OPEN_RPC_VERSION: string;
    static createError(paramid: JsonElement, parammessage: string, paramerrorCode: number, paramdata: string): JsonObject;
    static createRequest(paramid: number, parammethod: Identifier, paramparams: JsonElement[]): JsonObject;
    static createSuccessResult(paramid: JsonElement, paramresult: JsonElement): JsonObject;
    static getError(paramjsonObject: JsonObject): JsonObject;
    static getMethodName(paramjsonObject: JsonObject): string;
    static getParams(paramjsonObject: JsonObject): JsonElement;
    static getRequestId(paramjsonObject: JsonObject): JsonElement;
    static getResult(paramjsonObject: JsonObject): JsonElement;
    constructor()
}