import type { Classifications$Classification } from '../../../ai/djl/modality/Classifications$Classification.d.ts'
import type { NDArray } from '../../../ai/djl/ndarray/NDArray.d.ts'
import type { Ensembleable } from '../../../ai/djl/translate/Ensembleable.d.ts'
import type { JsonSerializable } from '../../../ai/djl/util/JsonSerializable.d.ts'
import type { JsonElement } from '../../../com/google/gson/JsonElement.d.ts'
import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../java/util/Iterator.d.ts'
export class Classifications extends Object implements Ensembleable<Classifications>, JsonSerializable {
    constructor(arg0: string[], arg1: NDArray)
    constructor(arg0: string[], arg1: NDArray, arg2: number)
    constructor(arg0: string[], arg1: number[])
    classNames: string[];
    probabilities: number[];
    best<T extends Classifications$Classification>(): T;
    ensembleWith(arg0: Iterator<Classifications>): Classifications;
    get<T extends Classifications$Classification>(arg0: string): T;
    getAsString(): string;
    getClassNames(): string[];
    getProbabilities(): number[];
    item<T extends Classifications$Classification>(arg0: number): T;
    items<T extends Classifications$Classification>(): T[];
    serialize(): JsonElement;
    setTopK(arg0: number): void;
    toByteBuffer(): ByteBuffer;
    toJson(): string;
    toString(): string;
    topK<T extends Classifications$Classification>(): T[];
    topK<T extends Classifications$Classification>(arg0: number): T[];
}