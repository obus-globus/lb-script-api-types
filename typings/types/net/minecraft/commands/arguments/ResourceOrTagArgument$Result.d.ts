import type { Either } from '../../../../com/mojang/datafixers/util/Either.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { Holder$Reference } from '../../../../net/minecraft/core/Holder$Reference.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
export interface ResourceOrTagArgument$Result<T extends Object | number | string | boolean> extends Predicate<Holder<T>>, Object {
    and(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    asPrintable(): string;
    cast(registryKey: ResourceKey<E[]>): Optional<ResourceOrTagArgument$Result<E>>;
    negate(): (param0: T) => kotlin.Boolean;
    or(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    unwrap(): Either<Holder$Reference<T>, T[]>;
}