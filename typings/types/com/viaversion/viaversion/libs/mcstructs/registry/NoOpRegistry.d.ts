import type { Identifier } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/core/Identifier.d.ts'
import type { Registry } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/registry/Registry.d.ts'
import type { RegistryEntry } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/registry/RegistryEntry.d.ts'
import type { TagKey } from '../../../../../../com/viaversion/viaversion/libs/mcstructs/registry/TagKey.d.ts'
export class NoOpRegistry extends Registry {
    constructor(arg0: Identifier)
    getEntry(arg0: Identifier): RegistryEntry;
    getEntry(arg0: number): RegistryEntry;
    getId(arg0: number): Identifier;
    getNetworkId(arg0: Identifier): number;
    getTag(arg0: Identifier): TagKey;
}