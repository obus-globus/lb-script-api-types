import type { AutoCloseable } from '../../../../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MultiDrawBatch } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/device/MultiDrawBatch.d.ts'
import type { GlIndexType } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/tessellation/GlIndexType.d.ts'
export interface DrawCommandList extends AutoCloseable, Object{
    close(): void;
    endTessellating(): void;
    flush(): void;
    multiDrawElementsBaseVertex(arg0: MultiDrawBatch, arg1: GlIndexType): void;
}