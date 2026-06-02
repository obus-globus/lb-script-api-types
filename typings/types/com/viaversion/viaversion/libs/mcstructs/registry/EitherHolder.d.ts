import type { Codec } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/codec/Codec.d.ts'
import type { Either } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/model/Either.d.ts'
import type { Holder } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/registry/Holder.d.ts'
import type { Registry } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/registry/Registry.d.ts'
import type { ResourceKey } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/registry/ResourceKey.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class EitherHolder<T extends Object | number | string | boolean> extends Object {
    static codec(paramarg0: Registry, paramarg1: Codec<Object>): Codec<Object>;
    static fileCodec(paramarg0: Registry, paramarg1: Codec<Object>): Codec<Object>;
    static fixedCodec(paramarg0: Registry): Codec<Object>;
    constructor(arg0: Either<Holder<T>, ResourceKey>)
    constructor(arg0: Holder<T>)
    constructor(arg0: ResourceKey)
    // private either: Either<Holder<T>, ResourceKey>;
    canEqual(arg0: Object): boolean;
    either(): Either<Holder<T>, ResourceKey>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}