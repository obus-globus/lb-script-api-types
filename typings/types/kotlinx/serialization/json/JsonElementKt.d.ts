import type { Object } from '../../../java/lang/Object.d.ts'
import type { Number } from '../../../java/lang/Number.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { JsonElement } from '../../../kotlinx/serialization/json/JsonElement.d.ts'
import type { JsonNull } from '../../../kotlinx/serialization/json/JsonNull.d.ts'
import type { JsonPrimitive } from '../../../kotlinx/serialization/json/JsonPrimitive.d.ts'
export class JsonElementKt extends Object {
    static JsonPrimitive(paramarg0: void): JsonNull;
    static JsonPrimitive(paramarg0: boolean): JsonPrimitive;
    static JsonPrimitive(paramarg0: Number): JsonPrimitive;
    static JsonPrimitive(paramarg0: string): JsonPrimitive;
// (invalid TS: name contains '-')     static JsonPrimitive-7apg3OU(paramarg0: number): JsonPrimitive;
// (invalid TS: name contains '-')     static JsonPrimitive-VKZWuLQ(paramarg0: number): JsonPrimitive;
// (invalid TS: name contains '-')     static JsonPrimitive-WZ4Q5Ns(paramarg0: number): JsonPrimitive;
// (invalid TS: name contains '-')     static JsonPrimitive-xj2QHRw(paramarg0: number): JsonPrimitive;
    static JsonUnquotedLiteral(paramarg0: string): JsonPrimitive;
    static getBoolean(paramarg0: JsonPrimitive): boolean;
    static getBooleanOrNull(paramarg0: JsonPrimitive): boolean;
    static getContentOrNull(paramarg0: JsonPrimitive): string;
    static getDouble(paramarg0: JsonPrimitive): number;
    static getDoubleOrNull(paramarg0: JsonPrimitive): number;
    static getFloat(paramarg0: JsonPrimitive): number;
    static getFloatOrNull(paramarg0: JsonPrimitive): number;
    static getInt(paramarg0: JsonPrimitive): number;
    static getIntOrNull(paramarg0: JsonPrimitive): number;
    static getJsonArray(paramarg0: JsonElement): (Object | null)[];
    static getJsonNull(paramarg0: JsonElement): JsonNull;
    static getJsonObject(paramarg0: JsonElement): { [key: string]: any };
    static getJsonPrimitive(paramarg0: JsonElement): JsonPrimitive;
    static getJsonUnquotedLiteralDescriptor(): SerialDescriptor;
    static getLong(paramarg0: JsonPrimitive): number;
    static getLongOrNull(paramarg0: JsonPrimitive): number;
    static parseLongImpl(paramarg0: JsonPrimitive): number;
    static unexpectedJson(paramarg0: string, paramarg1: string): void;
}