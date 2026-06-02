import type { Either } from '../../../com/mojang/datafixers/util/Either.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Predicate } from '../../../java/util/function/Predicate.d.ts'
import type { Stream } from '../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Holder } from '../../../net/minecraft/core/Holder.d.ts'
import type { Holder$Kind } from '../../../net/minecraft/core/Holder$Kind.d.ts'
import type { HolderOwner } from '../../../net/minecraft/core/HolderOwner.d.ts'
import type { TypedDataComponent } from '../../../net/minecraft/core/component/TypedDataComponent.d.ts'
import type { Identifier } from '../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
import type { TagKey } from '../../../net/minecraft/tags/TagKey.d.ts'
export class Holder$Direct<T extends Object | number | string | boolean> extends Record implements Holder<T> {
    static direct(paramvalue: Object | null): Holder<Object>;
    static direct(paramvalue: Object | null, paramcomponents: TypedDataComponent<Object>[]): Holder<Object>;
    constructor(value: T, components: TypedDataComponent<Object>[])
    // private components: TypedDataComponent<Object>[];
    // private value: T;
    areComponentsBound(): boolean;
    canSerializeIn(registry: HolderOwner<T>): boolean;
    components(): TypedDataComponent<Object>[];
    equals(o: Object | null): boolean;
    getRegisteredName(): string;
    hashCode(): number;
    is(predicate: (param0: ResourceKey<T>) => kotlin.Boolean): boolean;
    is(holder: Holder<T>): boolean;
    is(key: Identifier): boolean;
    is(key: ResourceKey<T>): boolean;
    is(tag: TagKey<T>): boolean;
    isBound(): boolean;
    kind(): Holder$Kind;
    tags(): Stream<TagKey<T>>;
    toString(): string;
    unwrap(): Either<ResourceKey<T>, T>;
    unwrapKey(): Optional<ResourceKey<T>>;
    value(): T;
}