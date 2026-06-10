import type { Codec } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/codec/Codec.d.ts'
import type { Identifier } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/core/Identifier.d.ts'
import type { Holder } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/registry/Holder.d.ts'
import type { RegistryEntry } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/registry/RegistryEntry.d.ts'
import type { TagKey } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/registry/TagKey.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class Registry extends Object {
    constructor(arg0: Identifier)
    // private entryCodec: Codec<RegistryEntry>;
    readonly name: Identifier;
    entryCodec(): Codec<RegistryEntry>;
    equals(arg0: Object | null): boolean;
    getEntry(arg0: Identifier): RegistryEntry;
    getEntry(arg0: number): RegistryEntry;
    getHolder<T extends Object | number | string | boolean>(arg0: Identifier): Holder<T>;
    getHolder<T extends Object | number | string | boolean>(arg0: number): Holder<T>;
    getId(arg0: number): Identifier;
    getName(): Identifier;
    getNetworkId(arg0: Identifier): number;
    getTag(arg0: Identifier): TagKey;
    hashCode(): number;
    toString(): string;
}