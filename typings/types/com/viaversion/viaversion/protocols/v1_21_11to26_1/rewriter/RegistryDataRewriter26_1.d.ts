import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Protocol } from '../../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { RegistryDataRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/RegistryDataRewriter.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class RegistryDataRewriter26_1 extends RegistryDataRewriter {
    constructor(arg0: Protocol<Object, Object, Object, Object>)
    updateEnchantmentTerm(arg0: Map$Entry<string, Tag>[]): void;
}