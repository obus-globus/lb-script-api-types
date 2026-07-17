import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Number } from '../../../java/lang/Number.d.ts'
import type { UByte } from '../../../kotlin/UByte.d.ts'
import type { UInt } from '../../../kotlin/UInt.d.ts'
import type { ULong } from '../../../kotlin/ULong.d.ts'
import type { UShort } from '../../../kotlin/UShort.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { JsonElement } from '../../../kotlinx/serialization/json/JsonElement.d.ts'
import type { JsonNull } from '../../../kotlinx/serialization/json/JsonNull.d.ts'
import type { JsonPrimitive } from '../../../kotlinx/serialization/json/JsonPrimitive.d.ts'
export class JsonElementKt extends Object {
    static JsonPrimitive(value: void | null): JsonNull;
    static JsonPrimitive(value: boolean | null): JsonPrimitive;
    static JsonPrimitive(value: Number | null): JsonPrimitive;
    static JsonPrimitive(value: string | null): JsonPrimitive;
// (invalid TS: name contains '-')     static JsonPrimitive-7apg3OU(value: UByte): JsonPrimitive;
// (invalid TS: name contains '-')     static JsonPrimitive-VKZWuLQ(value: ULong): JsonPrimitive;
// (invalid TS: name contains '-')     static JsonPrimitive-WZ4Q5Ns(value: UInt): JsonPrimitive;
// (invalid TS: name contains '-')     static JsonPrimitive-xj2QHRw(value: UShort): JsonPrimitive;
    static JsonUnquotedLiteral(value: string | null): JsonPrimitive;
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
    static getJsonObject(paramarg0: JsonElement): JavaMap<any, any>;
    static getJsonPrimitive(paramarg0: JsonElement): JsonPrimitive;
    static getJsonUnquotedLiteralDescriptor(): SerialDescriptor;
    static getLong(paramarg0: JsonPrimitive): number;
    static getLongOrNull(paramarg0: JsonPrimitive): number;
    static parseLongImpl(self: JsonPrimitive): number;
    static unexpectedJson(key: string, expected: string): void;
}