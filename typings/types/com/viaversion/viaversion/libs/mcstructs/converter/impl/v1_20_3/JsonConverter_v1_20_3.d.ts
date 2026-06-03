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
    convertFrom<T extends Object | number | string | boolean, N extends Object | number | string | boolean>(arg0: DataConverter<N>, arg1: N): T;
    convertList<N extends Object | number | string | boolean, T extends Object | number | string | boolean>(arg0: DataConverter<N>, arg1: T): N;
    convertMap<N extends Object | number | string | boolean, T extends Object | number | string | boolean>(arg0: DataConverter<N>, arg1: T): N;
    convertTo<N extends Object | number | string | boolean>(arg0: DataConverter<N>, arg1: JsonElement): N;
    createBoolean(arg0: boolean): JsonElement;
    createByte<T extends Object | number | string | boolean>(arg0: number): T;
    createByteArray(arg0: number[]): JsonElement;
    createDouble<T extends Object | number | string | boolean>(arg0: number): T;
    createFloat<T extends Object | number | string | boolean>(arg0: number): T;
    createInt<T extends Object | number | string | boolean>(arg0: number): T;
    createIntArray(arg0: number[]): JsonElement;
    createList<T extends Object | number | string | boolean>(arg0: T[]): T;
    createLong<T extends Object | number | string | boolean>(arg0: number): T;
    createLongArray(arg0: number[]): JsonElement;
    createMergedMap(arg0: Map<T, T>): Result<T>;
    createNumber(arg0: Number): JsonElement;
    createShort<T extends Object | number | string | boolean>(arg0: number): T;
    createString(arg0: string): JsonElement;
    createUnsafeMap(arg0: Map<JsonElement, JsonElement>): JsonElement;
    currentConsumer(): (param0: string) => void;
    empty<T extends Object | number | string | boolean>(): T;
    empty(): JsonElement;
    emptyList<T extends Object | number | string | boolean>(): T;
    emptyMap<T extends Object | number | string | boolean>(): T;
    fork(arg0: DataConverter<O>): DataConverter<O>;
    forkIfDefault(): DataConverter<T>;
    forkIfDefault(): DataConverter<JsonElement>;
    mergeList<T extends Object | number | string | boolean>(arg0: T, arg1: T[]): Result<T>;
    mergeList(arg0: JsonElement, arg1: JsonElement[]): Result<JsonElement>;
    mergeList(arg0: JsonElement, arg1: JsonElement[]): Result<JsonElement>;
    mergeMap<T extends Object | number | string | boolean>(arg0: T, arg1: T, arg2: T): Result<T>;
    mergeMap<T extends Object | number | string | boolean>(arg0: T, arg1: T[]): Result<T>;
    mergeMap(arg0: JsonElement, arg1: JsonElement, arg2: JsonElement): Result<JsonElement>;
    mergeMap(arg0: JsonElement, arg1: JsonElement[]): Result<JsonElement>;
    mergeMap(arg0: JsonElement, arg1: Map<JsonElement, JsonElement>): Result<JsonElement>;
    setCurrentConsumer(arg0: (param0: string) => void): void;
    toCodec(): Codec<T>;
}