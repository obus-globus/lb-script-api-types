import type { Object } from '../../../java/lang/Object.d.ts'
import type { Number } from '../../../java/lang/Number.d.ts'
import type { JsonArrayBuilder } from '../../../kotlinx/serialization/json/JsonArrayBuilder.d.ts'
import type { JsonElement } from '../../../kotlinx/serialization/json/JsonElement.d.ts'
import type { JsonObjectBuilder } from '../../../kotlinx/serialization/json/JsonObjectBuilder.d.ts'
export class JsonElementBuildersKt extends Object {
    static add(paramarg0: JsonArrayBuilder, paramarg1: boolean): boolean;
    static add(paramarg0: JsonArrayBuilder, paramarg1: Number): boolean;
    static add(paramarg0: JsonArrayBuilder, paramarg1: string): boolean;
    static add(paramarg0: JsonArrayBuilder, paramarg1: void): boolean;
    static addAllBooleans(paramarg0: JsonArrayBuilder, paramarg1: boolean[]): boolean;
    static addAllNumbers(paramarg0: JsonArrayBuilder, paramarg1: Number[]): boolean;
    static addAllStrings(paramarg0: JsonArrayBuilder, paramarg1: string[]): boolean;
    static addJsonArray(paramarg0: JsonArrayBuilder, paramarg1: (param0: Object) => void): boolean;
    static addJsonObject(paramarg0: JsonArrayBuilder, paramarg1: (param0: Object) => void): boolean;
    static buildJsonArray(paramarg0: (param0: Object) => void): (Object | null)[];
    static buildJsonObject(paramarg0: (param0: Object) => void): JsonObject;
    static put(paramarg0: JsonObjectBuilder, paramarg1: string, paramarg2: boolean): JsonElement;
    static put(paramarg0: JsonObjectBuilder, paramarg1: string, paramarg2: Number): JsonElement;
    static put(paramarg0: JsonObjectBuilder, paramarg1: string, paramarg2: string): JsonElement;
    static put(paramarg0: JsonObjectBuilder, paramarg1: string, paramarg2: void): JsonElement;
    static putJsonArray(paramarg0: JsonObjectBuilder, paramarg1: string, paramarg2: (param0: Object) => void): JsonElement;
    static putJsonObject(paramarg0: JsonObjectBuilder, paramarg1: string, paramarg2: (param0: Object) => void): JsonElement;
}