import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DrawCommandList } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/device/DrawCommandList.d.ts'
import type { MultiDrawBatch } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/device/MultiDrawBatch.d.ts'
import type { GlIndexType } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/tessellation/GlIndexType.d.ts'
export class GLRenderDevice$ImmediateDrawCommandList extends Object implements DrawCommandList {
    constructor(null_: GLRenderDevice$ImmediateDrawCommandList)
    close(): void;
    endTessellating(): void;
    flush(): void;
    multiDrawElementsBaseVertex(arg0: MultiDrawBatch, arg1: GlIndexType): void;
}