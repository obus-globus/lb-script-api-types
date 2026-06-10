import type { Either } from '../../../../com/mojang/datafixers/util/Either.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { TagKey } from '../../../../net/minecraft/tags/TagKey.d.ts'
export interface ResourceOrTagKeyArgument$Result<T extends Object | number | string | boolean> extends Predicate<Holder<T>>, Object {
    and(arg0: (param0: Holder<T>) => boolean): (param0: Holder<T>) => boolean;
    asPrintable(): string;
    cast<E extends Object | number | string | boolean>(registryKey: ResourceKey<E[]>): Optional<ResourceOrTagKeyArgument$Result<E>>;
    negate(): (param0: Holder<T>) => boolean;
    or(arg0: (param0: Holder<T>) => boolean): (param0: Holder<T>) => boolean;
    unwrap(): Either<ResourceKey<T>, TagKey<T>>;
}