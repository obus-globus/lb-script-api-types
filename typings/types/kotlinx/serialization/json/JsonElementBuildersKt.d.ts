import type { Object } from '../../../java/lang/Object.d.ts'
import type { Number } from '../../../java/lang/Number.d.ts'
import type { JsonArrayBuilder } from '../../../kotlinx/serialization/json/JsonArrayBuilder.d.ts'
import type { JsonElement } from '../../../kotlinx/serialization/json/JsonElement.d.ts'
import type { JsonObjectBuilder } from '../../../kotlinx/serialization/json/JsonObjectBuilder.d.ts'
export class JsonElementBuildersKt extends Object {
    static add(self: JsonArrayBuilder, value: boolean | null): boolean;
    static add(self: JsonArrayBuilder, value: Number | null): boolean;
    static add(self: JsonArrayBuilder, value: string | null): boolean;
    static add(self: JsonArrayBuilder, value: void | null): boolean;
    static addAllBooleans(self: JsonArrayBuilder, values: (boolean | null)[]): boolean;
    static addAllNumbers(self: JsonArrayBuilder, values: (Number | null)[]): boolean;
    static addAllStrings(self: JsonArrayBuilder, values: (string | null)[]): boolean;
    static addJsonArray(self: JsonArrayBuilder, builderAction: (param0: JsonArrayBuilder) => void): boolean;
    static addJsonObject(self: JsonArrayBuilder, builderAction: (param0: JsonObjectBuilder) => void): boolean;
    static buildJsonArray(builderAction: (param0: JsonArrayBuilder) => void): (Object | null)[];
    static buildJsonObject(builderAction: (param0: JsonObjectBuilder) => void): { [key: string]: any };
    static put(self: JsonObjectBuilder, key: string, value: boolean | null): JsonElement | null;
    static put(self: JsonObjectBuilder, key: string, value: Number | null): JsonElement | null;
    static put(self: JsonObjectBuilder, key: string, value: string | null): JsonElement | null;
    static put(self: JsonObjectBuilder, key: string, value: void | null): JsonElement | null;
    static putJsonArray(self: JsonObjectBuilder, key: string, builderAction: (param0: JsonArrayBuilder) => void): JsonElement | null;
    static putJsonObject(self: JsonObjectBuilder, key: string, builderAction: (param0: JsonObjectBuilder) => void): JsonElement | null;
}