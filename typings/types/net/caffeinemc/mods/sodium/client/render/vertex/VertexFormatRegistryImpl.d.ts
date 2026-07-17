import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { VertexFormat } from '../../../../../../../com/mojang/blaze3d/vertex/VertexFormat.d.ts'
import type { StampedLock } from '../../../../../../../java/util/concurrent/locks/StampedLock.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { VertexFormatRegistry } from '../../../../../../../net/caffeinemc/mods/sodium/api/vertex/format/VertexFormatRegistry.d.ts'
export class VertexFormatRegistryImpl extends Object implements VertexFormatRegistry {
    static INSTANCE: VertexFormatRegistry;
    constructor()
    // private descriptions: JavaMap<any, any>;
    // private lock: StampedLock;
    allocateGlobalId(arg0: VertexFormat): number;
}