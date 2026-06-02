import type { JsonObject } from '../../../../com/google/gson/JsonObject.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class JsonUtil extends Object {
    static getBoolean(paramarg0: JsonObject, paramarg1: string): Optional<boolean>;
    static getString(paramarg0: JsonObject, paramarg1: string): Optional<string>;
    private constructor()
}