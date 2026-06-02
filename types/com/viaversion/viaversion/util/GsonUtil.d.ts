import type { Gson } from '../../../../com/viaversion/viaversion/libs/gson/Gson.d.ts'
import type { JsonElement } from '../../../../com/viaversion/viaversion/libs/gson/JsonElement.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class GsonUtil extends Object {
    static getGson(): Gson;
    static sort(paramarg0: JsonElement): JsonElement;
    constructor()
}