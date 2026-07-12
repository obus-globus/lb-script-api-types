import type { JsonElement } from '../../../../../../../../com/viaversion/viaversion/libs/gson/JsonElement.d.ts'
import type { DataConverter } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/DataConverter.d.ts'
import type { Codec } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/codec/Codec.d.ts'
import type { Result } from '../../../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/model/Result.d.ts'
import type { Consumer } from '../../../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../../../../java/lang/Number.d.ts'
export class JsonConverter_v1_20_3 extends Object implements DataConverter<JsonElement> {
    static INSTANCE: JsonConverter_v1_20_3;
    constructor()
    // private stringConsumer: (param0: string) => void;
    asBoolean(arg0: JsonElement): Result<boolean>;
    asByteArray(arg0: JsonElement): Result<number[]>;
    asIntArray(arg0: JsonElement): Result<number[]>;
    asList(arg0: JsonElement): Result<JsonElement[]>;
    asLongArray(arg0: JsonElement): Result<number[]>;
    asMap(arg0: JsonElement): Result<Map<JsonElement, JsonElement>>;
    asNumber(arg0: JsonElement): Result<Number>;
    asString(arg0: JsonElement): Result<string>;
    asStringTypeMap(arg0: JsonElement): Result<{ [key: string]: JsonElement }>;
    convertFrom<N extends unknown>(arg0: DataConverter<N>, arg1: N): JsonElement;
    convertList<N extends unknown>(arg0: DataConverter<N>, arg1: JsonElement): N;
    convertMap<N extends unknown>(arg0: DataConverter<N>, arg1: JsonElement): N;
    convertTo<N extends unknown>(arg0: DataConverter<N>, arg1: JsonElement): N;
    createBoolean(arg0: boolean): JsonElement;
    createByte(arg0: number): JsonElement;
    createByteArray(arg0: number[]): JsonElement;
    createDouble(arg0: number): JsonElement;
    createFloat(arg0: number): JsonElement;
    createInt(arg0: number): JsonElement;
    createIntArray(arg0: number[]): JsonElement;
    createList(arg0: JsonElement[]): JsonElement;
    createLong(arg0: number): JsonElement;
    createLongArray(arg0: number[]): JsonElement;
    createMergedMap(arg0: Map<JsonElement, JsonElement>): Result<JsonElement>;
    createNumber(arg0: Number): JsonElement;
    createShort(arg0: number): JsonElement;
    createString(arg0: string): JsonElement;
    createUnsafeMap(arg0: Map<JsonElement, JsonElement>): JsonElement;
    currentConsumer(): (param0: string) => void;
    empty(): JsonElement;
    emptyList(): JsonElement;
    emptyMap(): JsonElement;
    fork<O extends unknown>(arg0: DataConverter<O>): DataConverter<O>;
    forkIfDefault(): DataConverter<JsonElement>;
    mergeList(arg0: JsonElement, ...arg1: JsonElement[]): Result<JsonElement>;
    mergeList(arg0: JsonElement, arg1: JsonElement[]): Result<JsonElement>;
    mergeMap(arg0: JsonElement, arg1: JsonElement, arg2: JsonElement): Result<JsonElement>;
    mergeMap(arg0: JsonElement, ...arg1: JsonElement[]): Result<JsonElement>;
    mergeMap(arg0: JsonElement, arg1: Map<JsonElement, JsonElement>): Result<JsonElement>;
    setCurrentConsumer(arg0: (param0: string) => void): void;
    toCodec(): Codec<JsonElement>;
}