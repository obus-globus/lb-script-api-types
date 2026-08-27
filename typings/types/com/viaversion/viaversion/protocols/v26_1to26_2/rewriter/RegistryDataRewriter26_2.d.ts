import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Protocol26_1To26_2 } from '../../../../../../com/viaversion/viaversion/protocols/v26_1to26_2/Protocol26_1To26_2.d.ts'
import type { RegistryDataRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/RegistryDataRewriter.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class RegistryDataRewriter26_2 extends RegistryDataRewriter {
    constructor(arg0: Protocol26_1To26_2)
    updateEnchantmentTerm(arg0: Map$Entry<string, Tag>[]): void;
    // private updateEntityPredicate(arg0: Map$Entry<string, Tag>[]): void;
    // private updateNestedEntityPredicate(arg0: Map$Entry<string, Tag>[], arg1: string): void;
    // private updateTypeSpecificTerm(arg0: Map$Entry<string, Tag>[], arg1: Map$Entry<string, Tag>[]): void;
}