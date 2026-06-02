import type { Codec } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/codec/Codec.d.ts'
import type { Holder } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/registry/Holder.d.ts'
import type { Registry } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/registry/Registry.d.ts'
import type { TagKey } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/registry/TagKey.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TypedTagEntryList<T extends Object | number | string | boolean> extends Object {
    static codec(paramarg0: Registry, paramarg1: Codec<Object>, paramarg2: boolean): Codec<Object>;
    constructor(arg0: TagKey)
    constructor(arg0: Holder<T>[])
    readonly entries: Holder<T>[];
    readonly tag: TagKey;
    canEqual(arg0: Object): boolean;
    equals(arg0: Object | null): boolean;
    getEntries(): Holder<T>[];
    getTag(): TagKey;
    hashCode(): number;
    isEntries(): boolean;
    isTag(): boolean;
    toString(): string;
}