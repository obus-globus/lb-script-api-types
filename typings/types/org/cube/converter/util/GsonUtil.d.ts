import type { Gson } from '../../../../com/viaversion/viaversion/libs/gson/Gson.d.ts'
import type { JsonElement } from '../../../../com/viaversion/viaversion/libs/gson/JsonElement.d.ts'
import type { JsonObject } from '../../../../com/viaversion/viaversion/libs/gson/JsonObject.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class GsonUtil extends Object {
    static arrayToList(paramarg0: JsonElement[]): string[];
    static getGson(): Gson;
    static getOrDefault(paramarg0: JsonElement, paramarg1: string): string;
    static objectToMap(paramarg0: JsonObject): { [key: string]: string };
    private constructor()
}