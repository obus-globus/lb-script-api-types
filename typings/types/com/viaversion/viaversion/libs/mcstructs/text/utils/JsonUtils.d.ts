import type { JsonElement } from '../../../../../../../com/viaversion/viaversion/libs/gson/JsonElement.d.ts'
import type { JsonObject } from '../../../../../../../com/viaversion/viaversion/libs/gson/JsonObject.d.ts'
import type { Comparator } from '../../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class JsonUtils extends Object {
    static getBoolean(paramarg0: JsonElement, paramarg1: string): boolean;
    static getBoolean(paramarg0: JsonObject, paramarg1: string): boolean;
    static getBoolean(paramarg0: JsonObject, paramarg1: string, paramarg2: boolean): boolean;
    static getInt(paramarg0: JsonElement, paramarg1: string): number;
    static getInt(paramarg0: JsonObject, paramarg1: string): number;
    static getInt(paramarg0: JsonObject, paramarg1: string, paramarg2: number): number;
    static getJsonObject(paramarg0: JsonElement, paramarg1: string): JsonObject;
    static getJsonObject(paramarg0: JsonObject, paramarg1: string): JsonObject;
    static getString(paramarg0: JsonElement, paramarg1: string): string;
    static getString(paramarg0: JsonObject, paramarg1: string): string;
    static getString(paramarg0: JsonObject, paramarg1: string, paramarg2: string): string;
    static sort(paramarg0: JsonElement, paramarg1: (param0: string, param1: string) => number): JsonElement;
    static toSortedString(paramarg0: JsonElement, paramarg1: (param0: string, param1: string) => number): string;
    constructor()
}