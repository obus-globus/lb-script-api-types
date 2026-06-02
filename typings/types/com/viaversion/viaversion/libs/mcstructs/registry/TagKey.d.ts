import type { Codec } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/codec/Codec.d.ts'
import type { Identifier } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/core/Identifier.d.ts'
import type { Registry } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/registry/Registry.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TagKey extends Object {
    static hashedCodec(paramarg0: Registry): Codec<TagKey>;
    constructor(arg0: Registry, arg1: Identifier)
    readonly registry: Registry;
    readonly tag: Identifier;
    canEqual(arg0: Object): boolean;
    equals(arg0: Object | null): boolean;
    getRegistry(): Registry;
    getTag(): Identifier;
    hashCode(): number;
    toString(): string;
}