import type { Either } from '../../../../com/mojang/datafixers/util/Either.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ResourceOrTagArgument$Result } from '../../../../net/minecraft/commands/arguments/ResourceOrTagArgument$Result.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { Holder$Reference } from '../../../../net/minecraft/core/Holder$Reference.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
export class ResourceOrTagArgument$ResourceResult<T extends Object | number | string | boolean> extends Record implements ResourceOrTagArgument$Result<T> {
    private constructor(value: Holder$Reference<T>)
    // private value: Holder$Reference<T>;
    asPrintable(): string;
    cast<E extends Object | number | string | boolean>(registryKey: ResourceKey<E[]>): Optional<ResourceOrTagArgument$Result<E>>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    test(holder: Holder<T>): boolean;
    toString(): string;
    unwrap(): Either<Holder$Reference<T>, T[]>;
    value(): Holder$Reference<T>;
}