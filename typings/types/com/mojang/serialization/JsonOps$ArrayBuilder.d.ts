import type { JsonElement } from '../../../com/google/gson/JsonElement.d.ts'
import type { DataResult } from '../../../com/mojang/serialization/DataResult.d.ts'
import type { DynamicOps } from '../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Encoder } from '../../../com/mojang/serialization/Encoder.d.ts'
import type { ListBuilder } from '../../../com/mojang/serialization/ListBuilder.d.ts'
import type { UnaryOperator } from '../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class JsonOps$ArrayBuilder extends Object implements ListBuilder<JsonElement> {
    private constructor()
    // private builder: DataResult<JsonElement[]>;
    add<E extends unknown>(arg0: E, arg1: Encoder<E>): ListBuilder<JsonElement>;
    add(arg0: JsonElement): ListBuilder<JsonElement>;
    add(arg0: DataResult<JsonElement>): ListBuilder<JsonElement>;
    addAll<E extends unknown>(arg0: E[], arg1: Encoder<E>): ListBuilder<JsonElement>;
    build(arg0: JsonElement): DataResult<JsonElement>;
    build(arg0: DataResult<JsonElement>): DataResult<JsonElement>;
    mapError(arg0: (param0: string) => string): ListBuilder<JsonElement>;
    ops(): DynamicOps<JsonElement>;
    withErrorsFrom(arg0: DataResult<Object>): ListBuilder<JsonElement>;
}