import type { Either } from '../../../../com/mojang/datafixers/util/Either.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ResourceOrTagKeyArgument$Result } from '../../../../net/minecraft/commands/arguments/ResourceOrTagKeyArgument$Result.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { TagKey } from '../../../../net/minecraft/tags/TagKey.d.ts'
export class ResourceOrTagKeyArgument$ResourceResult<T extends Object | number | string | boolean> extends Record implements ResourceOrTagKeyArgument$Result<T> {
    private constructor(key: ResourceKey<T>)
    // private key: ResourceKey<T>;
    asPrintable(): string;
    cast<E extends Object | number | string | boolean>(registryKey: ResourceKey<E[]>): Optional<ResourceOrTagKeyArgument$Result<E>>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    key(): ResourceKey<T>;
    test(holder: Holder<T>): boolean;
    toString(): string;
    unwrap(): Either<ResourceKey<T>, TagKey<T>>;
}