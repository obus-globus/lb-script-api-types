import type { JsonElement } from '../../../../../com/viaversion/viaversion/libs/gson/JsonElement.d.ts'
import type { JsonObject } from '../../../../../com/viaversion/viaversion/libs/gson/JsonObject.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class JsonUtil extends Object {
    static getValue(paramarg0: JsonElement): Object;
    static merge(paramarg0: JsonObject, paramarg1: JsonObject): void;
    static sort<T extends JsonElement>(paramarg0: T, paramarg1: (param0: string, param1: string) => number): T;
    constructor()
}