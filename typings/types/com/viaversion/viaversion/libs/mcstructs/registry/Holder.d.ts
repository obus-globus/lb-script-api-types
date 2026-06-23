import type { Codec } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/codec/Codec.d.ts'
import type { Either } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/model/Either.d.ts'
import type { Registry } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/registry/Registry.d.ts'
import type { RegistryEntry } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/registry/RegistryEntry.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Holder<T extends unknown> extends Object {
    static fileCodec(paramarg0: Registry, paramarg1: Codec<Object>): Codec<Holder<Object>>;
    static fixedCodec(paramarg0: Registry): Codec<Holder<Object>>;
    constructor(arg0: T)
    constructor(arg0: Either<RegistryEntry, T>)
    constructor(arg0: RegistryEntry)
    readonly entry: RegistryEntry;
    readonly value: T;
    canEqual(arg0: Object): boolean;
    either(): Either<RegistryEntry, T>;
    equals(arg0: Object | null): boolean;
    getEntry(): RegistryEntry;
    getValue(): T;
    hashCode(): number;
    isEntry(): boolean;
    isValue(): boolean;
    toString(): string;
}