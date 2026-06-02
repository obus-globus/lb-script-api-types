import type { FullMappings } from '../../../../../../com/viaversion/viaversion/api/data/FullMappings.d.ts'
import type { StructuredData } from '../../../../../../com/viaversion/viaversion/api/minecraft/data/StructuredData.d.ts'
import type { StructuredDataKey } from '../../../../../../com/viaversion/viaversion/api/minecraft/data/StructuredDataKey.d.ts'
import type { Protocol } from '../../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { Int2IntFunction } from '../../../../../../com/viaversion/viaversion/libs/fastutil/ints/Int2IntFunction.d.ts'
import type { Copyable } from '../../../../../../com/viaversion/viaversion/util/Copyable.d.ts'
import type { Unit } from '../../../../../../com/viaversion/viaversion/util/Unit.d.ts'
import type { Runnable } from '../../../../../../java/lang/Runnable.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class StructuredDataContainer extends Object implements Copyable {
    static copy(paramarg0: Object | null): Object | null;
    constructor()
    constructor(arg0: StructuredData<Object>[])
    constructor(arg0: Map<StructuredDataKey<Object>, StructuredData<Object>>)
    // private data: Map<StructuredDataKey<Object>, StructuredData<Object>>;
    // private lookup: FullMappings;
    // private mappedNames: boolean;
}