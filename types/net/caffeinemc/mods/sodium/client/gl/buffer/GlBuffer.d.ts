import type { GlObject } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/GlObject.d.ts'
import type { GlBufferMapping } from '../../../../../../../net/caffeinemc/mods/sodium/client/gl/buffer/GlBufferMapping.d.ts'
export abstract class GlBuffer extends GlObject {
    constructor()
    readonly activeMapping: GlBufferMapping;
    getActiveMapping(): GlBufferMapping;
    setActiveMapping(arg0: GlBufferMapping): void;
}