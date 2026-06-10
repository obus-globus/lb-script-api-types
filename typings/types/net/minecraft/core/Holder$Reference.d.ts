import type { Either } from '../../../com/mojang/datafixers/util/Either.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Predicate } from '../../../java/util/function/Predicate.d.ts'
import type { Stream } from '../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Holder } from '../../../net/minecraft/core/Holder.d.ts'
import type { Holder$Kind } from '../../../net/minecraft/core/Holder$Kind.d.ts'
import type { Holder$Reference$Type } from '../../../net/minecraft/core/Holder$Reference$Type.d.ts'
import type { HolderOwner } from '../../../net/minecraft/core/HolderOwner.d.ts'
import type { TypedDataComponent } from '../../../net/minecraft/core/component/TypedDataComponent.d.ts'
import type { Identifier } from '../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
import type { TagKey } from '../../../net/minecraft/tags/TagKey.d.ts'
export class Holder$Reference<T extends Object | number | string | boolean> extends Object implements Holder<T> {
    static createIntrusive(paramowner: HolderOwner<Object>, paramvalue: Object | null): Holder$Reference<Object>;
    static createStandAlone(paramowner: HolderOwner<Object>, paramkey: ResourceKey<Object>): Holder$Reference<Object>;
    static direct(paramvalue: Object | null): Holder<Object>;
    static direct(paramvalue: Object | null, paramcomponents: TypedDataComponent<Object>[]): Holder<Object>;
    constructor(type: Holder$Reference$Type, owner: HolderOwner<T>, key: ResourceKey<T>, value: T)
    // private components: TypedDataComponent<Object>[];
    // private key: ResourceKey<T>;
    // private owner: HolderOwner<T>;
    // private tags: TagKey<T>[];
    // private type: Holder$Reference$Type;
    // private value: T;
    areComponentsBound(): boolean;
    bindComponents(components: TypedDataComponent<Object>[]): void;
    bindKey(key: ResourceKey<T>): void;
    bindTags(tags: TagKey<T>[]): void;
    bindValue(value: T): void;
    // private boundTags(): TagKey<T>[];
    canSerializeIn(context: HolderOwner<T>): boolean;
    components(): TypedDataComponent<Object>[];
    getRegisteredName(): string;
    is(predicate: (param0: ResourceKey<T>) => boolean): boolean;
    is(holder: Holder<T>): boolean;
    is(key: Identifier): boolean;
    is(key: ResourceKey<T>): boolean;
    is(tag: TagKey<T>): boolean;
    isBound(): boolean;
    key(): ResourceKey<T>;
    kind(): Holder$Kind;
    tags(): Stream<TagKey<T>>;
    toString(): string;
    unwrap(): Either<ResourceKey<T>, T>;
    unwrapKey(): Optional<ResourceKey<T>>;
    value(): T;
}