import type { DataResult } from '../../../../com/mojang/serialization/DataResult.d.ts'
import type { DynamicOps } from '../../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DataComponentType } from '../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class TypedDataComponent<T extends unknown> extends Record {
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, TypedDataComponent<Object>>;
    static createUnchecked<T extends unknown>(paramtype: DataComponentType<T>, paramvalue: Object): TypedDataComponent<T>;
    constructor(type: DataComponentType<T>, value: T)
    // private type: DataComponentType<T>;
    // private value: T;
    applyTo(components: (Object | null)[]): void;
    encodeValue<D extends unknown>(ops: DynamicOps<D>): DataResult<D>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    type(): DataComponentType<T>;
    value(): T;
}