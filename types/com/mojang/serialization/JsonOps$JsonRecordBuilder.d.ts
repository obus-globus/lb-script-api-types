import type { JsonElement } from '../../../com/google/gson/JsonElement.d.ts'
import type { JsonObject } from '../../../com/google/gson/JsonObject.d.ts'
import type { DataResult } from '../../../com/mojang/serialization/DataResult.d.ts'
import type { RecordBuilder$AbstractStringBuilder } from '../../../com/mojang/serialization/RecordBuilder$AbstractStringBuilder.d.ts'
export class JsonOps$JsonRecordBuilder extends RecordBuilder$AbstractStringBuilder<JsonElement, JsonObject> {
    constructor(null_: JsonOps$JsonRecordBuilder)
    append(arg0: string, arg1: JsonElement, arg2: JsonObject): JsonObject;
    build(arg0: JsonObject, arg1: JsonElement): DataResult<JsonElement>;
    initBuilder(): JsonObject;
}