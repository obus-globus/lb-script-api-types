import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { DataResult } from '../../../com/mojang/serialization/DataResult.d.ts'
import type { DynamicOps } from '../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class EncoderCache$Key<A extends Object | number | string | boolean, T extends Object | number | string | boolean> extends Record {
    private constructor(codec: Codec<A>, value: A, ops: DynamicOps<T>)
    // private codec: Codec<A>;
    // private ops: DynamicOps<T>;
    // private value: A;
    codec(): Codec<A>;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    ops(): DynamicOps<T>;
    resolve(): DataResult<T>;
    toString(): string;
    value(): A;
}