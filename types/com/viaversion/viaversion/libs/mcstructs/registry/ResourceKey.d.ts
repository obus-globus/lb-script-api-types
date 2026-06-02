import type { Codec } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/converter/codec/Codec.d.ts'
import type { Identifier } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/core/Identifier.d.ts'
import type { Registry } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/registry/Registry.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ResourceKey extends Object {
    static codec(paramarg0: Registry): Codec<ResourceKey>;
    constructor(arg0: Registry, arg1: Identifier)
    readonly name: Identifier;
    readonly registry: Registry;
    canEqual(arg0: Object): boolean;
    equals(arg0: Object | null): boolean;
    getName(): Identifier;
    getRegistry(): Registry;
    hashCode(): number;
    toString(): string;
}