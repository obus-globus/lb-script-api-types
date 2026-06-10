import type { DataConverter } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/DataConverter.d.ts'
import type { Codec } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/codec/Codec.d.ts'
import type { Result } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/model/Result.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class SerializedData<T extends Object | number | string | boolean> extends Object {
    constructor(arg0: T, arg1: DataConverter<T>)
    readonly converter: DataConverter<T>;
    readonly data: T;
    convert<S extends Object | number | string | boolean>(arg0: DataConverter<S>): Result<S>;
    deserialize<O extends Object | number | string | boolean>(arg0: Codec<O>): Result<O>;
    equals(arg0: Object | null): boolean;
    getConverter(): DataConverter<T>;
    getData(): T;
    hashCode(): number;
    toString(): string;
}