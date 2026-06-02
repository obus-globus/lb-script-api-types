import type { Codec } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/codec/Codec.d.ts'
import type { Registry } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/registry/Registry.d.ts'
import type { RegistryEntry } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/registry/RegistryEntry.d.ts'
import type { TagKey } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/registry/TagKey.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TagEntryList extends Object {
    static codec(paramarg0: Registry, paramarg1: boolean): Codec<TagEntryList>;
    constructor(arg0: TagKey)
    constructor(arg0: RegistryEntry[])
    readonly entries: RegistryEntry[];
    readonly tag: TagKey;
    canEqual(arg0: Object): boolean;
    equals(arg0: Object | null): boolean;
    getEntries(): RegistryEntry[];
    getTag(): TagKey;
    hashCode(): number;
    isEntries(): boolean;
    isTag(): boolean;
    toString(): string;
}