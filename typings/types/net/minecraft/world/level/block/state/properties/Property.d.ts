import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { DataResult } from '../../../../../../../com/mojang/serialization/DataResult.d.ts'
import type { DynamicOps } from '../../../../../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../../java/lang/Comparable.d.ts'
import type { StateHolder } from '../../../../../../../net/minecraft/world/level/block/state/StateHolder.d.ts'
import type { Property$Value } from '../../../../../../../net/minecraft/world/level/block/state/properties/Property$Value.d.ts'
export abstract class Property<T extends Comparable<T>> extends Object {
    constructor(name: string, clazz: Class<T>)
    // private clazz: Class<T>;
    // private codec: Codec<T>;
    // private hashCode: number;
    readonly name: string;
    // private valueCodec: Codec<Property$Value<T>>;
    codec(): Codec<T>;
    equals(o: Object | null): boolean;
    generateHashCode(): number;
    getAllValues(): Stream<Property$Value<T>>;
    getInternalIndex(value: T): number;
    getName(): string;
    getName(value: T): string;
    getPossibleValues(): T[];
    getValue(name: string): Optional<T>;
    getValueClass(): Class<T>;
    hashCode(): number;
    parseValue<S extends StateHolder<Object, S>, U extends Object | number | string | boolean>(ops: DynamicOps<U>, state: S, value: U): DataResult<S>;
    toString(): string;
    value(value: T): Property$Value<T>;
    value(stateHolder: StateHolder<Object, Object>): Property$Value<T>;
    valueCodec(): Codec<Property$Value<T>>;
}